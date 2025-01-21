import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography } from '../../../../styles/globalStyles';
import Header from '../../../../components/Header';

const MaisonDeQuartierScreen = ({ navigation, route }) => {
  const { statut, nom, prenom, contrats, evaluation } = route.params;
  const [responses, setResponses] = useState({});

  const questions = [
    {
      id: 1,
      question: "Aimes-tu venir à la maison de quartier ?",
      options: ["Beaucoup", "Un peu", "Pas du tout"],
    },
    {
      id: 2,
      question: "Comment trouves-tu les activités proposées ?",
      options: ["Très intéressantes", "Intéressantes", "Peu intéressantes", "Pas intéressantes"],
    },
    {
      id: 3,
      question: "T'entends-tu bien avec les autres enfants ?",
      options: ["Très bien", "Bien", "Moyen", "Pas bien"],
    },
    {
      id: 4,
      question: "Les animateurs t'aident-ils quand tu en as besoin ?",
      options: ["Toujours", "Souvent", "Parfois", "Jamais"],
    },
  ];

  const handleResponse = (questionId, response) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: response,
    }));
  };

  const handleNext = () => {
    navigation.navigate('Maison', {
      statut,
      nom,
      prenom,
      contrats,
      evaluation: {
        ...evaluation,
        maisonDeQuartier: responses,
      },
    });
  };

  const isComplete = Object.keys(responses).length === questions.length;

  return (
    <View style={styles.container}>
      <Header title="Questionnaire Maison de Quartier" />
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
          onPress={handleNext}
          disabled={!isComplete}
        >
          <Text style={styles.buttonText}>Continuer</Text>
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

export default MaisonDeQuartierScreen;
