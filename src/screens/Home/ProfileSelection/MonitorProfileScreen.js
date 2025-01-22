import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MonitorProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={80} color="#2196F3" />
        <Text style={styles.title}>Profil du Moniteur FINC</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Monitor', { screen: 'Questionnaire' })}
        >
          <Icon name="question-answer" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Questionnaire</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Monitor', { screen: 'ImageEvaluation' })}
        >
          <Icon name="image" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Évaluation par Image</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Monitor', { screen: 'ProgressReport' })}
        >
          <Icon name="trending-up" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Rapport de Progression</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Monitor', { screen: 'Statistics' })}
        >
          <Icon name="bar-chart" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Statistiques Comportementales</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Monitor', { screen: 'Overview' })}
        >
          <Icon name="dashboard" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Vue d'Ensemble</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  section: {
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default MonitorProfileScreen;
