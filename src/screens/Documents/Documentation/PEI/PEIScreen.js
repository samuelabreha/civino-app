import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PEIScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const peiDocuments = [
    {
      id: '1',
      title: 'PEI - Septembre 2024',
      date: '2024-09-01',
      status: 'active',
      context: 'Maison de quartier',
      objectives: [
        'Amélioration de la gestion des émotions',
        'Développement des compétences sociales',
        'Renforcement de l'autonomie'
      ],
      lastUpdate: '2024-09-15'
    },
    {
      id: '2',
      title: 'PEI - Août 2024',
      date: '2024-08-01',
      status: 'archived',
      context: 'Maison de quartier',
      objectives: [
        'Gestion du stress',
        'Communication avec les pairs',
        'Organisation personnelle'
      ],
      lastUpdate: '2024-08-30'
    }
  ];

  const renderPEICard = ({ item }) => (
    <View style={styles.peiCard}>
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={[
            styles.statusBadge,
            { backgroundColor: item.status === 'active' ? '#4CAF50' : '#757575' }
          ]}>
            <Text style={styles.statusText}>
              {item.status === 'active' ? 'Actif' : 'Archivé'}
            </Text>
          </View>
        </View>
        <Text style={styles.contextText}>{item.context}</Text>
      </View>

      <View style={styles.objectivesContainer}>
        <Text style={styles.sectionTitle}>Objectifs :</Text>
        {item.objectives.map((objective, index) => (
          <View key={index} style={styles.objectiveItem}>
            <Icon name="check-circle" size={20} color="#2196F3" />
            <Text style={styles.objectiveText}>{objective}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.updateText}>
          Dernière mise à jour : {item.lastUpdate}
        </Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="visibility" size={20} color="#2196F3" />
            <Text style={styles.actionButtonText}>Voir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="file-download" size={20} color="#2196F3" />
            <Text style={styles.actionButtonText}>Télécharger</Text>
          </TouchableOpacity>
          {item.status === 'active' && (
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="edit" size={20} color="#2196F3" />
              <Text style={styles.actionButtonText}>Modifier</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="description" size={40} color="#2196F3" />
        <Text style={styles.title}>Plan d'Éducation Individualisé</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedPeriod === 'current' && styles.filterButtonActive
          ]}
          onPress={() => setSelectedPeriod('current')}
        >
          <Text style={[
            styles.filterButtonText,
            selectedPeriod === 'current' && styles.filterButtonTextActive
          ]}>
            PEI Actuel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedPeriod === 'archived' && styles.filterButtonActive
          ]}
          onPress={() => setSelectedPeriod('archived')}
        >
          <Text style={[
            styles.filterButtonText,
            selectedPeriod === 'archived' && styles.filterButtonTextActive
          ]}>
            PEI Archivés
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={peiDocuments.filter(doc => 
          selectedPeriod === 'current' ? doc.status === 'active' : doc.status === 'archived'
        )}
        renderItem={renderPEICard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.peiList}
      />

      {selectedPeriod === 'current' && (
        <TouchableOpacity style={styles.createButton}>
          <Icon name="add" size={24} color="#FFFFFF" />
          <Text style={styles.createButtonText}>
            Créer un Nouveau PEI
          </Text>
        </TouchableOpacity>
      )}
    </View>
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
  filterContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  filterButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  filterButtonActive: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  peiList: {
    padding: 15,
  },
  peiCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contextText: {
    fontSize: 14,
    color: '#757575',
  },
  objectivesContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  objectiveText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  updateText: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  actionButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PEIScreen;
