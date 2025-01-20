import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';
import BehaviorChart from '../../components/statistics/BehaviorChart';

const StatistiquesScreen = ({ navigation }) => {
  const statisticsData = {
    weeklyProgress: {
      title: 'Progression hebdomadaire',
      data: [65, 72, 68, 75, 80, 78, 85],
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    },
    monthlyProgress: {
      title: 'Progression mensuelle',
      data: [70, 75, 78, 82],
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    },
  };

  const renderStatisticsCard = (title, icon, value, trend) => (
    <View style={styles.statisticsCard}>
      <View style={styles.cardHeader}>
        <Image source={icon} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={styles.cardValue}>{value}</Text>
      <View style={[styles.trendIndicator, trend > 0 ? styles.trendPositive : styles.trendNegative]}>
        <Image 
          source={trend > 0 ? icons.general.arrowUp : icons.general.arrowDown} 
          style={styles.trendIcon} 
        />
        <Text style={styles.trendText}>{Math.abs(trend)}%</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.general.statistics} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Statistiques</Text>
      </View>

      <View style={styles.cardsContainer}>
        {renderStatisticsCard('Participation', icons.general.users, '85%', 5)}
        {renderStatisticsCard('Comportement', icons.behavioral.mood, '78%', -2)}
        {renderStatisticsCard('Engagement', icons.general.activity, '92%', 8)}
      </View>

      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Progression comportementale</Text>
        <View style={styles.chartContainer}>
          <BehaviorChart data={statisticsData.weeklyProgress} />
        </View>
      </View>

      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Évolution mensuelle</Text>
        <View style={styles.chartContainer}>
          <BehaviorChart data={statisticsData.monthlyProgress} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.exportButton}
        onPress={() => navigation.navigate('ExportStatistics')}
      >
        <Image source={icons.general.download} style={styles.exportIcon} />
        <Text style={styles.exportButtonText}>Exporter les statistiques</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: '#2196F3',
  },
  headerTitle: {
    ...typography.h6,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  statisticsCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#2196F3',
  },
  cardTitle: {
    ...typography.subtitle2,
  },
  cardValue: {
    ...typography.h4,
    color: '#2196F3',
    marginBottom: 8,
  },
  trendIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  trendPositive: {
    backgroundColor: '#E8F5E9',
  },
  trendNegative: {
    backgroundColor: '#FFEBEE',
  },
  trendIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  trendText: {
    ...typography.caption,
  },
  chartSection: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  sectionTitle: {
    ...typography.subtitle1,
    marginBottom: 16,
  },
  chartContainer: {
    height: 200,
    marginBottom: 16,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  exportIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
    marginRight: 8,
  },
  exportButtonText: {
    ...typography.button,
    color: '#FFF',
  },
});

export default StatistiquesScreen;
