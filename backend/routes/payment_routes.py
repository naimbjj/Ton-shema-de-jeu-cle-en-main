from fastapi import APIRouter, HTTPException, Depends
from typing import List, Optional
import uuid
from datetime import datetime
import logging
from models.payment_models import (
    PaymentRequest, 
    PaymentResponse, 
    PaymentStatus, 
    Purchase, 
    AccessGrant
)
from motor.motor_asyncio import AsyncIOMotorClient
import os

# Configuration de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Router pour les paiements
payment_router = APIRouter(prefix="/payment", tags=["payments"])

# Récupération de la DB depuis l'environnement
from server import db

@payment_router.post("/create", response_model=PaymentResponse)
async def create_payment(payment_request: PaymentRequest):
    """
    Crée un nouveau paiement pour le produit BJJ Guard Master
    """
    try:
        # Générer un ID unique pour le paiement
        payment_id = str(uuid.uuid4())
        
        # Créer le paiement en base
        payment_data = {
            "payment_id": payment_id,
            "amount": payment_request.amount,
            "currency": payment_request.currency,
            "product_type": payment_request.product_type,
            "customer_email": payment_request.customer_email,
            "customer_name": payment_request.customer_name,
            "status": "pending",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        # Sauvegarder en base
        await db.payments.insert_one(payment_data)
        
        # URL de paiement simulée (en production, utiliser Stripe/PayPal)
        payment_url = f"https://payment.example.com/pay/{payment_id}"
        
        # Créer un achat associé
        purchase_data = {
            "id": str(uuid.uuid4()),
            "payment_id": payment_id,
            "customer_email": payment_request.customer_email,
            "customer_name": payment_request.customer_name,
            "product_type": payment_request.product_type,
            "amount": payment_request.amount,
            "currency": payment_request.currency,
            "status": "pending",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        await db.purchases.insert_one(purchase_data)
        
        logger.info(f"Paiement créé: {payment_id} pour {payment_request.customer_email}")
        
        return PaymentResponse(
            payment_id=payment_id,
            status="pending",
            amount=payment_request.amount,
            currency=payment_request.currency,
            payment_url=payment_url,
            created_at=datetime.utcnow()
        )
        
    except Exception as e:
        logger.error(f"Erreur lors de la création du paiement: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la création du paiement")

@payment_router.get("/status/{payment_id}", response_model=PaymentStatus)
async def get_payment_status(payment_id: str):
    """
    Récupère le statut d'un paiement
    """
    try:
        payment = await db.payments.find_one({"payment_id": payment_id})
        
        if not payment:
            raise HTTPException(status_code=404, detail="Paiement non trouvé")
        
        return PaymentStatus(
            payment_id=payment["payment_id"],
            status=payment["status"],
            amount=payment["amount"],
            customer_email=payment["customer_email"],
            product_type=payment["product_type"],
            paid_at=payment.get("paid_at"),
            created_at=payment["created_at"],
            updated_at=payment["updated_at"]
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Erreur lors de la récupération du statut: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération du statut")

@payment_router.post("/simulate-success/{payment_id}")
async def simulate_payment_success(payment_id: str):
    """
    Simule un paiement réussi (pour développement)
    """
    try:
        # Mettre à jour le statut du paiement
        payment_update = await db.payments.update_one(
            {"payment_id": payment_id},
            {
                "$set": {
                    "status": "completed",
                    "paid_at": datetime.utcnow(),
                    "updated_at": datetime.utcnow()
                }
            }
        )
        
        if payment_update.matched_count == 0:
            raise HTTPException(status_code=404, detail="Paiement non trouvé")
        
        # Mettre à jour l'achat
        await db.purchases.update_one(
            {"payment_id": payment_id},
            {
                "$set": {
                    "status": "completed",
                    "updated_at": datetime.utcnow()
                }
            }
        )
        
        # Récupérer les détails de l'achat
        purchase = await db.purchases.find_one({"payment_id": payment_id})
        
        if purchase:
            # Créer l'accès au produit
            access_data = {
                "id": str(uuid.uuid4()),
                "purchase_id": purchase["id"],
                "customer_email": purchase["customer_email"],
                "product_type": purchase["product_type"],
                "access_level": "full",
                "expires_at": None,  # Accès à vie
                "created_at": datetime.utcnow(),
                "is_active": True
            }
            
            await db.access_grants.insert_one(access_data)
            
            logger.info(f"Paiement simulé réussi pour {payment_id}")
            
            return {"message": "Paiement simulé avec succès", "payment_id": payment_id}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Erreur lors de la simulation: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la simulation du paiement")

@payment_router.get("/purchases", response_model=List[Purchase])
async def get_purchases(customer_email: Optional[str] = None, limit: int = 100):
    """
    Récupère la liste des achats
    """
    try:
        query = {}
        if customer_email:
            query["customer_email"] = customer_email
        
        purchases = await db.purchases.find(query).limit(limit).to_list(1000)
        
        return [Purchase(**purchase) for purchase in purchases]
        
    except Exception as e:
        logger.error(f"Erreur lors de la récupération des achats: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des achats")

@payment_router.get("/access/{customer_email}")
async def check_access(customer_email: str):
    """
    Vérifie l'accès d'un client au produit
    """
    try:
        access = await db.access_grants.find_one({
            "customer_email": customer_email,
            "is_active": True
        })
        
        if not access:
            return {"has_access": False, "message": "Aucun accès trouvé"}
        
        return {
            "has_access": True,
            "product_type": access["product_type"],
            "access_level": access["access_level"],
            "created_at": access["created_at"]
        }
        
    except Exception as e:
        logger.error(f"Erreur lors de la vérification d'accès: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la vérification d'accès")

@payment_router.get("/stats")
async def get_payment_stats():
    """
    Récupère les statistiques des paiements
    """
    try:
        total_payments = await db.payments.count_documents({})
        completed_payments = await db.payments.count_documents({"status": "completed"})
        pending_payments = await db.payments.count_documents({"status": "pending"})
        
        # Calcul du chiffre d'affaires
        pipeline = [
            {"$match": {"status": "completed"}},
            {"$group": {"_id": None, "total_revenue": {"$sum": "$amount"}}}
        ]
        
        revenue_result = await db.payments.aggregate(pipeline).to_list(1)
        total_revenue = revenue_result[0]["total_revenue"] if revenue_result else 0
        
        return {
            "total_payments": total_payments,
            "completed_payments": completed_payments,
            "pending_payments": pending_payments,
            "total_revenue": total_revenue,
            "conversion_rate": (completed_payments / total_payments * 100) if total_payments > 0 else 0
        }
        
    except Exception as e:
        logger.error(f"Erreur lors de la récupération des stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des statistiques")