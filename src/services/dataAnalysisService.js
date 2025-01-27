import axios from 'axios';

const API_URL = '/api/analytics';

export const getUserAnalytics = async (userId) => {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
};

export const getAppUsageStats = async () => {
    const response = await axios.get(`${API_URL}/usage`);
    return response.data;
};

export const getUserPerformanceReports = async (userId) => {
    const response = await axios.get(`/api/performance/user/${userId}`);
    return response.data;
};

export const getOverallUsageStatistics = async () => {
    const response = await axios.get('/api/performance/usage');
    return response.data;
};
