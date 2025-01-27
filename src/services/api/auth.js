import api from './index';

export const authAPI = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  },

  register: async (email, password, name) => {
    try {
      const response = await api.post('/auth/register', { email, password, name });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l’enregistrement:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      throw error;
    }
  },

  refreshToken: async (refreshToken) => {
    try {
      const response = await api.post('/auth/refresh', { refreshToken });
      return response.data;
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du token:', error);
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la demande de réinitialisation du mot de passe:', error);
      throw error;
    }
  },

  resetPassword: async (token, password) => {
    try {
      const response = await api.post('/auth/reset-password', { token, password });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      throw error;
    }
  },

  updateProfile: async (data) => {
    try {
      const response = await api.put('/auth/profile', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      throw error;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await api.put('/auth/change-password', {
        currentPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors du changement de mot de passe:', error);
      throw error;
    }
  },
};
