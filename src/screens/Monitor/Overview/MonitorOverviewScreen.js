import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const MonitorOverviewScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [selectedContext, setSelectedContext] = useState('all');

  const periods = [
    { id: 'daily', label: 'Quotidien' },
    { id: 'weekly', label: 'Hebdomadaire' },
    { id: 'monthly', label: 'Mensuel' },
  ];

  const contexts = [
    { id: 'all', label: 'Tous', icon: 'dashboard' },
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const behaviorData = {
    daily: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
      datasets: [{
        data: [4, 3, 5, 4, 4],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
      }]
    },
    weekly: {
      labels: ['S1', 'S2', 'S3', 'S4'],
      datasets: [{
        data: [3.8, 4.2, 4.0, 4.5],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
      }]
    },
    monthly: {
      labels: ['Sep', 'Oct', 'Nov', 'Déc'],
      datasets: [{
        data: [3.5, 4.0, 4.3, 4.6],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
      }]
    }
  };

  const contextData = {
    labels: ['École', 'Maison de quartier', 'Maison'],
    datasets: [{
      data: [85, 90, 75]
    }]
  };

  const progressData = [
    {
      name: 'Comportement',
      population: 85,
      color: '#2196F3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    },
    {
      name: 'Social',
      population: 90,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    },
    {
      name: 'Académique',
      population: 75,
      color: '#FFC107',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="dashboard" size={40} color="#2196F3" />
        <Text style={styles.title}>Vue d'Ensemble</Text>
      </View>

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
            <Text style={[
              styles.contextButtonText,
              selectedContext === context.id && styles.contextButtonTextActive
            ]}>
              {context.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.periodSelector}>
        {periods.map(period => (
          <TouchableOpacity
            key={period.id}
            style={[
              styles.periodButton,
              selectedPeriod === period.id && styles.periodButtonActive
            ]}
            onPress={() => setSelectedPeriod(period.id)}
          >
            <Text style={[
              styles.periodButtonText,
              selectedPeriod === period.id && styles.periodButtonTextActive
            ]}>
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summaryCards}>
        <View style={styles.summaryCard}>
          <Icon name="trending-up" size={32} color="#4CAF50" />
          <Text style={styles.summaryValue}>4.2/5</Text>
          <Text style={styles.summaryLabel}>Moyenne Générale</Text>
        </View>
        <View style={styles.summaryCard}>
          <Icon name="check-circle" size={32} color="#2196F3" />
          <Text style={styles.summaryValue}>85%</Text>
          <Text style={styles.summaryLabel}>Objectifs Atteints</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Évolution du Comportement</Text>
        <LineChart
          data={behaviorData[selectedPeriod]}
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

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Performance par Contexte</Text>
        <BarChart
          data={contextData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Répartition des Progrès</Text>
        <PieChart
          data={progressData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.chart}
        />
      </View>

      <View style={styles.observationsContainer}>
        <Text style={styles.sectionTitle}>Dernières Observations</Text>
        <View style={styles.observationCard}>
          <Icon name="school" size={24} color="#2196F3" />
          <View style={styles.observationContent}>
            <Text style={styles.observationTitle}>Activités de Groupe</Text>
            <Text style={styles.observationText}>
              Excellente participation aux activités collectives de la maison de quartier.
            </Text>
            <Text style={styles.observationDate}>Aujourd'hui, 14:30</Text>
          </View>
        </View>
        <View style={styles.observationCard}>
          <Icon name="group" size={24} color="#2196F3" />
          <View style={styles.observationContent}>
            <Text style={styles.observationTitle}>Communication</Text>
            <Text style={styles.observationText}>
              Amélioration notable dans la communication avec les autres enfants.
            </Text>
            <Text style={styles.observationDate}>Hier, 16:45</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="file-download" size={24} color="#2196F3" />
        <Text style={styles.downloadButtonText}>
          Télécharger le Rapport Complet
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
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#2196F3',
  },
  periodButtonText: {
    color: '#2196F3',
    fontSize: 14,
  },
  periodButtonTextActive: {
    color: '#FFFFFF',
  },
  summaryCards: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
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
  observationsContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  observationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  observationContent: {
    marginLeft: 15,
    flex: 1,
  },
  observationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  observationText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  observationDate: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
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

export default MonitorOverviewScreen;
