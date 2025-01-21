import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LineChart, BarChart } from 'react-native-chart-kit';

const MonitorStatisticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [selectedContext, setSelectedContext] = useState('all');

  const contexts = [
    { id: 'all', label: 'Tous', icon: 'dashboard' },
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const periods = [
    { id: 'daily', label: 'Quotidien', icon: 'today' },
    { id: 'weekly', label: 'Hebdomadaire', icon: 'view-week' },
    { id: 'monthly', label: 'Mensuel', icon: 'calendar-today' },
  ];

  const chartData = {
    daily: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
      datasets: [
        {
          data: [3, 4, 3, 5, 4],
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        },
      ],
    },
    weekly: {
      labels: ['S1', 'S2', 'S3', 'S4'],
      datasets: [
        {
          data: [3.5, 4.2, 3.8, 4.5],
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        },
      ],
    },
    monthly: {
      labels: ['Sep', 'Oct', 'Nov', 'Déc'],
      datasets: [
        {
          data: [3.8, 4.0, 4.3, 4.6],
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        },
      ],
    },
  };

  const progressionData = {
    labels: ['École', 'Maison de quartier', 'Maison'],
    datasets: [
      {
        data: [75, 85, 65],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="bar-chart" size={40} color="#2196F3" />
        <Text style={styles.title}>Statistiques Comportementales</Text>
      </View>

      <View style={styles.contextSelector}>
        <Text style={styles.sectionTitle}>Contexte</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {contexts.map((context) => (
            <TouchableOpacity
              key={context.id}
              style={[
                styles.contextButton,
                selectedContext === context.id && styles.contextButtonActive,
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
                  selectedContext === context.id && styles.contextButtonTextActive,
                ]}
              >
                {context.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.periodSelector}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.id}
            style={[
              styles.periodButton,
              selectedPeriod === period.id && styles.periodButtonActive,
            ]}
            onPress={() => setSelectedPeriod(period.id)}
          >
            <Icon
              name={period.icon}
              size={24}
              color={selectedPeriod === period.id ? '#FFFFFF' : '#2196F3'}
            />
            <Text
              style={[
                styles.periodButtonText,
                selectedPeriod === period.id && styles.periodButtonTextActive,
              ]}
            >
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Évolution du Comportement</Text>
        <LineChart
          data={chartData[selectedPeriod]}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
          bezier
        />
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.chartTitle}>Progression par Contexte</Text>
        <BarChart
          data={progressionData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Icon name="trending-up" size={32} color="#4CAF50" />
          <Text style={styles.statValue}>+15%</Text>
          <Text style={styles.statLabel}>Progression Globale</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="star" size={32} color="#FFC107" />
          <Text style={styles.statValue}>4.2/5</Text>
          <Text style={styles.statLabel}>Moyenne Générale</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="check-circle" size={32} color="#2196F3" />
          <Text style={styles.statValue}>85%</Text>
          <Text style={styles.statLabel}>Objectifs Atteints</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="timeline" size={32} color="#9C27B0" />
          <Text style={styles.statValue}>90%</Text>
          <Text style={styles.statLabel}>Participation</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="file-download" size={24} color="#2196F3" />
        <Text style={styles.downloadButtonText}>
          Télécharger le Rapport Détaillé
        </Text>
      </TouchableOpacity>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  contextSelector: {
    marginVertical: 15,
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginHorizontal: 5,
    marginLeft: 15,
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
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  periodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#2196F3',
  },
  periodButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 12,
  },
  periodButtonTextActive: {
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
  progressContainer: {
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  statCard: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  downloadButtonText: {
    color: '#2196F3',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MonitorStatisticsScreen;
