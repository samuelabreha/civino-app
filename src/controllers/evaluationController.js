import { createEvaluation, getUserEvaluations, updateEvaluation, deleteEvaluation } from '../services/evaluationService';
import { calculateMedals, checkWeeklyReward, calculateOverall } from '../services/evaluationService';

// Fonction pour créer une évaluation
export const createEvaluationController = async (req, res) => {
    try {
        const evaluationData = req.body;
        console.log('Données reçues pour createEvaluation:', req.body); // Log des données reçues
        const evaluation = await createEvaluation(evaluationData);
        console.log('Évaluation créée:', evaluation); // Log de l'évaluation créée
        res.status(201).json(evaluation);
    } catch (error) {
        console.error('Erreur dans createEvaluationController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la création de l’évaluation', error });
    }
};

// Fonction pour récupérer les évaluations d'un utilisateur
export const getUserEvaluationsController = async (req, res) => {
    const userId = req.params.userId;
    try {
        console.log('Données reçues pour getUserEvaluations:', req.params); // Log des données reçues
        const evaluations = await getUserEvaluations(userId);
        console.log('Évaluations récupérées:', evaluations); // Log des évaluations récupérées
        res.status(200).json(evaluations);
    } catch (error) {
        console.error('Erreur dans getUserEvaluationsController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la récupération des évaluations', error });
    }
};

// Fonction pour mettre à jour une évaluation
export const updateEvaluationController = async (req, res) => {
    const evaluationId = req.params.evaluationId;
    const evaluationData = req.body;
    try {
        console.log('Données reçues pour updateEvaluation:', req.body); // Log des données reçues
        const updatedEvaluation = await updateEvaluation(evaluationId, evaluationData);
        console.log('Évaluation mise à jour:', updatedEvaluation); // Log de l'évaluation mise à jour
        res.status(200).json(updatedEvaluation);
    } catch (error) {
        console.error('Erreur dans updateEvaluationController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l’évaluation', error });
    }
};

// Fonction pour supprimer une évaluation
export const deleteEvaluationController = async (req, res) => {
    const evaluationId = req.params.evaluationId;
    try {
        console.log('Données reçues pour deleteEvaluation:', req.params); // Log des données reçues
        await deleteEvaluation(evaluationId);
        console.log('Évaluation supprimée:', evaluationId); // Log de l'évaluation supprimée
        res.status(204).send();
    } catch (error) {
        console.error('Erreur dans deleteEvaluationController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la suppression de l’évaluation', error });
    }
};

// Fonction pour calculer les médailles
export const calculateMedalsController = async (req, res) => {
    const { childResponses, adultResponses } = req.body;
    console.log('Données reçues pour calculateMedals:', req.body); // Log des données reçues
    try {
        const medals = calculateMedals(childResponses, adultResponses);
        console.log('Médailles calculées:', medals); // Log des médailles calculées
        res.status(200).json(medals);
    } catch (error) {
        console.error('Erreur dans calculateMedalsController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors du calcul des médailles', error });
    }
};

// Fonction pour vérifier la récompense hebdomadaire
export const checkWeeklyRewardController = async (req, res) => {
    const { dailyMedals } = req.body;
    console.log('Données reçues pour checkWeeklyReward:', req.body); // Log des données reçues
    try {
        const reward = checkWeeklyReward(dailyMedals);
        console.log('Récompense hebdomadaire:', reward); // Log de la récompense
        res.status(200).json(reward);
    } catch (error) {
        console.error('Erreur dans checkWeeklyRewardController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la vérification de la récompense', error });
    }
};

// Fonction pour calculer l'évaluation globale
export const calculateOverallController = async (req, res) => {
    const { childResponses, adultResponses } = req.body;
    console.log('Données reçues pour calculateOverall:', req.body); // Log des données reçues
    try {
        const overall = calculateOverall(childResponses, adultResponses);
        console.log('Évaluation globale:', overall); // Log de l'évaluation globale
        res.status(200).json(overall);
    } catch (error) {
        console.error('Erreur dans calculateOverallController:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors du calcul de l’évaluation globale', error });
    }
};
