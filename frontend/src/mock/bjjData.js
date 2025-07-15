// Mock data for BJJ Guard Master landing page

export const testimonials = [
  {
    id: 1,
    name: "Alex Martin",
    belt: "Ceinture bleue",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Avant ce programme, j'étais complètement perdu en garde fermée. Maintenant, je sais exactement quoi faire dans chaque situation. Ma progression a été énorme !",
    rating: 5,
    gym: "Team Submission"
  },
  {
    id: 2,
    name: "Sarah Dubois",
    belt: "Ceinture blanche",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332adbf?w=100&h=100&fit=crop&crop=face",
    content: "Le mindmap est génial ! J'ai enfin compris les connexions entre les techniques. Fini les techniques isolées, j'ai maintenant un vrai système.",
    rating: 5,
    gym: "BJJ Academy Paris"
  },
  {
    id: 3,
    name: "Marc Leroux",
    belt: "Ceinture bleue",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Le programme 4 semaines m'a donné la structure qu'il me manquait. Je recommande à tous ceux qui veulent progresser rapidement en garde.",
    rating: 5,
    gym: "Gracie Barra"
  }
];

export const programWeeks = [
  {
    week: 1,
    title: "Garde fermée - Les fondamentaux",
    description: "Maîtrise les bases, contrôle et posture",
    objectives: [
      "Contrôle de la posture adverse",
      "Maintien de la garde fermée",
      "Bases du breaking posture",
      "Première soumission : étranglement croisé"
    ],
    color: "bg-blue-100 text-blue-800",
    duration: "7 jours"
  },
  {
    week: 2,
    title: "Attaques directes",
    description: "Triangle, armbar, et soumissions essentielles",
    objectives: [
      "Triangle choke setup",
      "Armbar depuis la garde",
      "Étranglement de la manche",
      "Enchaînements d'attaques"
    ],
    color: "bg-green-100 text-green-800",
    duration: "7 jours"
  },
  {
    week: 3,
    title: "Transitions fluides",
    description: "Fluidité entre les positions et techniques",
    objectives: [
      "Triangle vers armbar",
      "Armbar vers omoplata",
      "Récupération de garde",
      "Timing des transitions"
    ],
    color: "bg-purple-100 text-purple-800",
    duration: "7 jours"
  },
  {
    week: 4,
    title: "Jeu complet",
    description: "Intégration et mise en pratique avancée",
    objectives: [
      "Système complet d'attaques",
      "Adaptation au sparring",
      "Stratégies avancées",
      "Mentalité du guard player"
    ],
    color: "bg-orange-100 text-orange-800",
    duration: "7 jours"
  }
];

export const bonusContent = [
  {
    id: 1,
    title: "PDF \"10 erreurs à éviter en garde\"",
    description: "Les pièges les plus courants en garde fermée",
    icon: "download",
    details: "Guide complet des erreurs que font 90% des débutants en garde fermée, avec les corrections détaillées pour chacune d'entre elles.",
    pages: "24 pages",
    format: "PDF"
  },
  {
    id: 2,
    title: "Vidéo \"Comment être dangereux sur le dos\"",
    description: "Technique mentale et physique",
    icon: "play",
    details: "Comment développer l'état d'esprit du combattant qui reste dangereux même en position défensive. Aspect mental et techniques concrètes.",
    duration: "35 minutes",
    format: "Vidéo HD"
  }
];

export const faqData = [
  {
    id: 1,
    question: "Ce programme convient-il aux débutants complets ?",
    answer: "Absolument ! Ce programme est spécialement conçu pour les débutants et ceintures bleues qui se sentent perdus en garde fermée. Nous partons des bases et construisons progressivement."
  },
  {
    id: 2,
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer: "Dès la première semaine, vous commencerez à comprendre la logique de la garde fermée. Les premiers résultats en sparring sont généralement visibles après 2-3 semaines de pratique."
  },
  {
    id: 3,
    question: "Ai-je besoin d'un partenaire pour pratiquer ?",
    answer: "Idéalement oui, mais de nombreux concepts peuvent être travaillés en solo. Le programme inclut des exercices de visualisation et des drills que vous pouvez faire seul."
  },
  {
    id: 4,
    question: "Le contenu est-il accessible à vie ?",
    answer: "Oui, une fois acheté, vous avez accès à tout le contenu à vie, y compris les futures mises à jour et améliorations."
  },
  {
    id: 5,
    question: "Y a-t-il une garantie ?",
    answer: "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours. Si le programme ne vous convient pas, nous vous remboursons intégralement."
  }
];

export const productFeatures = [
  {
    id: 1,
    title: "Mindmap visuel interactif",
    description: "Comprends toutes les connexions entre les mouvements",
    icon: "target",
    details: "Un schéma clair qui montre comment passer d'une technique à l'autre : garde → soumission → triangle → clé de bras → omoplata"
  },
  {
    id: 2,
    title: "Vidéo explicative complète",
    description: "Comme un coaching personnalisé",
    icon: "play",
    details: "Une vidéo détaillée qui explique chaque connexion du mindmap avec des démonstrations pratiques"
  },
  {
    id: 3,
    title: "Programme structuré 4 semaines",
    description: "Objectifs précis pour chaque phase",
    icon: "calendar",
    details: "Un plan d'entraînement progressif avec des objectifs clairs pour construire votre jeu semaine après semaine"
  }
];

export const benefits = [
  {
    id: 1,
    title: "Plus jamais perdu sur le dos",
    description: "Tu sauras exactement quoi faire dans chaque situation",
    icon: "target"
  },
  {
    id: 2,
    title: "Jeu solide et cohérent",
    description: "Construis une stratégie plutôt que des techniques isolées",
    icon: "trophy"
  },
  {
    id: 3,
    title: "Progression 3x plus rapide",
    description: "Grâce à une vision globale et structurée",
    icon: "users"
  },
  {
    id: 4,
    title: "Plus de confiance en sparring",
    description: "Retrouve le plaisir de t'entraîner avec des résultats visibles",
    icon: "star"
  },
  {
    id: 5,
    title: "Application immédiate",
    description: "Mets en pratique dès ton prochain entraînement",
    icon: "check-circle"
  },
  {
    id: 6,
    title: "Contenu à vie",
    description: "Accès permanent avec mises à jour incluses",
    icon: "play"
  }
];

export const pricing = {
  originalPrice: 69,
  currentPrice: 39,
  discount: 43,
  currency: "€",
  features: [
    "Mindmap visuel complet",
    "Vidéo explicative détaillée",
    "Programme 4 semaines",
    "PDF \"10 erreurs à éviter\"",
    "Vidéo bonus \"Dangereux sur le dos\"",
    "Accès à vie",
    "Mises à jour incluses",
    "Garantie 30 jours"
  ]
};

export const stats = [
  {
    number: "500+",
    label: "Pratiquants formés",
    description: "Ont transformé leur garde fermée"
  },
  {
    number: "4.8/5",
    label: "Note moyenne",
    description: "Satisfaction client"
  },
  {
    number: "30j",
    label: "Garantie",
    description: "Satisfait ou remboursé"
  },
  {
    number: "À vie",
    label: "Accès",
    description: "Contenu disponible"
  }
];

export const mindmapConnections = [
  {
    from: "Garde fermée",
    to: "Breaking posture",
    description: "Première étape essentielle"
  },
  {
    from: "Breaking posture",
    to: "Triangle setup",
    description: "Quand l'adversaire résiste"
  },
  {
    from: "Triangle setup",
    to: "Armbar",
    description: "Si le triangle échoue"
  },
  {
    from: "Armbar",
    to: "Omoplata",
    description: "Transition naturelle"
  },
  {
    from: "Omoplata",
    to: "Retour garde",
    description: "Maintien du contrôle"
  }
];

export default {
  testimonials,
  programWeeks,
  bonusContent,
  faqData,
  productFeatures,
  benefits,
  pricing,
  stats,
  mindmapConnections
};