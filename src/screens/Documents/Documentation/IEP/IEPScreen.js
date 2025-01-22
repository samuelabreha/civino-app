import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IEPScreen = () => {
  const handleDownload = () => {
    // Logique pour télécharger le PEI
  };

  const handleEdit = () => {
    // Logique pour éditer le PEI
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="description" size={40} color="#2196F3" />
        <Text style={styles.title}>Plan d'Éducation Individualisé</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations Générales</Text>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Nom de l'enfant:</Text>
            <Text style={styles.value}>Jean Dupont</Text>
            <Text style={styles.label}>Date de création:</Text>
            <Text style={styles.value}>15 septembre 2024</Text>
            <Text style={styles.label}>Dernière mise à jour:</Text>
            <Text style={styles.value}>20 janvier 2025</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs Principaux</Text>
          <View style={styles.objectivesList}>
            <View style={styles.objectiveItem}>
              <Icon name="check-circle" size={24} color="#4CAF50" />
              <Text style={styles.objectiveText}>
                Amélioration de la concentration en classe
              </Text>
            </View>
            <View style={styles.objectiveItem}>
              <Icon name="check-circle" size={24} color="#4CAF50" />
              <Text style={styles.objectiveText}>
                Développement des compétences sociales
              </Text>
            </View>
            <View style={styles.objectiveItem}>
              <Icon name="check-circle" size={24} color="#4CAF50" />
              <Text style={styles.objectiveText}>
                Gestion des émotions
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Intervenants</Text>
          <View style={styles.interventionsList}>
            <View style={styles.interventionItem}>
              <Icon name="person" size={24} color="#2196F3" />
              <View style={styles.interventionInfo}>
                <Text style={styles.interventionTitle}>Enseignant Principal</Text>
                <Text style={styles.interventionName}>Marie Martin</Text>
              </View>
            </View>
            <View style={styles.interventionItem}>
              <Icon name="person" size={24} color="#2196F3" />
              <View style={styles.interventionInfo}>
                <Text style={styles.interventionTitle}>Moniteur FINC</Text>
                <Text style={styles.interventionName}>Pierre Dubois</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
          <Icon name="edit" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Modifier le PEI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleDownload}>
          <Icon name="file-download" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Télécharger (PDF)</Text>
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
  contentContainer: {
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  objectivesList: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  objectiveText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  interventionsList: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  interventionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  interventionInfo: {
    marginLeft: 10,
  },
  interventionTitle: {
    fontSize: 14,
    color: '#757575',
  },
  interventionName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  actionsContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default IEPScreen;
