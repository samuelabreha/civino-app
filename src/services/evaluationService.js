import axios from 'axios';

const API_URL = 'http://api.education-app.com/api/evaluations/';

// Fonction pour créer une évaluation
export const createEvaluation = async (evaluationData) => {
    try {
        const response = await axios.post(API_URL, evaluationData);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la création de l'évaluation: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la création de l'évaluation. Veuillez vérifier votre connexion internet.');
        } else {
            console.error('Erreur inconnue lors de la création de l'évaluation:', error);
        }
        throw error;
    }
};

// Fonction pour récupérer les évaluations d'un utilisateur
export const getUserEvaluations = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}user/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la récupération des évaluations: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la récupération des évaluations. Veuillez vérifier votre connexion internet.');
        } else {
            console.error('Erreur inconnue lors de la récupération des évaluations:', error);
        }
        throw error;
    }
};

// Fonction pour mettre à jour une évaluation
export const updateEvaluation = async (evaluationId, evaluationData) => {
    try {
        const response = await axios.put(`${API_URL}${evaluationId}`, evaluationData);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la mise à jour de l'évaluation: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la mise à jour de l'évaluation. Veuillez vérifier votre connexion internet.');
        } else {
            console.error('Erreur inconnue lors de la mise à jour de l'évaluation:', error);
        }
        throw error;
    }
};

// Fonction pour supprimer une évaluation
export const deleteEvaluation = async (evaluationId) => {
    try {
        const response = await axios.delete(`${API_URL}${evaluationId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Erreur ${error.response.status} lors de la suppression de l'évaluation: ${error.response.data}`);
        } else if (error.request) {
            console.error('Erreur de réseau lors de la suppression de l'évaluation. Veuillez vérifier votre connexion internet.');
        } else {
            console.error('Erreur inconnue lors de la suppression de l'évaluation:', error);
        }
        throw error;
    }
};
