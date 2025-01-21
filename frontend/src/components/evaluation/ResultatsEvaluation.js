import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateOverall } from '../../utils/evaluation/calculEvaluation';

const ResultatsEvaluation = ({ childResponses, adultResponses }) => {
  const results = calculateOverall(childResponses, adultResponses);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Médailles Obtenues</Text>
        <View style={styles.medalsContainer}>
          <Text style={styles.medal}>🥇 Or: {results.medals.or}</Text>
          <Text style={styles.medal}>🥈 Argent: {results.medals.argent}</Text>
          <Text style={styles.medal}>🥉 Bronze: {results.medals.bronze}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Évaluation de l'Enfant</Text>
        <Text style={styles.text}>Moyenne: {results.enfant.average}</Text>
        <Text style={styles.text}>Appréciation: {results.enfant.appreciation}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Évaluation de l'Adulte</Text>
        <Text style={styles.text}>Moyenne: {results.adulte.average}</Text>
        <Text style={styles.text}>Appréciation: {results.adulte.appreciation}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Correspondance des Réponses</Text>
        <Text style={styles.text}>
          Parfaite: {results.correspondance.pourcentageOr.toFixed(1)}%
        </Text>
        <Text style={styles.text}>
          Modérée: {results.correspondance.pourcentageArgent.toFixed(1)}%
        </Text>
        <Text style={styles.text}>
          Faible: {results.correspondance.pourcentageBronze.toFixed(1)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  medalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  medal: {
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#666',
  },
});

export default ResultatsEvaluation;
