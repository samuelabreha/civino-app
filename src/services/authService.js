import axios from 'axios';

const API_URL = 'https://api.education-app.com/api/auth/';

// Fonction pour se connecter
export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
};

// Fonction pour se déconnecter
export const logout = () => {
    localStorage.removeItem('user');
};

// Fonction pour s'inscrire
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
};

// Fonction pour rafraîchir le token
export const refreshToken = async (refreshToken) => {
    const response = await axios.post(`${API_URL}refresh`, { refreshToken });
    return response.data;
};
