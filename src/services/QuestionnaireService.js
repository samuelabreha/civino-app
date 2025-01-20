import firestore from '@react-native-firebase/firestore';
import { store } from '../redux/store';
import {
  setQuestionnaires,
  setCurrentQuestionnaire,
  setLoading,
  setError,
} from '../redux/slices/questionnairesSlice';

class QuestionnaireService {
  constructor() {
    this.collection = firestore().collection('questionnaires');
  }

  async getQuestionnaires() {
    try {
      store.dispatch(setLoading(true));
      const snapshot = await this.collection.get();
      const questionnaires = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      store.dispatch(setQuestionnaires(questionnaires));
      return questionnaires;
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async getQuestionnaireById(id) {
    try {
      store.dispatch(setLoading(true));
      const doc = await this.collection.doc(id).get();
      if (doc.exists) {
        const questionnaire = { id: doc.id, ...doc.data() };
        store.dispatch(setCurrentQuestionnaire(questionnaire));
        return questionnaire;
      }
      return null;
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async submitResponse(questionnaireId, responses, userId) {
    try {
      store.dispatch(setLoading(true));
      const timestamp = firestore.FieldValue.serverTimestamp();
      
      await firestore().collection('responses').add({
        questionnaireId,
        userId,
        responses,
        createdAt: timestamp,
      });

      // Mettre à jour les statistiques
      await this.updateStatistics(questionnaireId, responses);
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async updateStatistics(questionnaireId, responses) {
    const statsRef = firestore().collection('statistics').doc(questionnaireId);
    
    await firestore().runTransaction(async (transaction) => {
      const statsDoc = await transaction.get(statsRef);
      
      if (!statsDoc.exists) {
        transaction.set(statsRef, {
          totalResponses: 1,
          averageScores: responses,
        });
      } else {
        const currentStats = statsDoc.data();
        const newTotalResponses = currentStats.totalResponses + 1;
        
        // Calculer les nouvelles moyennes
        const newAverages = {};
        Object.keys(responses).forEach(questionId => {
          const currentAvg = currentStats.averageScores[questionId] || 0;
          const newValue = responses[questionId];
          newAverages[questionId] = (currentAvg * (newTotalResponses - 1) + newValue) / newTotalResponses;
        });

        transaction.update(statsRef, {
          totalResponses: newTotalResponses,
          averageScores: newAverages,
        });
      }
    });
  }

  async getUserResponses(userId) {
    try {
      store.dispatch(setLoading(true));
      const snapshot = await firestore()
        .collection('responses')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get();

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }
}

export default new QuestionnaireService();
