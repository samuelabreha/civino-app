import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContractDetailScreen = ({ route }) => {
  const { type } = route.params;
  const [selectedSection, setSelectedSection] = useState('rules');

  const getContractTitle = () => {
    switch (type) {
      case 'school':
        return 'École';
      case 'home':
        return 'Maison';
      case 'center':
        return 'Maison de quartier';
      default:
        return '';
    }
  };

  const rules = [
    {
      id: 1,
      title: 'Respect des autres',
      description: 'Écouter et respecter les autres personnes',
      icon: 'people',
    },
    {
      id: 2,
      title: 'Participation',
      description: 'Participer activement aux activités',
      icon: 'star',
    },
    {
      id: 3,
      title: 'Communication',
      description: 'Communiquer calmement et poliment',
      icon: 'chat',
    },
  ];

  const objectives = [
    {
      id: 1,
      title: 'Objectif hebdomadaire',
      progress: 75,
      description: 'Maintenir un comportement calme',
    },
    {
      id: 2,
      title: 'Objectif mensuel',
      progress: 60,
      description: 'Améliorer la participation',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name={type === 'school' ? 'school' : type === 'home' ? 'home' : 'location-city'} 
          size={40} 
          color="#2196F3" 
        />
        <Text style={styles.title}>Contrat {getContractTitle()}</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedSection === 'rules' && styles.selectedTab]}
          onPress={() => setSelectedSection('rules')}
        >
          <Icon name="list" size={24} color={selectedSection === 'rules' ? '#2196F3' : '#757575'} />
          <Text style={[styles.tabText, selectedSection === 'rules' && styles.selectedTabText]}>
            Règles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedSection === 'objectives' && styles.selectedTab]}
          onPress={() => setSelectedSection('objectives')}
        >
          <Icon name="track-changes" size={24} color={selectedSection === 'objectives' ? '#2196F3' : '#757575'} />
          <Text style={[styles.tabText, selectedSection === 'objectives' && styles.selectedTabText]}>
            Objectifs
          </Text>
        </TouchableOpacity>
      </View>

      {selectedSection === 'rules' ? (
        <View style={styles.rulesContainer}>
          {rules.map((rule) => (
            <View key={rule.id} style={styles.ruleCard}>
              <Icon name={rule.icon} size={24} color="#2196F3" />
              <View style={styles.ruleInfo}>
                <Text style={styles.ruleTitle}>{rule.title}</Text>
                <Text style={styles.ruleDescription}>{rule.description}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.objectivesContainer}>
          {objectives.map((objective) => (
            <View key={objective.id} style={styles.objectiveCard}>
              <Text style={styles.objectiveTitle}>{objective.title}</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${objective.progress}%` }]} />
              </View>
              <Text style={styles.objectiveDescription}>{objective.description}</Text>
              <Text style={styles.progressText}>{objective.progress}%</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  selectedTab: {
    backgroundColor: '#E3F2FD',
  },
  tabText: {
    fontSize: 16,
    color: '#757575',
    marginLeft: 5,
  },
  selectedTabText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  rulesContainer: {
    padding: 15,
  },
  ruleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ruleInfo: {
    marginLeft: 15,
    flex: 1,
  },
  ruleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ruleDescription: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  objectivesContainer: {
    padding: 15,
  },
  objectiveCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  objectiveTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  objectiveDescription: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ContractDetailScreen;
