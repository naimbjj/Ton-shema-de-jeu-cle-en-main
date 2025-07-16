import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  CheckCircle, 
  Star, 
  Calendar, 
  Download, 
  Play, 
  Users, 
  Target, 
  Trophy, 
  Shield, 
  BookOpen, 
  Zap,
  ArrowRight,
  Award,
  MapPin,
  Clock,
  Brain,
  Loader2
} from 'lucide-react';
import { heroImage, mindmapImage, championImage, competitorImage } from '../assets/images';
import { paymentService } from '../services/apiService';
import { PRODUCTS } from '../config/constants';

const BjjLandingPageV2 = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('initial'); // initial, processing, success, error

  const handlePurchase = async () => {
    setIsProcessing(true);
    setPaymentStep('processing');
    
    try {
      // Simuler la collecte des données utilisateur
      const customerEmail = prompt('Entrez votre email pour continuer:');
      const customerName = prompt('Entrez votre nom:');
      
      if (!customerEmail || !customerName) {
        setIsProcessing(false);
        setPaymentStep('initial');
        return;
      }
      
      // Créer le paiement
      const paymentData = {
        amount: PRODUCTS.GUARD_MASTER.currentPrice,
        currency: PRODUCTS.GUARD_MASTER.currency,
        product_type: PRODUCTS.GUARD_MASTER.type,
        customer_email: customerEmail,
        customer_name: customerName
      };
      
      const payment = await paymentService.createPayment(paymentData);
      
      // Simuler le succès du paiement après 2 secondes
      setTimeout(async () => {
        try {
          await paymentService.simulatePaymentSuccess(payment.payment_id);
          setPaymentStep('success');
          
          // Afficher le message de succès
          alert(`🎉 PAIEMENT RÉUSSI ! 🎉\n\n` +
                `Merci ${customerName} !\n\n` +
                `✅ Accès immédiat à ton compte\n` +
                `✅ Mindmap + Vidéo explicative\n` +
                `✅ Programme 4 semaines\n` +
                `✅ PDF "10 erreurs à éviter"\n` +
                `✅ Vidéo "Être dangereux sur le dos"\n` +
                `✅ 🎁 Programmation physique été OFFERTE\n\n` +
                `Un email de confirmation a été envoyé à ${customerEmail}\n\n` +
                `ID de paiement: ${payment.payment_id}`);
          
        } catch (error) {
          setPaymentStep('error');
          alert('Erreur lors du traitement du paiement: ' + error.message);
        }
        
        setIsProcessing(false);
      }, 2000);
      
    } catch (error) {
      setIsProcessing(false);
      setPaymentStep('error');
      alert('Erreur lors de la création du paiement: ' + error.message);
    }
  };

  const faqData = [
    {
      question: "Ce programme convient-il vraiment aux débutants ?",
      answer: "Absolument ! Le programme est spécialement conçu pour les débutants qui se sentent perdus en garde. Nous partons des fondamentaux et construisons progressivement, étape par étape."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "Dès la première semaine, tu commenceras à comprendre la logique de la garde. Les premiers résultats en sparring sont visibles après 2-3 semaines de pratique régulière."
    },
    {
      question: "J'ai besoin d'un partenaire pour m'entraîner ?",
      answer: "Idéalement oui, mais de nombreux concepts peuvent être travaillés seul. Le programme inclut des exercices de visualisation et des drills solo."
    },
    {
      question: "Le contenu est-il accessible à vie ?",
      answer: "Oui, une fois acheté, tu as accès à tout le contenu à vie, y compris les futures mises à jour."
    },
    {
      question: "Y a-t-il une garantie ?",
      answer: "Oui, garantie satisfait ou remboursé 30 jours. Si le programme ne te convient pas, remboursement intégral."
    }
  ];

  const modules = [
    {
      id: 1,
      title: "Mindmap + Vidéo Explicative",
      description: "Comprends ENFIN les connexions entre toutes les techniques",
      details: "Un schéma visuel clair qui montre comment passer d'une technique à l'autre : garde → soumission → triangle → clé de bras → omoplata. Plus une vidéo complète qui détaille chaque connexion.",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Plan d'Entraînement 4 Semaines",
      description: "Programme structuré avec objectifs précis pour chaque semaine",
      details: "Semaine 1: Garde fermée. Semaine 2: Attaques directes. Semaine 3: Transitions fluides. Semaine 4: Jeu complet. Progression logique garantie.",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Bonus PDF + Vidéo Erreurs",
      description: "Évite les 10 erreurs que font 90% des débutants",
      details: "PDF détaillé des erreurs courantes + vidéo 'Comment être dangereux sur le dos' pour développer le bon état d'esprit du guard player.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BJJ GUARD MASTER</span>
            </div>
            <Badge className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold">
              OFFRE LIMITÉE
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  CONSTRUIS UN JEU 
                  <span className="text-blue-500"> DANGEREUX</span>
                  <br />DEPUIS TA GARDE
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  La méthode qui te donne un vrai jeu en garde - 
                  <strong className="text-blue-500"> sans te perdre dans 100 techniques</strong>
                </p>
                <p className="text-lg text-gray-600">
                  Même si t'es débutant, construis un système logique et imparable en 4 semaines
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-800 font-bold text-lg">OFFRE SPÉCIALE - 10 PREMIERS UNIQUEMENT</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-gray-900">49€</span>
                    <span className="text-xl line-through text-gray-500">69€</span>
                    <Badge className="bg-red-500 text-white">-29%</Badge>
                  </div>
                  <p className="text-red-700 font-medium">
                    <strong>🎁 BONUS EXCLUSIF :</strong> Programmation physique été OFFERTE (valeur 30€)
                  </p>
                  <p className="text-sm text-gray-600">Valeur totale : 99€ → Tu économises 50€</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Traitement...
                    </>
                  ) : (
                    <>
                      Je débloque mon jeu BJJ - 49€
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Accès immédiat + contenu à vie</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={mindmapImage}
                  alt="JEU AU SOL STRUCTURÉ - Le mindmap pour un BJJ cohérent"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold">JEU AU SOL STRUCTURÉ</p>
                  <p className="text-sm opacity-90">Le mindmap pour un BJJ cohérent</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">+200</div>
                  <div className="text-xs text-gray-600">Étudiants</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-center">
                  <div className="flex space-x-1 justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Simplified */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">+200</div>
              <p className="text-gray-600">Débutants guidés</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <p className="text-gray-600">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tu reconnais cette situation ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              90% des débutants font ces erreurs en garde fermée
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Tu ne sais pas quoi faire quand tu es sur le dos",
                "Tu apprends des techniques isolées sans logique",
                "Tu subis en sparring et tu perds confiance",
                "Tu stagnes sans comprendre le 'système'"
              ].map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <img 
                src={competitorImage}
                alt="BJJ competitor in action"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Modules */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La solution : 3 modules pour <span className="text-blue-500">dominer</span> la garde
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un système complet, structuré, et facile à suivre
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={module.id} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeModule === module.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${module.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {module.icon}
                  </div>
                  <div className="text-sm font-semibold text-blue-500 mb-2">
                    MODULE {index + 1}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-gray-600 mb-4">
                    {module.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500">
                    {module.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Après ce programme, tu auras :
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tu ne seras plus jamais paumé",
                description: "Fini la panique en garde, tu auras un plan clair"
              },
              {
                title: "Tu sauras quoi faire TOUT DE SUITE",
                description: "Réflexes automatiques et réactions instinctives"
              },
              {
                title: "Tu construis un vrai jeu structuré",
                description: "Plus de techniques isolées, mais un système cohérent"
              },
              {
                title: "Tu gagnes en confiance et en défense",
                description: "Plaisir retrouvé et progression visible en sparring"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Prêt à construire ton jeu de garde ?
              </h2>
              <p className="text-xl text-blue-100">
                Rejoins les +200 pratiquants qui ont transformé leur garde
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="space-y-6">
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-bold text-sm">
                  🔥 OFFRE LIMITÉE - 10 PREMIERS UNIQUEMENT
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-4xl font-bold text-white">49€</span>
                    <span className="text-2xl line-through text-blue-200">69€</span>
                    <Badge className="bg-orange-500 text-white">-29%</Badge>
                  </div>
                  <p className="text-lg font-semibold text-blue-100">+ Programmation physique été OFFERTE</p>
                  <p className="text-sm text-blue-200">Valeur totale : 99€ → Tu économises 50€</p>
                </div>
                <Button 
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Traitement...
                    </>
                  ) : (
                    <>
                      Je débloque mon jeu BJJ - 49€
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-blue-200">
                  Accès immédiat + contenu à vie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-700">
              Tout ce que tu dois savoir avant de commencer
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Transforme ton jeu de garde dès aujourd'hui
              </h2>
              <p className="text-xl text-gray-700">
                Plus de 200 débutants ont déjà franchi le pas
              </p>
            </div>

            <Button 
              onClick={handlePurchase}
              disabled={isProcessing}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 w-6 h-6 animate-spin" />
                  Traitement...
                </>
              ) : (
                <>
                  Je débloque mon jeu BJJ - 49€
                  <ArrowRight className="ml-2 w-6 h-6" />
                </>
              )}
            </Button>
            
            <p className="text-sm text-gray-500">
              Accès immédiat + contenu à vie
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">BJJ GUARD MASTER</span>
              </div>
              <p className="text-gray-400">
                La méthode complète pour maîtriser la garde fermée
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@bjjguardmaster.com
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Garantie</h4>
              <p className="text-gray-400">
                Satisfait ou remboursé 30 jours
              </p>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 BJJ Guard Master. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BjjLandingPageV2;