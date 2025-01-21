import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { Dropdown } from '../../components/Dropdown';
import Calendar from '../../components/Calendar';
import AIComponent from '../../components/AIComponent';

const QuestionnaireScreen = () => {
  const [selectedGroupe, setSelectedGroupe] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [observations, setObservations] = useState('');

  const groupeOptions = [
    { label: 'Groupe A', value: 'groupeA' },
    { label: 'Groupe B', value: 'groupeB' },
    { label: 'Groupe C', value: 'groupeC' }
  ];

  const critèresÉvaluation = [
    { label: 'Dynamique de groupe', value: 'dynamique' },
    { label: 'Participation', value: 'participation' },
    { label: 'Comportement', value: 'comportement' },
    { label: 'Progrès', value: 'progres' }
  ];

  const handleSubmit = () => {
    // Logique pour sauvegarder les observations
    console.log('Observations soumises:', {
      groupe: selectedGroupe,
      date: selectedDate,
      observations
    });
  };

  const handleAIAnalysis = async (input) => {
    // Analyse IA des observations
    return {
      analyse: "Analyse de la dynamique de groupe basée sur les observations...",
      suggestions: [
        "Renforcer les activités collaboratives",
        "Mettre en place des rôles rotatifs",
        "Organiser des sessions de feedback en groupe"
      ]
    };
  };

  return (
    <View style={styles.container}>
      <Header title="Questionnaire d'observation" />
      <ScrollView style={styles.content}>
        <Dropdown
          label="Sélectionner un groupe"
          options={groupeOptions}
          value={selectedGroupe}
          onChange={setSelectedGroupe}
        />

        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true }
          }}
        />

        <View style={styles.observationsContainer}>
          <Text style={styles.label}>Observations de la séance</Text>
          <TextInput
            style={styles.observationsInput}
            multiline
            numberOfLines={6}
            placeholder="Notez vos observations sur le déroulement de la séance..."
            value={observations}
            onChangeText={setObservations}
          />
        </View>

        <View style={styles.critèresContainer}>
          {critèresÉvaluation.map((critère) => (
            <View key={critère.value} style={styles.critèreItem}>
              <Text style={styles.critèreLabel}>{critère.label}</Text>
              <View style={styles.noteContainer}>
                {[1, 2, 3, 4, 5].map((note) => (
                  <TouchableOpacity
                    key={note}
                    style={[
                      styles.noteButton,
                      { backgroundColor: note <= 3 ? '#2196F3' : '#e0e0e0' }
                    ]}
                  >
                    <Text style={[
                      styles.noteText,
                      { color: note <= 3 ? '#fff' : '#333' }
                    ]}>
                      {note}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Enregistrer l'évaluation
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
  critèresContainer: {
    marginVertical: 15,
  },
  critèreItem: {
    marginBottom: 15,
  },
  critèreLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteText: {
    fontSize: 16,
    fontWeight: '600',
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
