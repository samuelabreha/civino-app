import api from './index';

export const contractAPI = {
  getAll: async () => {
    const response = await api.get('/contracts');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/contracts/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/contracts', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/contracts/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/contracts/${id}`);
    return response.data;
  },

  sign: async (id, signature) => {
    const response = await api.post(`/contracts/${id}/sign`, { signature });
    return response.data;
  },

  getSignatures: async (id) => {
    const response = await api.get(`/contracts/${id}/signatures`);
    return response.data;
  },

  addComment: async (id, comment) => {
    const response = await api.post(`/contracts/${id}/comments`, { comment });
    return response.data;
  },

  getComments: async (id) => {
    const response = await api.get(`/contracts/${id}/comments`);
    return response.data;
  },

  getHistory: async (id) => {
    const response = await api.get(`/contracts/${id}/history`);
    return response.data;
  },

  generatePDF: async (id) => {
    const response = await api.get(`/contracts/${id}/pdf`, {
      responseType: 'blob',
    });
    return response.data;
  },
};
