import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChildProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="child-care" size={80} color="#2196F3" />
        <Text style={styles.title}>Profil de l'Enfant</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Child', { screen: 'Contracts' })}
        >
          <Icon name="assignment" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Contrats de Comportement</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Child', { screen: 'Questionnaire' })}
        >
          <Icon name="question-answer" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Questionnaires</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Child', { screen: 'ProgressReport' })}
        >
          <Icon name="trending-up" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Rapport de Progression</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Child', { screen: 'Statistics' })}
        >
          <Icon name="bar-chart" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Statistiques</Text>
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

export default ChildProfileScreen;
