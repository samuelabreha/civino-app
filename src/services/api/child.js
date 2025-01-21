import api from './index';

export const childAPI = {
  getAll: async () => {
    const response = await api.get('/children');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/children/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/children', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/children/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/children/${id}`);
    return response.data;
  },

  getProgress: async (id) => {
    const response = await api.get(`/children/${id}/progress`);
    return response.data;
  },

  getActivities: async (id) => {
    const response = await api.get(`/children/${id}/activities`);
    return response.data;
  },

  addActivity: async (id, activityData) => {
    const response = await api.post(`/children/${id}/activities`, activityData);
    return response.data;
  },

  updateActivity: async (childId, activityId, activityData) => {
    const response = await api.put(
      `/children/${childId}/activities/${activityId}`,
      activityData
    );
    return response.data;
  },

  deleteActivity: async (childId, activityId) => {
    const response = await api.delete(
      `/children/${childId}/activities/${activityId}`
    );
    return response.data;
  },
};
