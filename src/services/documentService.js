import axios from 'axios';

const API_URL = 'https://api.education-app.com/api/documents/';

// Fonction pour télécharger un document
export const uploadDocument = async (documentData) => {
    const response = await axios.post(API_URL, documentData);
    return response.data;
};

// Fonction pour récupérer les documents d'un utilisateur
export const getUserDocuments = async (userId) => {
    const response = await axios.get(`${API_URL}user/${userId}`);
    return response.data;
};

// Fonction pour récupérer tous les documents
export const fetchDocuments = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

// Fonction pour ajouter un document
export const addDocument = async (documentData) => {
    const response = await axios.post(API_URL, documentData);
    return response.data;
};

// Fonction pour supprimer un document
export const deleteDocument = async (documentId) => {
    const response = await axios.delete(`${API_URL}${documentId}`);
    return response.data;
};
