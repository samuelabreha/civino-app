import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const StatistiquesScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const progressData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        data: [8, 7, 9, 8, 9, 10, 9],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  const activitiesData = {
    labels: ['Sport', 'Art', 'Lecture', 'Jeux', 'Social'],
    datasets: [
      {
        data: [12, 8, 15, 10, 13]
      }
    ]
  };

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
      <Header title="Mes progrès" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mon humeur de la semaine</Text>
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
          <Text style={styles.sectionTitle}>Mes activités préférées</Text>
          <BarChart
            data={activitiesData}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
            showValuesOnTopOfBars
          />
        </View>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Mes réussites</Text>
          <View style={styles.achievementsGrid}>
            <View style={styles.achievementCard}>
              <Text style={styles.achievementValue}>15</Text>
              <Text style={styles.achievementLabel}>Jours de présence</Text>
            </View>
            <View style={styles.achievementCard}>
              <Text style={styles.achievementValue}>8</Text>
              <Text style={styles.achievementLabel}>Activités terminées</Text>
            </View>
            <View style={styles.achievementCard}>
              <Text style={styles.achievementValue}>5</Text>
              <Text style={styles.achievementLabel}>Nouveaux amis</Text>
            </View>
            <View style={styles.achievementCard}>
              <Text style={styles.achievementValue}>12</Text>
              <Text style={styles.achievementLabel}>Étoiles gagnées</Text>
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
  achievementsSection: {
    marginBottom: 25,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  achievementCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  achievementValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  achievementLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default StatistiquesScreen;
