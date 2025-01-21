import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdminProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="admin-panel-settings" size={80} color="#2196F3" />
        <Text style={styles.title}>Profil de l'Administrateur</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'Users' })}
        >
          <Icon name="people" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Gestion des Utilisateurs</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'Permissions' })}
        >
          <Icon name="security" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Gestion des Permissions</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'Data' })}
        >
          <Icon name="storage" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Gestion des Données</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'Backup' })}
        >
          <Icon name="backup" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Sauvegarde et Restauration</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'Logs' })}
        >
          <Icon name="history" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Journaux d'Activité</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings', { screen: 'SystemSettings' })}
        >
          <Icon name="settings" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Paramètres Système</Text>
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

export default AdminProfileScreen;
