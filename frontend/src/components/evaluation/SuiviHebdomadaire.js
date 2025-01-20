import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { checkWeeklyReward } from '../../utils/evaluation/calculEvaluation';

const SuiviHebdomadaire = ({ dailyMedals }) => {
  const weeklyResults = checkWeeklyReward(dailyMedals);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suivi Hebdomadaire</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Médailles d'Or</Text>
          <Text style={styles.statValue}>{weeklyResults.totalOr}</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Moyenne par Jour</Text>
          <Text style={styles.statValue}>
            {weeklyResults.moyenneOrParJour.toFixed(1)}
          </Text>
        </View>
      </View>

      <View style={styles.rewardContainer}>
        <Text style={styles.rewardTitle}>Récompense de la Semaine</Text>
        <Text style={[
          styles.rewardStatus,
          { color: weeklyResults.recompense.includes('Débloquée') ? '#4CAF50' : '#FF9800' }
        ]}>
          {weeklyResults.recompense}
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>Progression vers la Récompense</Text>
        <View style={styles.progressBar}>
          <View style={[
            styles.progressFill,
            { width: `${Math.min((weeklyResults.moyenneOrParJour / 3) * 100, 100)}%` }
          ]} />
        </View>
        <Text style={styles.progressText}>
          {((weeklyResults.moyenneOrParJour / 3) * 100).toFixed(1)}% de l'objectif
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardContainer: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  rewardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  rewardStatus: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: 20,
  },
  progressTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    marginTop: 5,
    textAlign: 'center',
    color: '#666',
  },
});

export default SuiviHebdomadaire;
