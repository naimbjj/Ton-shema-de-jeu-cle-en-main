import axios from 'axios';
import { API_ENDPOINTS } from '../config/constants';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour les erreurs
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const paymentService = {
  // Créer un nouveau paiement
  async createPayment(paymentData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.PAYMENT.CREATE, paymentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erreur lors de la création du paiement');
    }
  },

  // Vérifier le statut d'un paiement
  async getPaymentStatus(paymentId) {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.PAYMENT.STATUS}/${paymentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erreur lors de la récupération du statut');
    }
  },

  // Simuler un paiement réussi (développement)
  async simulatePaymentSuccess(paymentId) {
    try {
      const response = await apiClient.post(`${API_ENDPOINTS.PAYMENT.SIMULATE_SUCCESS}/${paymentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erreur lors de la simulation');
    }
  },

  // Vérifier l'accès d'un client
  async checkAccess(customerEmail) {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.PAYMENT.ACCESS}/${customerEmail}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erreur lors de la vérification d\'accès');
    }
  },

  // Récupérer les statistiques
  async getStats() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PAYMENT.STATS);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erreur lors de la récupération des statistiques');
    }
  }
};

export default apiClient;