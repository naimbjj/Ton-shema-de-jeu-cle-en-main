export const API_ENDPOINTS = {
  PAYMENT: {
    CREATE: '/api/payment/create',
    STATUS: '/api/payment/status',
    SIMULATE_SUCCESS: '/api/payment/simulate-success',
    PURCHASES: '/api/payment/purchases',
    ACCESS: '/api/payment/access',
    STATS: '/api/payment/stats'
  }
};

export const PRODUCTS = {
  GUARD_MASTER: {
    type: 'guard_master',
    name: 'BJJ Guard Master',
    originalPrice: 69,
    currentPrice: 49,
    currency: 'EUR',
    description: 'Programme complet pour maîtriser la garde fermée en BJJ',
    features: [
      'Mindmap visuel complet',
      'Vidéo explicative détaillée',
      'Plan d\'entraînement 4 semaines',
      'PDF "10 erreurs à éviter"',
      'Vidéo "Être dangereux sur le dos"',
      'Programmation physique été OFFERTE'
    ]
  }
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};