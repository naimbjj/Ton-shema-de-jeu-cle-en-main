from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class PaymentRequest(BaseModel):
    amount: float = Field(..., description="Montant du paiement en euros")
    currency: str = Field(default="EUR", description="Devise du paiement")
    product_type: str = Field(..., description="Type de produit (guard_master, etc.)")
    customer_email: str = Field(..., description="Email du client")
    customer_name: Optional[str] = Field(None, description="Nom du client")
    
class PaymentResponse(BaseModel):
    payment_id: str = Field(..., description="ID unique du paiement")
    status: str = Field(..., description="Statut du paiement")
    amount: float = Field(..., description="Montant du paiement")
    currency: str = Field(..., description="Devise du paiement")
    payment_url: Optional[str] = Field(None, description="URL de paiement")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class PaymentStatus(BaseModel):
    payment_id: str = Field(..., description="ID du paiement")
    status: str = Field(..., description="Statut actuel")
    amount: float = Field(..., description="Montant")
    customer_email: str = Field(..., description="Email du client")
    product_type: str = Field(..., description="Type de produit")
    paid_at: Optional[datetime] = Field(None, description="Date de paiement")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class Purchase(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    payment_id: str = Field(..., description="ID du paiement")
    customer_email: str = Field(..., description="Email du client")
    customer_name: Optional[str] = Field(None, description="Nom du client")
    product_type: str = Field(..., description="Type de produit")
    amount: float = Field(..., description="Montant payé")
    currency: str = Field(default="EUR", description="Devise")
    status: str = Field(default="pending", description="Statut de l'achat")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class AccessGrant(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    purchase_id: str = Field(..., description="ID de l'achat")
    customer_email: str = Field(..., description="Email du client")
    product_type: str = Field(..., description="Type de produit")
    access_level: str = Field(default="full", description="Niveau d'accès")
    expires_at: Optional[datetime] = Field(None, description="Date d'expiration")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = Field(default=True, description="Accès actif")