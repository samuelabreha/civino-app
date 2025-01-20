import axios from 'axios';
import Config from 'react-native-config';
import { Platform } from 'react-native';

const BASE_URL = Config.API_URL || 'http://localhost:3000/api';

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Platform': Platform.OS,
      },
    });

    // Intercepteur pour les requêtes
    this.client.interceptors.request.use(
      (config) => {
        // Ajouter des headers ou modifier la requête si nécessaire
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Intercepteur pour les réponses
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        // Gérer les erreurs globalement
        if (error.response?.status === 401) {
          // Gérer l'expiration du token
          this.handleUnauthorized();
        }
        return Promise.reject(error);
      }
    );
  }

  setAuthToken(token) {
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  removeAuthToken() {
    delete this.client.defaults.headers.common['Authorization'];
  }

  handleUnauthorized() {
    // À implémenter : logique de refresh token ou déconnexion
  }

  // Méthodes API pour l'authentification
  async login(credentials) {
    return this.client.post('/auth/login', credentials);
  }

  async register(userData) {
    return this.client.post('/auth/register', userData);
  }

  // Méthodes API pour les profils
  async getUserProfile(userId) {
    return this.client.get(`/users/${userId}/profile`);
  }

  async updateUserProfile(userId, profileData) {
    return this.client.put(`/users/${userId}/profile`, profileData);
  }

  // Méthodes API pour les évaluations
  async getEvaluations(userId, filters = {}) {
    return this.client.get('/evaluations', { params: { userId, ...filters } });
  }

  async submitEvaluation(evaluationData) {
    return this.client.post('/evaluations', evaluationData);
  }

  // Méthodes API pour les documents
  async uploadDocument(formData) {
    return this.client.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async getDocuments(filters = {}) {
    return this.client.get('/documents', { params: filters });
  }

  async deleteDocument(documentId) {
    return this.client.delete(`/documents/${documentId}`);
  }

  // Méthodes API pour le calendrier
  async getEvents(filters = {}) {
    return this.client.get('/events', { params: filters });
  }

  async createEvent(eventData) {
    return this.client.post('/events', eventData);
  }

  // Méthodes API pour les statistiques
  async getStatistics(userId, period) {
    return this.client.get('/statistics', { params: { userId, period } });
  }

  // Méthodes API pour les contrats de comportement
  async getBehaviorContracts(userId) {
    return this.client.get('/behavior-contracts', { params: { userId } });
  }

  async createBehaviorContract(contractData) {
    return this.client.post('/behavior-contracts', contractData);
  }

  // Méthodes API pour les notifications
  async getNotifications(userId) {
    return this.client.get('/notifications', { params: { userId } });
  }

  async updateNotificationSettings(userId, settings) {
    return this.client.put(`/users/${userId}/notification-settings`, settings);
  }

  // Méthodes API pour les contacts
  async getContacts(userId) {
    return this.client.get('/contacts', { params: { userId } });
  }

  async addContact(contactData) {
    return this.client.post('/contacts', contactData);
  }

  async removeContact(contactId) {
    return this.client.delete(`/contacts/${contactId}`);
  }
}

export default new ApiClient();
