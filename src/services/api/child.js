import api from './index';

export const childAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/children');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des enfants:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/children/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await api.post('/children', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l'enfant:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await api.put(`/children/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/children/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  getProgress: async (id) => {
    try {
      const response = await api.get(`/children/${id}/progress`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des progrès de l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  getActivities: async (id) => {
    try {
      const response = await api.get(`/children/${id}/activities`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des activités de l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  addActivity: async (id, activityData) => {
    try {
      const response = await api.post(`/children/${id}/activities`, activityData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de l'ajout d'une activité pour l'enfant avec ID ${id}:`, error);
      throw error;
    }
  },

  updateActivity: async (childId, activityId, activityData) => {
    try {
      const response = await api.put(
        `/children/${childId}/activities/${activityId}`,
        activityData
      );
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'activité ${activityId} pour l'enfant avec ID ${childId}:`, error);
      throw error;
    }
  },

  deleteActivity: async (childId, activityId) => {
    try {
      const response = await api.delete(
        `/children/${childId}/activities/${activityId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'activité ${activityId} pour l'enfant avec ID ${childId}:`, error);
      throw error;
    }
  },
};
