import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const QuestionnaireScreen = () => {
  const [responses, setResponses] = useState({
    humeur: '',
    activites: '',
    difficultes: '',
    succes: '',
  });

  const questions = [
    {
      id: 'humeur',
      question: 'Comment te sens-tu aujourd'hui ?',
      placeholder: 'Décris ton humeur...',
    },
    {
      id: 'activites',
      question: 'Quelles activités as-tu faites aujourd'hui ?',
      placeholder: 'Liste tes activités...',
    },
    {
      id: 'difficultes',
      question: 'As-tu rencontré des difficultés ?',
      placeholder: 'Parle des moments difficiles...',
    },
    {
      id: 'succes',
      question: 'De quoi es-tu fier(e) aujourd'hui ?',
      placeholder: 'Raconte tes réussites...',
    },
  ];

  const handleSubmit = () => {
    // Logique pour sauvegarder les réponses
    console.log('Réponses soumises:', responses);
  };

  return (
    <View style={styles.container}>
      <Header title="Mon questionnaire" />
      <ScrollView style={styles.content}>
        <Calendar
          onDayPress={(day) => console.log('Date sélectionnée:', day)}
          markedDates={{}}
        />

        <View style={styles.questionnaire}>
          {questions.map((q) => (
            <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.question}>{q.question}</Text>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={3}
                placeholder={q.placeholder}
                value={responses[q.id]}
                onChangeText={(text) => setResponses(prev => ({
                  ...prev,
                  [q.id]: text
                }))}
              />
            </View>
          ))}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Envoyer mes réponses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  questionnaire: {
    padding: 15,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuestionnaireScreen;
