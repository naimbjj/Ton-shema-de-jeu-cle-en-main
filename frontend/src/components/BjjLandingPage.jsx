import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { CheckCircle, Star, Calendar, Download, Play, Users, Target, Trophy } from 'lucide-react';

const BjjLandingPage = () => {
  const handlePurchase = () => {
    // Mock purchase action
    alert('Redirection vers le système de paiement... (Mock)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">BJJ GUARD MASTER</span>
            </div>
            <Badge variant="destructive" className="text-sm font-medium bg-red-600 text-white">
              10 PREMIERS UNIQUEMENT
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-900 border-blue-300">
                  MÉTHODE ÉPROUVÉE
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  CONSTRUIS UN JEU DANGEREUX DEPUIS TA GARDE
                  <br />
                  <span className="text-blue-700">MÊME SI T'ES DÉBUTANT</span>
                </h1>
                <p className="text-lg text-blue-800 font-medium leading-relaxed">
                  La méthode qui te donne un vrai jeu en garde - sans te perdre dans 100 techniques
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Construis enfin un jeu de garde <strong className="text-blue-900">logique, dangereux et imparable</strong> 
                  avec notre système complet + programmation physique pour l'été.
                </p>
              </div>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-800 font-bold text-lg">OFFRE SPÉCIALE - 10 PREMIERS UNIQUEMENT</span>
                </div>
                <p className="text-red-700 font-medium">
                  <strong>🎁 BONUS EXCLUSIF :</strong> Programmation physique spéciale été incluse pour être prêt pour septembre !
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePurchase}
                  size="lg" 
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Je construis mon jeu maintenant - 49€
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Accès immédiat après paiement</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-yellow-800">
                      <span className="text-2xl">49€</span> 
                      <span className="text-base line-through text-gray-500 ml-2">69€</span>
                    </p>
                    <p className="text-sm text-yellow-700">
                      <strong>Prix de lancement</strong> + Programmation physique été OFFERTE
                    </p>
                  </div>
                  <Badge className="bg-red-500 text-white">-29%</Badge>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1676220672943-5100a727ba36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxqaXUlMjBqaXRzdXxlbnwwfHx8fDE3NTI2MDQ1NTV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Guard position BJJ"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Position de garde fermée</p>
                  <p className="text-xs opacity-90">Maîtrise totale du jeu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tu reconnais cette frustration ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La plupart des débutants en BJJ paniquent en garde fermée. 
              Ils subissent, perdent confiance, et stagnent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-gray-700">Tu ne sais pas quoi faire quand tu es sur le dos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-gray-700">Tu apprends des techniques isolées sans comprendre le "jeu" global</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-gray-700">Tu bloques et tu subis en sparring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <p className="text-gray-700">Tu perds confiance et tu stagnes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdXxlbnwwfHx8fDE3NTI2MDQ1NTV8MA&ixlib=rb-4.1.0&q=85"
                alt="BJJ training"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La solution : Un système complet pour dominer la garde
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construis un jeu de garde logique et dangereux avec notre méthode éprouvée
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Mindmap Visual</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Comprends toutes les connexions entre les mouvements : 
                  garde → soumission → triangle → clé de bras → omoplata
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vidéo Explicative</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Une vidéo complète du mindmap, 
                  comme un coaching personnalisé pour maîtriser chaque connexion
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Programme 4 Semaines</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Un entraînement structuré avec des objectifs précis 
                  pour chaque phase : garde fermée, attaques, transitions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programme d'entraînement structuré - 4 semaines
            </h2>
            <p className="text-xl text-gray-600">
              Chaque semaine a un objectif précis pour construire ton jeu progressivement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: 1,
                title: "Garde fermée",
                description: "Maîtrise les bases, contrôle et posture",
                color: "bg-blue-100 text-blue-800"
              },
              {
                week: 2,
                title: "Attaques directes",
                description: "Triangle, armbar, et soumissions essentielles",
                color: "bg-green-100 text-green-800"
              },
              {
                week: 3,
                title: "Transitions",
                description: "Fluidité entre les positions et techniques",
                color: "bg-purple-100 text-purple-800"
              },
              {
                week: 4,
                title: "Jeu complet",
                description: "Intégration et mise en pratique avancée",
                color: "bg-orange-100 text-orange-800"
              }
            ].map((week, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${week.color}`}>
                    Semaine {week.week}
                  </div>
                  <CardTitle className="text-lg">{week.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{week.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bonus inclus dans ton pack
            </h2>
            <p className="text-xl text-gray-600">
              Des ressources supplémentaires pour accélérer ta progression
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Download className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">PDF "10 erreurs à éviter"</CardTitle>
                    <CardDescription>Les pièges les plus courants en garde</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un guide complet des erreurs que font 90% des débutants en garde fermée, 
                  avec les corrections pour chacune d'entre elles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Vidéo "Être dangereux sur le dos"</CardTitle>
                    <CardDescription>Technique mentale et physique</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comment développer l'état d'esprit du combattant qui reste dangereux 
                  même en position défensive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que tu vas obtenir
            </h2>
            <p className="text-xl text-gray-600">
              Une transformation complète de ton jeu de garde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Plus jamais perdu",
                description: "Tu sauras exactement quoi faire dans chaque situation"
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Jeu solide",
                description: "Construis une stratégie cohérente plutôt que des techniques isolées"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Progression 3x plus rapide",
                description: "Grâce à une vision globale et structurée"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Plus de confiance",
                description: "Retrouve le plaisir de t'entraîner avec des résultats visibles"
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Résultats en sparring",
                description: "Applique immédiatement ce que tu apprends"
              },
              {
                icon: <Play className="w-6 h-6" />,
                title: "Contenu à vie",
                description: "Accès permanent à tous les contenus et mises à jour"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  {benefit.icon}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Prêt à construire ton jeu de garde ?
              </h2>
              <p className="text-xl opacity-90">
                Rejoins des centaines de pratiquants qui ont transformé leur garde fermée
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-bold">39€</span>
                  <span className="text-xl line-through opacity-60">69€</span>
                  <Badge className="bg-red-500 text-white">-43%</Badge>
                </div>
                <p className="text-sm opacity-80">Offre de lancement limitée</p>
                <Button 
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Je construis mon jeu maintenant
                </Button>
                <p className="text-xs opacity-70">
                  🚀 Accès immédiat après paiement - Contenu disponible à vie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">BJJ GUARD MASTER</span>
              </div>
              <p className="text-gray-400">
                La méthode complète pour maîtriser la garde fermée en BJJ
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Questions ? support@bjjguardmaster.com
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Garantie</h4>
              <p className="text-gray-400">
                Satisfait ou remboursé sous 30 jours
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

export default BjjLandingPage;