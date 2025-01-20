import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const VueEnsembleScreen = ({ navigation }) => {
  const groupes = [
    {
      id: 1,
      nom: "Groupe A",
      effectif: 12,
      progression: 75,
      prochaineSéance: "2025-01-22",
    },
    {
      id: 2,
      nom: "Groupe B",
      effectif: 15,
      progression: 80,
      prochaineSéance: "2025-01-23",
    },
    {
      id: 3,
      nom: "Groupe C",
      effectif: 10,
      progression: 85,
      prochaineSéance: "2025-01-24",
    }
  ];

  const activitésRécentes = [
    {
      id: 1,
      type: "Atelier",
      titre: "Expression artistique",
      date: "2025-01-20",
      participants: 8,
      statut: "terminé"
    },
    {
      id: 2,
      type: "Évaluation",
      titre: "Bilan mensuel",
      date: "2025-01-19",
      participants: 15,
      statut: "en cours"
    }
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
            <Text style={styles.statValue}>37</Text>
            <Text style={styles.statLabel}>Enfants suivis</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Groupes actifs</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>80%</Text>
            <Text style={styles.statLabel}>Taux de participation</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Mes groupes</Text>
        {groupes.map((groupe) => (
          <TouchableOpacity
            key={groupe.id}
            style={styles.groupeCard}
            onPress={() => navigation.navigate('DetailGroupe', { groupeId: groupe.id })}
          >
            <View style={styles.groupeHeader}>
              <Text style={styles.groupeNom}>{groupe.nom}</Text>
              <Text style={styles.groupeEffectif}>{groupe.effectif} enfants</Text>
            </View>
            {renderProgressBar(groupe.progression)}
            <Text style={styles.prochaineSéance}>
              Prochaine séance : {new Date(groupe.prochaineSéance).toLocaleDateString('fr-FR')}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Activités récentes</Text>
        {activitésRécentes.map((activité) => (
          <TouchableOpacity
            key={activité.id}
            style={styles.activitéCard}
            onPress={() => navigation.navigate('DetailActivité', { activitéId: activité.id })}
          >
            <View style={styles.activitéHeader}>
              <Text style={styles.activitéType}>{activité.type}</Text>
              <Text style={[
                styles.activitéStatut,
                { color: activité.statut === 'terminé' ? '#4CAF50' : '#FF9800' }
              ]}>
                {activité.statut}
              </Text>
            </View>
            <Text style={styles.activitéTitre}>{activité.titre}</Text>
            <View style={styles.activitéDetails}>
              <Text style={styles.activitéDate}>
                {new Date(activité.date).toLocaleDateString('fr-FR')}
              </Text>
              <Text style={styles.activitéParticipants}>
                {activité.participants} participants
              </Text>
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
    marginTop: 20,
    color: '#333',
  },
  groupeCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  groupeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  groupeNom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  groupeEffectif: {
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
  prochaineSéance: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  activitéCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  activitéHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  activitéType: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '600',
  },
  activitéStatut: {
    fontSize: 14,
    fontWeight: '600',
  },
  activitéTitre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  activitéDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activitéDate: {
    fontSize: 14,
    color: '#666',
  },
  activitéParticipants: {
    fontSize: 14,
    color: '#666',
  },
});

export default VueEnsembleScreen;
