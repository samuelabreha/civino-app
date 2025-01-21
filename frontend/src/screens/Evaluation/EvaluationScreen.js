import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ResultatsEvaluation from '../../components/evaluation/ResultatsEvaluation';
import SuiviHebdomadaire from '../../components/evaluation/SuiviHebdomadaire';

const EvaluationScreen = () => {
  // Exemple de données pour démonstration
  const [evaluationData, setEvaluationData] = useState({
    childResponses: [
      { question: "Est-ce que tu dis bonjour ?", evaluation: "Vert" },
      { question: "Est-ce que tu utilises des phrases polies ?", evaluation: "Jaune" },
      { question: "Est-ce que tu partages tes jouets ?", evaluation: "Rouge" },
    ],
    adultResponses: [
      { question: "Est-ce que tu dis bonjour ?", evaluation: "Vert" },
      { question: "Est-ce que tu utilises des phrases polies ?", evaluation: "Jaune" },
      { question: "Est-ce que tu partages tes jouets ?", evaluation: "Vert" },
    ],
    dailyMedals: [
      { or: 2, argent: 1, bronze: 0 },
      { or: 3, argent: 0, bronze: 0 },
      { or: 4, argent: 1, bronze: 0 },
      { or: 3, argent: 2, bronze: 0 },
      { or: 2, argent: 1, bronze: 1 },
    ]
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Résultats de l'évaluation actuelle */}
        <ResultatsEvaluation 
          childResponses={evaluationData.childResponses}
          adultResponses={evaluationData.adultResponses}
        />

        {/* Suivi hebdomadaire */}
        <SuiviHebdomadaire 
          dailyMedals={evaluationData.dailyMedals}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 10,
  },
});

export default EvaluationScreen;
