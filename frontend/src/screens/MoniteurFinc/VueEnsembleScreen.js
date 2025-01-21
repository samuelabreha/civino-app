import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const VueEnsembleScreen = ({ navigation }) => {
  const enfants = [
    {
      id: 1,
      nom: 'Emma Martin',
      age: 8,
      progression: 75,
      prochainRDV: '2025-01-22',
      derniereActivite: 'Atelier comportemental',
    },
    {
      id: 2,
      nom: 'Lucas Bernard',
      age: 10,
      progression: 85,
      prochainRDV: '2025-01-23',
      derniereActivite: 'Séance individuelle',
    },
    {
      id: 3,
      nom: 'Léa Dubois',
      age: 9,
      progression: 90,
      prochainRDV: '2025-01-24',
      derniereActivite: 'Activité de groupe',
    },
  ];

  const renderProgressBar = (progression) => (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progression}%` }]} />
      <Text style={styles.progressText}>{progression}%</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Vue d'ensemble" />
      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Enfants suivis</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Progression moyenne</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>RDV cette semaine</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Enfants suivis</Text>
        {enfants.map((enfant) => (
          <TouchableOpacity
            key={enfant.id}
            style={styles.enfantCard}
            onPress={() => navigation.navigate('DetailEnfant', { enfantId: enfant.id })}
          >
            <View style={styles.enfantHeader}>
              <Text style={styles.enfantNom}>{enfant.nom}</Text>
              <Text style={styles.enfantAge}>{enfant.age} ans</Text>
            </View>
            
            <Text style={styles.label}>Progression</Text>
            {renderProgressBar(enfant.progression)}
            
            <View style={styles.enfantDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.label}>Prochain RDV</Text>
                <Text style={styles.value}>
                  {new Date(enfant.prochainRDV).toLocaleDateString('fr-FR')}
                </Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.label}>Dernière activité</Text>
                <Text style={styles.value}>{enfant.derniereActivite}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  enfantCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  enfantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  enfantNom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  enfantAge: {
    fontSize: 14,
    color: '#666',
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  progressText: {
    position: 'absolute',
    right: 5,
    color: '#fff',
    fontSize: 12,
    lineHeight: 20,
  },
  enfantDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailItem: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
});

export default VueEnsembleScreen;
