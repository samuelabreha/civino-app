import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const ContratsComportementScreen = () => {
  const [selectedContract, setSelectedContract] = useState(null);

  const contracts = [
    {
      id: 1,
      title: "Respect des règles en classe",
      objectives: [
        { text: "Lever la main avant de parler", completed: true },
        { text: "Rester assis pendant les cours", completed: true },
        { text: "Écouter quand les autres parlent", completed: false }
      ],
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      progress: 66
    },
    {
      id: 2,
      title: "Participation aux activités",
      objectives: [
        { text: "Participer à au moins 3 activités par semaine", completed: true },
        { text: "Aider à ranger le matériel", completed: true },
        { text: "Proposer des idées d'activités", completed: true }
      ],
      startDate: "2025-01-15",
      endDate: "2025-02-15",
      progress: 100
    }
  ];

  const renderProgressBar = (progress) => (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Mes contrats" />
      <ScrollView style={styles.content}>
        {contracts.map((contract) => (
          <TouchableOpacity
            key={contract.id}
            style={styles.contractCard}
            onPress={() => setSelectedContract(
              selectedContract === contract.id ? null : contract.id
            )}
          >
            <View style={styles.contractHeader}>
              <Text style={styles.contractTitle}>{contract.title}</Text>
              <Text style={styles.contractDates}>
                Du {new Date(contract.startDate).toLocaleDateString('fr-FR')} 
                {'\n'}
                au {new Date(contract.endDate).toLocaleDateString('fr-FR')}
              </Text>
            </View>

            {renderProgressBar(contract.progress)}

            {selectedContract === contract.id && (
              <View style={styles.objectivesList}>
                {contract.objectives.map((objective, index) => (
                  <View key={index} style={styles.objectiveItem}>
                    <Text style={[
                      styles.objectiveText,
                      objective.completed && styles.completedObjective
                    ]}>
                      {objective.completed ? '✓' : '○'} {objective.text}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.newContractButton}>
          <Text style={styles.newContractButtonText}>
            Créer un nouveau contrat
          </Text>
        </TouchableOpacity>
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
  contractCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  contractHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  contractTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  contractDates: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
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
  objectivesList: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  objectiveItem: {
    marginBottom: 8,
  },
  objectiveText: {
    fontSize: 14,
    color: '#666',
  },
  completedObjective: {
    color: '#4CAF50',
    textDecorationLine: 'line-through',
  },
  newContractButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  newContractButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContratsComportementScreen;
