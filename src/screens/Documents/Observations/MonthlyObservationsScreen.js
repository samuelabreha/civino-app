import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';

const MonthlyObservationsScreen = ({ navigation }) => {
  const [selectedContext, setSelectedContext] = useState('all');

  const contexts = [
    { id: 'all', label: 'Tous les contextes', icon: 'dashboard' },
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const monthlyData = {
    month: 'Septembre 2024',
    progressData: {
      labels: ['S1', 'S2', 'S3', 'S4'],
      datasets: [
        {
          data: [3.5, 4.0, 4.2, 4.5],
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          strokeWidth: 2
        }
      ]
    },
    observations: [
      {
        week: 'Semaine 1',
        summary: 'Adaptation progressive aux nouvelles routines',
        details: [
          {
            context: 'École',
            notes: 'Bonne participation aux activités de classe',
            progress: 3.5
          },
          {
            context: 'Maison de quartier',
            notes: 'S'intègre bien dans le groupe',
            progress: 3.8
          },
          {
            context: 'Maison',
            notes: 'Suit les routines établies',
            progress: 3.2
          }
        ]
      },
      {
        week: 'Semaine 2',
        summary: 'Amélioration notable dans la communication',
        details: [
          {
            context: 'École',
            notes: 'Meilleure interaction avec les enseignants',
            progress: 4.0
          },
          {
            context: 'Maison de quartier',
            notes: 'Participe activement aux activités',
            progress: 4.2
          },
          {
            context: 'Maison',
            notes: 'Communication plus ouverte',
            progress: 3.8
          }
        ]
      },
      {
        week: 'Semaine 3',
        summary: 'Progrès dans la gestion des émotions',
        details: [
          {
            context: 'École',
            notes: 'Meilleure gestion des frustrations',
            progress: 4.2
          },
          {
            context: 'Maison de quartier',
            notes: 'Bonnes interactions sociales',
            progress: 4.3
          },
          {
            context: 'Maison',
            notes: 'Plus calme et réfléchi',
            progress: 4.1
          }
        ]
      },
      {
        week: 'Semaine 4',
        summary: 'Consolidation des acquis',
        details: [
          {
            context: 'École',
            notes: 'Excellente participation en classe',
            progress: 4.5
          },
          {
            context: 'Maison de quartier',
            notes: 'Leader positif dans le groupe',
            progress: 4.6
          },
          {
            context: 'Maison',
            notes: 'Autonomie croissante',
            progress: 4.4
          }
        ]
      }
    ]
  };

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

  const renderProgressChart = () => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Progression Mensuelle</Text>
      <LineChart
        data={monthlyData.progressData}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={styles.chart}
        bezier
      />
    </View>
  );

  const renderWeeklyObservation = ({ item }) => (
    <View style={styles.weeklyCard}>
      <View style={styles.weeklyHeader}>
        <Text style={styles.weeklyTitle}>{item.week}</Text>
        <Text style={styles.weeklySummary}>{item.summary}</Text>
      </View>
      
      {item.details
        .filter(detail => selectedContext === 'all' || detail.context.toLowerCase().includes(selectedContext))
        .map((detail, index) => (
          <View key={index} style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Icon name="label" size={20} color="#2196F3" />
              <Text style={styles.detailContext}>{detail.context}</Text>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>{detail.progress}/5</Text>
              </View>
            </View>
            <Text style={styles.detailNotes}>{detail.notes}</Text>
          </View>
        ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="assessment" size={40} color="#2196F3" />
        <Text style={styles.title}>Observations Mensuelles</Text>
      </View>

      <View style={styles.monthHeader}>
        <Icon name="event" size={24} color="#2196F3" />
        <Text style={styles.monthTitle}>{monthlyData.month}</Text>
      </View>

      {renderContextSelector()}
      {renderProgressChart()}

      <FlatList
        data={monthlyData.observations}
        renderItem={renderWeeklyObservation}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.observationsList}
      />

      <TouchableOpacity style={styles.exportButton}>
        <Icon name="file-download" size={24} color="#FFFFFF" />
        <Text style={styles.exportButtonText}>
          Télécharger le Rapport Mensuel
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
  chartContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  observationsList: {
    padding: 15,
  },
  weeklyCard: {
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
  weeklyHeader: {
    marginBottom: 15,
  },
  weeklyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  weeklySummary: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  detailItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailContext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  progressBadge: {
    backgroundColor: '#2196F3',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailNotes: {
    fontSize: 14,
    color: '#666',
    marginLeft: 28,
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

export default MonthlyObservationsScreen;
