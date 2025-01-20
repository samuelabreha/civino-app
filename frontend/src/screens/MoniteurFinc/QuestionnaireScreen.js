import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { Dropdown } from '../../components/Dropdown';
import Calendar from '../../components/Calendar';
import AIComponent from '../../components/AIComponent';

const QuestionnaireScreen = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const childrenOptions = [
    { label: 'Emma Martin', value: 'emma' },
    { label: 'Lucas Bernard', value: 'lucas' },
    { label: 'Léa Dubois', value: 'lea' },
  ];

  const handleAIAnalysis = async (input) => {
    // Simulation d'une analyse IA
    return {
      analysis: "Analyse du comportement basée sur les observations...",
      suggestions: [
        "Encourager la participation aux activités de groupe",
        "Mettre en place un système de récompenses",
        "Organiser des sessions de dialogue régulières"
      ]
    };
  };

  return (
    <View style={styles.container}>
      <Header title="Questionnaire" />
      <ScrollView style={styles.content}>
        <Dropdown
          label="Sélectionner un enfant"
          options={childrenOptions}
          value={selectedChild}
          onChange={setSelectedChild}
        />
        
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true }
          }}
        />

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
});

export default QuestionnaireScreen;
