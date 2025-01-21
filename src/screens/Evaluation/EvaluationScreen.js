import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import ImageEvaluation from '../../components/evaluation/ImageEvaluation';
import firebaseService from '../../services/firebase.service';

const EvaluationScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSaveEvaluation = async (evaluationData) => {
    try {
      setIsSubmitting(true);
      
      // Sauvegarder l'évaluation dans Firebase
      await firebaseService.saveEvaluation(evaluationData);
      
      Alert.alert(
        t('evaluation.success.title'),
        t('evaluation.success.message'),
        [
          {
            text: t('common.ok'),
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      Alert.alert(
        t('evaluation.error.title'),
        t('evaluation.error.message'),
        [
          {
            text: t('common.ok'),
          },
        ]
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageEvaluation
        onSave={handleSaveEvaluation}
        disabled={isSubmitting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default EvaluationScreen;
