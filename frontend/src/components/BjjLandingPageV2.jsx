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
  Brain
} from 'lucide-react';

const BjjLandingPageV2 = () => {
  const [activeModule, setActiveModule] = useState(1);

  const handlePurchase = () => {
    alert('Redirection vers le système de paiement...\n\nPACK COMPLET BJJ GUARD MASTER:\n• Mindmap visuel complet\n• Vidéo explicative détaillée\n• Plan d\'entraînement 4 semaines\n• PDF "10 erreurs à éviter"\n• Vidéo "Être dangereux sur le dos"\n• 🎁 PROGRAMMATION PHYSIQUE ÉTÉ OFFERTE\n\nPRIX: 49€ (au lieu de 69€)\nAccès immédiat + contenu à vie');
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
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Je débloque mon jeu BJJ - 49€
                  <ArrowRight className="ml-2 w-5 h-5" />
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
                  src="/api/placeholder/600/400"
                  alt="JEU AU SOL STRUCTURÉ - Le mindmap pour un BJJ cohérent"
                  className="w-full h-96 object-cover"
                  style={{
                    backgroundImage: `url('data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array([255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1, 1, 1, 0, 72, 0, 72, 0, 0, 255, 219, 0, 67, 0, 8, 6, 6, 7, 6, 5, 8, 7, 7, 7, 9, 9, 8, 10, 12, 20, 13, 12, 11, 11, 12, 25, 18, 19, 15, 20, 29, 26, 31, 30, 29, 26, 28, 28, 32, 36, 46, 39, 32, 34, 44, 35, 28, 28, 40, 55, 41, 44, 48, 49, 52, 52, 52, 31, 39, 57, 61, 56, 50, 60, 46, 51, 52, 50, 255, 219, 0, 67, 1, 9, 9, 9, 12, 11, 12, 24, 13, 13, 24, 50, 33, 28, 33, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 255, 192, 0, 17, 8, 1, 144, 2, 88, 3, 1, 34, 0, 2, 17, 1, 3, 17, 1, 255, 196, 0, 31, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 255, 196, 0, 181, 16, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125, 1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 255, 196, 0, 31, 1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 255, 196, 0, 181, 17, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119, 0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250, 255, 218, 0, 12, 3, 1, 0, 2, 17, 3, 17, 0, 63, 0, 250, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 40, 162, 128, 10, 255, 217]))}`
                  }}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdXxlbnwwfHx8fDE3NTI2MDQ1NTV8MA&ixlib=rb-4.1.0&q=85"
                alt="BJJ frustration"
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                </div>
                <Button 
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Je débloque mon jeu BJJ - 49€
                  <ArrowRight className="ml-2 w-5 h-5" />
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
            <p className="text-xl text-gray-600">
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
              <p className="text-xl text-gray-600">
                Plus de 200 débutants ont déjà franchi le pas
              </p>
            </div>

            <Button 
              onClick={handlePurchase}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Je débloque mon jeu BJJ - 49€
              <ArrowRight className="ml-2 w-6 h-6" />
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