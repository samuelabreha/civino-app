import api from './index';

export const schoolAPI = {
  getAll: async () => {
    const response = await api.get('/schools');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/schools/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/schools', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/schools/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/schools/${id}`);
    return response.data;
  },

  getStats: async (id) => {
    const response = await api.get(`/schools/${id}/stats`);
    return response.data;
  },

  getTeachers: async (id) => {
    const response = await api.get(`/schools/${id}/teachers`);
    return response.data;
  },

  getStudents: async (id) => {
    const response = await api.get(`/schools/${id}/students`);
    return response.data;
  },

  addTeacher: async (schoolId, teacherId) => {
    const response = await api.post(`/schools/${schoolId}/teachers`, {
      teacherId,
    });
    return response.data;
  },

  removeTeacher: async (schoolId, teacherId) => {
    const response = await api.delete(`/schools/${schoolId}/teachers/${teacherId}`);
    return response.data;
  },

  addStudent: async (schoolId, studentId) => {
    const response = await api.post(`/schools/${schoolId}/students`, {
      studentId,
    });
    return response.data;
  },

  removeStudent: async (schoolId, studentId) => {
    const response = await api.delete(`/schools/${schoolId}/students/${studentId}`);
    return response.data;
  },

  getEvents: async (id) => {
    const response = await api.get(`/schools/${id}/events`);
    return response.data;
  },

  addEvent: async (schoolId, eventData) => {
    const response = await api.post(`/schools/${schoolId}/events`, eventData);
    return response.data;
  },
};
