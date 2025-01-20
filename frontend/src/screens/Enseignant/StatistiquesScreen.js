import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const StatistiquesScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const progressData = {
    labels: ['Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév'],
    datasets: [
      {
        data: [65, 70, 75, 72, 80, 85],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  const behaviorData = {
    labels: ['Participation', 'Attention', 'Interaction', 'Discipline', 'Travail'],
    datasets: [
      {
        data: [85, 75, 80, 90, 70]
      }
    ]
  };

  const pieData = [
    {
      name: 'Excellent',
      population: 30,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    },
    {
      name: 'Bon',
      population: 45,
      color: '#2196F3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    },
    {
      name: 'À améliorer',
      population: 25,
      color: '#FF9800',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12
    }
  ];

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Statistiques" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Progression générale de la classe</Text>
          <LineChart
            data={progressData}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comportements par catégorie</Text>
          <BarChart
            data={behaviorData}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
            showValuesOnTopOfBars
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Répartition des niveaux</Text>
          <PieChart
            data={pieData}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            style={styles.chart}
          />
        </View>

        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Résumé</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>25</Text>
              <Text style={styles.summaryLabel}>Élèves suivis</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>85%</Text>
              <Text style={styles.summaryLabel}>Taux de progrès</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>92%</Text>
              <Text style={styles.summaryLabel}>Participation</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>15</Text>
              <Text style={styles.summaryLabel}>Objectifs atteints</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summarySection: {
    marginBottom: 25,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  summaryItem: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default StatistiquesScreen;
