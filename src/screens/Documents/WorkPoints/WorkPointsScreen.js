import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WorkPointsScreen = ({ navigation }) => {
  const [selectedMonth] = useState('Septembre 2024');
  const [selectedContext, setSelectedContext] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contexts = [
    { id: 'all', label: 'Tous les contextes', icon: 'dashboard' },
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const workPoints = [
    {
      id: '1',
      context: 'École',
      category: 'Comportement',
      point: 'Gestion de la frustration',
      priority: 'high',
      progress: 75,
      strategies: [
        'Utiliser le tableau des émotions',
        'Prendre des pauses calmes',
        'Appliquer la technique de respiration'
      ],
      status: 'in_progress'
    },
    {
      id: '2',
      context: 'École',
      category: 'Apprentissage',
      point: 'Concentration en classe',
      priority: 'medium',
      progress: 60,
      strategies: [
        'Timer visuel pour les tâches',
        'Pauses régulières',
        'Environnement calme'
      ],
      status: 'in_progress'
    },
    {
      id: '3',
      context: 'Maison de quartier',
      category: 'Social',
      point: 'Participation aux activités de groupe',
      priority: 'medium',
      progress: 85,
      strategies: [
        'Encourager les interactions',
        'Proposer des rôles de leader',
        'Valoriser les initiatives'
      ],
      status: 'in_progress'
    },
    {
      id: '4',
      context: 'Maison',
      category: 'Autonomie',
      point: 'Organisation personnelle',
      priority: 'high',
      progress: 65,
      strategies: [
        'Checklist quotidienne',
        'Routine du soir',
        'Responsabilités définies'
      ],
      status: 'in_progress'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#F44336';
      case 'medium':
        return '#FFC107';
      case 'low':
        return '#4CAF50';
      default:
        return '#757575';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'check-circle';
      case 'in_progress':
        return 'refresh';
      case 'not_started':
        return 'schedule';
      default:
        return 'help';
    }
  };

  const filteredWorkPoints = workPoints.filter(point => {
    const matchesContext = selectedContext === 'all' || point.context.toLowerCase().includes(selectedContext);
    const matchesSearch = point.point.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         point.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContext && matchesSearch;
  });

  const renderContextSelector = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.contextSelector}
    >
      {contexts.map(context => (
        <TouchableOpacity
          key={context.id}
          style={[
            styles.contextButton,
            selectedContext === context.id && styles.contextButtonActive
          ]}
          onPress={() => setSelectedContext(context.id)}
        >
          <Icon
            name={context.icon}
            size={24}
            color={selectedContext === context.id ? '#FFFFFF' : '#2196F3'}
          />
          <Text
            style={[
              styles.contextButtonText,
              selectedContext === context.id && styles.contextButtonTextActive
            ]}
          >
            {context.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderWorkPoint = ({ item }) => (
    <View style={styles.workPointCard}>
      <View style={styles.cardHeader}>
        <View style={styles.contextBadge}>
          <Icon name="location-on" size={16} color="#2196F3" />
          <Text style={styles.contextText}>{item.context}</Text>
        </View>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]}>
          <Icon name="flag" size={16} color="#FFFFFF" />
          <Text style={styles.priorityText}>{item.priority.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.pointText}>{item.point}</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{item.progress}%</Text>
        </View>

        <View style={styles.strategiesContainer}>
          <Text style={styles.strategiesTitle}>Stratégies :</Text>
          {item.strategies.map((strategy, index) => (
            <View key={index} style={styles.strategyItem}>
              <Icon name="check" size={16} color="#4CAF50" />
              <Text style={styles.strategyText}>{strategy}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Icon name={getStatusIcon(item.status)} size={24} color="#2196F3" />
        <TouchableOpacity style={styles.updateButton}>
          <Icon name="edit" size={20} color="#FFFFFF" />
          <Text style={styles.updateButtonText}>Mettre à jour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="assignment" size={40} color="#2196F3" />
        <Text style={styles.title}>Points à Travailler</Text>
      </View>

      <View style={styles.monthHeader}>
        <Icon name="event" size={24} color="#2196F3" />
        <Text style={styles.monthTitle}>{selectedMonth}</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#757575" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un point à travailler..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {renderContextSelector()}

      <FlatList
        data={filteredWorkPoints}
        renderItem={renderWorkPoint}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.workPointsList}
      />

      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>
          Ajouter un Point à Travailler
        </Text>
      </TouchableOpacity>
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
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    margin: 15,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  contextSelector: {
    padding: 15,
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginRight: 10,
  },
  contextButtonActive: {
    backgroundColor: '#2196F3',
  },
  contextButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  contextButtonTextActive: {
    color: '#FFFFFF',
  },
  workPointsList: {
    padding: 15,
  },
  workPointCard: {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  contextBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 5,
    borderRadius: 15,
  },
  contextText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 12,
  },
  priorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
  },
  priorityText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardContent: {
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  pointText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  strategiesContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
  },
  strategiesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  strategyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  strategyText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 20,
  },
  updateButtonText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default WorkPointsScreen;
