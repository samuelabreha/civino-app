import api from './index';

export const referenceAPI = {
  getResources: async () => {
    const response = await api.get('/reference/resources');
    return response.data;
  },

  getResourceById: async (id) => {
    const response = await api.get(`/reference/resources/${id}`);
    return response.data;
  },

  uploadResource: async (file, metadata) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await api.post('/reference/resources', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  updateResource: async (id, data) => {
    const response = await api.put(`/reference/resources/${id}`, data);
    return response.data;
  },

  deleteResource: async (id) => {
    const response = await api.delete(`/reference/resources/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/reference/categories');
    return response.data;
  },

  createCategory: async (categoryData) => {
    const response = await api.post('/reference/categories', categoryData);
    return response.data;
  },

  updateCategory: async (id, categoryData) => {
    const response = await api.put(`/reference/categories/${id}`, categoryData);
    return response.data;
  },

  deleteCategory: async (id) => {
    const response = await api.delete(`/reference/categories/${id}`);
    return response.data;
  },

  searchResources: async (query) => {
    const response = await api.get('/reference/search', {
      params: { q: query },
    });
    return response.data;
  },

  downloadResource: async (id) => {
    const response = await api.get(`/reference/resources/${id}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },

  getResourceStats: async (id) => {
    const response = await api.get(`/reference/resources/${id}/stats`);
    return response.data;
  },
};
