import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BehavioralStatsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const progressData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
    datasets: [
      {
        data: [3, 4, 3, 5, 4],
      },
    ],
  };

  const behaviorData = {
    labels: ['Calme', 'Agité', 'Participatif', 'Distrait', 'Concentré'],
    datasets: [
      {
        data: [20, 15, 25, 10, 30],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.periodSelector}>
        <TouchableOpacity
          style={[styles.periodButton, selectedPeriod === 'daily' && styles.selectedPeriod]}
          onPress={() => setSelectedPeriod('daily')}
        >
          <Text style={[styles.periodText, selectedPeriod === 'daily' && styles.selectedPeriodText]}>
            Quotidien
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.periodButton, selectedPeriod === 'weekly' && styles.selectedPeriod]}
          onPress={() => setSelectedPeriod('weekly')}
        >
          <Text style={[styles.periodText, selectedPeriod === 'weekly' && styles.selectedPeriodText]}>
            Hebdomadaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.periodButton, selectedPeriod === 'monthly' && styles.selectedPeriod]}
          onPress={() => setSelectedPeriod('monthly')}
        >
          <Text style={[styles.periodText, selectedPeriod === 'monthly' && styles.selectedPeriodText]}>
            Mensuel
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Progression du Comportement</Text>
        <LineChart
          data={progressData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Distribution des Comportements</Text>
        <BarChart
          data={behaviorData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
          verticalLabelRotation={30}
        />
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Statistiques Détaillées</Text>
        <View style={styles.statItem}>
          <Icon name="trending-up" size={24} color="#4CAF50" />
          <View style={styles.statInfo}>
            <Text style={styles.statLabel}>Progression Globale</Text>
            <Text style={styles.statValue}>+15% ce mois</Text>
          </View>
        </View>
        <View style={styles.statItem}>
          <Icon name="star" size={24} color="#FFC107" />
          <View style={styles.statInfo}>
            <Text style={styles.statLabel}>Comportement le Plus Fréquent</Text>
            <Text style={styles.statValue}>Concentré (30%)</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  periodButton: {
    padding: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedPeriod: {
    backgroundColor: '#E3F2FD',
  },
  periodText: {
    color: '#757575',
    fontSize: 14,
  },
  selectedPeriodText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  chartContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
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
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  statInfo: {
    marginLeft: 15,
  },
  statLabel: {
    fontSize: 14,
    color: '#757575',
  },
  statValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default BehavioralStatsScreen;
