import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { Dropdown } from '../../components/Dropdown';
import Calendar from '../../components/Calendar';
import AIComponent from '../../components/AIComponent';

const QuestionnaireScreen = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [observations, setObservations] = useState('');

  const studentOptions = [
    { label: 'Emma Martin', value: 'emma' },
    { label: 'Lucas Bernard', value: 'lucas' },
    { label: 'Léa Dubois', value: 'lea' }
  ];

  const behaviorCategories = [
    { label: 'Participation en classe', value: 'participation' },
    { label: 'Interaction avec les autres', value: 'interaction' },
    { label: 'Concentration', value: 'concentration' },
    { label: 'Respect des règles', value: 'rules' }
  ];

  const handleSubmit = () => {
    // Logique pour sauvegarder les observations
    console.log('Observations soumises:', {
      student: selectedStudent,
      date: selectedDate,
      observations
    });
  };

  const handleAIAnalysis = async (input) => {
    // Simulation d'analyse IA
    return {
      analysis: "Analyse du comportement basée sur les observations...",
      suggestions: [
        "Adapter le niveau de difficulté des exercices",
        "Proposer plus d'activités en groupe",
        "Mettre en place un système de récompenses"
      ]
    };
  };

  return (
    <View style={styles.container}>
      <Header title="Questionnaire d'observation" />
      <ScrollView style={styles.content}>
        <Dropdown
          label="Sélectionner un élève"
          options={studentOptions}
          value={selectedStudent}
          onChange={setSelectedStudent}
        />

        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true }
          }}
        />

        <View style={styles.observationsContainer}>
          <Text style={styles.label}>Observations</Text>
          <TextInput
            style={styles.observationsInput}
            multiline
            numberOfLines={6}
            placeholder="Notez vos observations sur le comportement de l'élève..."
            value={observations}
            onChangeText={setObservations}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Enregistrer les observations
          </Text>
        </TouchableOpacity>

        <AIComponent onAnalyze={handleAIAnalysis} />
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
    padding: 15,
  },
  observationsContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  observationsInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuestionnaireScreen;
