import axios from 'axios';

const API_URL = 'http://api.education-app.com/api/notifications/';

// Fonction pour récupérer les notifications d'un utilisateur
export const getUserNotifications = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}user/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la récupération des notifications: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la récupération des notifications');
        } else {
            console.error('Erreur inconnue lors de la récupération des notifications:', error);
        }
        throw error;
    }
};

// Fonction pour marquer une notification comme lue
export const markNotificationAsRead = async (notificationId) => {
    try {
        const response = await axios.post(`${API_URL}read/${notificationId}`);
        if (response && response.data !== null && response.data !== undefined) {
            return response.data;
        } else {
            throw new Error('Réponse invalide de l API');
        }
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la mise à jour de la notification: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la mise à jour de la notification');
        } else {
            console.error('Erreur inconnue lors de la mise à jour de la notification:', error.message || error);
        }
        throw error;
    }
};

// Fonction pour supprimer une notification
export const deleteNotification = async (notificationId) => {
    try {
        const response = await axios.delete(`${API_URL}${notificationId}`);
        if (response && response.data !== null && response.data !== undefined) {
            return response.data;
        } else {
            throw new Error('Réponse invalide de l API');
        }
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la suppression de la notification: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la suppression de la notification');
        } else {
            console.error('Erreur inconnue lors de la suppression de la notification:', error);
        }
        throw error;
    }
};
