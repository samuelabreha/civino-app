import api from './index';

export const teacherAPI = {
  getAll: async () => {
    const response = await api.get('/teachers');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/teachers/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/teachers', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/teachers/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/teachers/${id}`);
    return response.data;
  },

  getStats: async (id) => {
    const response = await api.get(`/teachers/${id}/stats`);
    return response.data;
  },

  getStudents: async (id) => {
    const response = await api.get(`/teachers/${id}/students`);
    return response.data;
  },

  getClasses: async (id) => {
    const response = await api.get(`/teachers/${id}/classes`);
    return response.data;
  },

  addClass: async (teacherId, classData) => {
    const response = await api.post(`/teachers/${teacherId}/classes`, classData);
    return response.data;
  },

  updateClass: async (teacherId, classId, classData) => {
    const response = await api.put(
      `/teachers/${teacherId}/classes/${classId}`,
      classData
    );
    return response.data;
  },

  deleteClass: async (teacherId, classId) => {
    const response = await api.delete(
      `/teachers/${teacherId}/classes/${classId}`
    );
    return response.data;
  },

  getSchedule: async (id) => {
    const response = await api.get(`/teachers/${id}/schedule`);
    return response.data;
  },

  updateSchedule: async (id, scheduleData) => {
    const response = await api.put(`/teachers/${id}/schedule`, scheduleData);
    return response.data;
  },

  getAvailability: async (id) => {
    const response = await api.get(`/teachers/${id}/availability`);
    return response.data;
  },

  updateAvailability: async (id, availabilityData) => {
    const response = await api.put(
      `/teachers/${id}/availability`,
      availabilityData
    );
    return response.data;
  },
};
