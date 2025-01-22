import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ParentsProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="people" size={80} color="#2196F3" />
        <Text style={styles.title}>Profil des Parents</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Documents', { screen: 'Reports' })}
        >
          <Icon name="description" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Rapports d'Observation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Documents', { screen: 'Contracts' })}
        >
          <Icon name="assignment" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Contrats de Comportement</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Documents', { screen: 'Progress' })}
        >
          <Icon name="trending-up" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Suivi des Progrès</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Documents', { screen: 'Calendar' })}
        >
          <Icon name="event" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Calendrier des Activités</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Contacts')}
        >
          <Icon name="contacts" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Contacts</Text>
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

export default ParentsProfileScreen;
