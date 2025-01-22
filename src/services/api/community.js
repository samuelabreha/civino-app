import api from './index';

export const communityAPI = {
  getEvents: async () => {
    const response = await api.get('/community/events');
    return response.data;
  },

  getEventById: async (id) => {
    const response = await api.get(`/community/events/${id}`);
    return response.data;
  },

  createEvent: async (eventData) => {
    const response = await api.post('/community/events', eventData);
    return response.data;
  },

  updateEvent: async (id, eventData) => {
    const response = await api.put(`/community/events/${id}`, eventData);
    return response.data;
  },

  deleteEvent: async (id) => {
    const response = await api.delete(`/community/events/${id}`);
    return response.data;
  },

  joinEvent: async (id) => {
    const response = await api.post(`/community/events/${id}/join`);
    return response.data;
  },

  leaveEvent: async (id) => {
    const response = await api.post(`/community/events/${id}/leave`);
    return response.data;
  },

  getParticipants: async (id) => {
    const response = await api.get(`/community/events/${id}/participants`);
    return response.data;
  },

  getDiscussions: async (eventId) => {
    const response = await api.get(`/community/events/${eventId}/discussions`);
    return response.data;
  },

  addDiscussion: async (eventId, discussionData) => {
    const response = await api.post(
      `/community/events/${eventId}/discussions`,
      discussionData
    );
    return response.data;
  },

  updateDiscussion: async (eventId, discussionId, discussionData) => {
    const response = await api.put(
      `/community/events/${eventId}/discussions/${discussionId}`,
      discussionData
    );
    return response.data;
  },

  deleteDiscussion: async (eventId, discussionId) => {
    const response = await api.delete(
      `/community/events/${eventId}/discussions/${discussionId}`
    );
    return response.data;
  },
};
