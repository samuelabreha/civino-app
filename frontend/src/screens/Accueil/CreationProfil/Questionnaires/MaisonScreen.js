import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography } from '../../../../styles/globalStyles';
import Header from '../../../../components/Header';

const MaisonScreen = ({ navigation, route }) => {
  const { statut, nom, prenom, contrats, evaluation } = route.params;
  const [responses, setResponses] = useState({});

  const questions = [
    {
      id: 1,
      question: "Comment te sens-tu à la maison ?",
      options: ["Très bien", "Bien", "Moyen", "Pas bien", "Très mal"],
    },
    {
      id: 2,
      question: "As-tu un endroit calme pour faire tes devoirs ?",
      options: ["Oui, toujours", "Oui, parfois", "Non, rarement", "Non, jamais"],
    },
    {
      id: 3,
      question: "Parles-tu de ta journée avec ta famille ?",
      options: ["Tous les jours", "Souvent", "Parfois", "Jamais"],
    },
    {
      id: 4,
      question: "As-tu des responsabilités à la maison ?",
      options: ["Beaucoup", "Quelques-unes", "Très peu", "Aucune"],
    },
    {
      id: 5,
      question: "Comment sont tes relations avec ta famille ?",
      options: ["Excellentes", "Bonnes", "Moyennes", "Difficiles"],
    },
  ];

  const handleResponse = (questionId, response) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: response,
    }));
  };

  const handleFinish = () => {
    const finalEvaluation = {
      ...evaluation,
      maison: responses,
    };

    // Navigation vers le rapport de progression avec toutes les données
    navigation.navigate('RapportProgression', {
      statut,
      nom,
      prenom,
      contrats,
      evaluation: finalEvaluation,
    });
  };

  const isComplete = Object.keys(responses).length === questions.length;

  return (
    <View style={styles.container}>
      <Header title="Questionnaire Maison" />
      <ScrollView style={styles.content}>
        {questions.map((q) => (
          <View key={q.id} style={styles.questionContainer}>
            <Text style={styles.question}>{q.question}</Text>
            <View style={styles.optionsContainer}>
              {q.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    responses[q.id] === option && styles.selectedOption,
                  ]}
                  onPress={() => handleResponse(q.id, option)}
                >
                  <Text style={[
                    styles.optionText,
                    responses[q.id] === option && styles.selectedOptionText,
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.button, !isComplete && styles.buttonDisabled]}
          onPress={handleFinish}
          disabled={!isComplete}
        >
          <Text style={styles.buttonText}>Terminer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  questionContainer: {
    marginBottom: 24,
  },
  question: {
    ...typography.h2,
    marginBottom: 16,
  },
  optionsContainer: {
    marginLeft: 16,
  },
  optionButton: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  selectedOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    ...typography.body,
  },
  selectedOptionText: {
    color: colors.background,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonDisabled: {
    backgroundColor: colors.lightGray,
  },
  buttonText: {
    ...typography.body,
    color: colors.background,
  },
});

export default MaisonScreen;
