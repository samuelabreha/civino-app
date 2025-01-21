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

const WeeklyObservationsScreen = ({ navigation }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const weeklyObservations = [
    {
      id: '1',
      date: 'mercredi 4 septembre 2024',
      observations: [
        {
          context: 'École',
          notes: 'Amélioration significative dans la participation en classe',
          mood: 'positive'
        },
        {
          context: 'Maison de quartier',
          notes: 'Bonne interaction avec les autres enfants',
          mood: 'positive'
        },
        {
          context: 'Maison',
          notes: 'Suit bien les routines établies',
          mood: 'positive'
        }
      ]
    },
    {
      id: '2',
      date: 'mercredi 11 septembre 2024',
      observations: [
        {
          context: 'École',
          notes: 'Concentration maintenue pendant les activités',
          mood: 'positive'
        },
        {
          context: 'Maison de quartier',
          notes: 'Participation active aux activités de groupe',
          mood: 'positive'
        },
        {
          context: 'Maison',
          notes: 'Respecte bien les consignes',
          mood: 'positive'
        }
      ]
    },
    {
      id: '3',
      date: 'mercredi 18 septembre 2024',
      observations: [
        {
          context: 'École',
          notes: 'Progrès dans la gestion des émotions',
          mood: 'positive'
        },
        {
          context: 'Maison de quartier',
          notes: 'Belle initiative dans les activités',
          mood: 'positive'
        },
        {
          context: 'Maison',
          notes: 'Amélioration dans l'organisation',
          mood: 'positive'
        }
      ]
    },
    {
      id: '4',
      date: 'mercredi 25 septembre 2024',
      observations: [
        {
          context: 'École',
          notes: 'Bonne collaboration avec les camarades',
          mood: 'positive'
        },
        {
          context: 'Maison de quartier',
          notes: 'Participation constructive aux activités',
          mood: 'positive'
        },
        {
          context: 'Maison',
          notes: 'Respect des règles établies',
          mood: 'positive'
        }
      ]
    }
  ];

  const renderObservationItem = ({ item: observation }) => (
    <View style={styles.observationItem}>
      <Icon 
        name={observation.mood === 'positive' ? 'sentiment-satisfied' : 'sentiment-dissatisfied'} 
        size={24} 
        color={observation.mood === 'positive' ? '#4CAF50' : '#F44336'} 
      />
      <View style={styles.observationContent}>
        <Text style={styles.contextText}>{observation.context}</Text>
        <Text style={styles.notesText}>{observation.notes}</Text>
      </View>
    </View>
  );

  const renderWeekItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.weekCard,
        selectedWeek?.id === item.id && styles.selectedWeekCard
      ]}
      onPress={() => setSelectedWeek(item)}
    >
      <View style={styles.weekHeader}>
        <Icon name="event" size={24} color="#2196F3" />
        <Text style={styles.weekDate}>{item.date}</Text>
      </View>
      {selectedWeek?.id === item.id && (
        <View style={styles.observationsList}>
          <FlatList
            data={item.observations}
            renderItem={renderObservationItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      )}
      <View style={styles.weekActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => {
            /* Logique pour télécharger le PDF */
          }}
        >
          <Icon name="file-download" size={20} color="#2196F3" />
          <Text style={styles.actionButtonText}>Télécharger PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => {
            navigation.navigate('ObservationDetails', { weekId: item.id });
          }}
        >
          <Icon name="visibility" size={20} color="#2196F3" />
          <Text style={styles.actionButtonText}>Voir Détails</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="assessment" size={40} color="#2196F3" />
        <Text style={styles.title}>Observations Hebdomadaires</Text>
      </View>

      <FlatList
        data={weeklyObservations}
        renderItem={renderWeekItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.weeksList}
      />

      <TouchableOpacity 
        style={styles.exportButton}
        onPress={() => {
          /* Logique pour exporter toutes les observations */
        }}
      >
        <Icon name="cloud-download" size={24} color="#FFFFFF" />
        <Text style={styles.exportButtonText}>
          Exporter Toutes les Observations
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
  weeksList: {
    padding: 15,
  },
  weekCard: {
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
  selectedWeekCard: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  weekHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weekDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  observationsList: {
    marginTop: 10,
    marginBottom: 10,
  },
  observationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
  },
  observationContent: {
    marginLeft: 10,
    flex: 1,
  },
  contextText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  notesText: {
    fontSize: 14,
    color: '#666',
  },
  weekActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  exportButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default WeeklyObservationsScreen;
