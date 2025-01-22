import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';

const TeacherStatisticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

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

  const periods = [
    { id: 'daily', title: 'Quotidien', icon: 'today' },
    { id: 'weekly', title: 'Hebdomadaire', icon: 'view-week' },
    { id: 'monthly', title: 'Mensuel', icon: 'calendar-today' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="bar-chart" size={40} color="#2196F3" />
        <Text style={styles.title}>Statistiques Comportementales</Text>
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
              {period.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Progression du Comportement</Text>
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

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Icon name="trending-up" size={32} color="#4CAF50" />
          <Text style={styles.statValue}>+15%</Text>
          <Text style={styles.statLabel}>Progression</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="star" size={32} color="#FFC107" />
          <Text style={styles.statValue}>4.2/5</Text>
          <Text style={styles.statLabel}>Moyenne</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="check-circle" size={32} color="#2196F3" />
          <Text style={styles.statValue}>85%</Text>
          <Text style={styles.statLabel}>Objectifs</Text>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  statLabel: {
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

export default TeacherStatisticsScreen;
