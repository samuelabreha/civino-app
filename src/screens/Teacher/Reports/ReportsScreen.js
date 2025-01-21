import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart, BarChart } from 'react-native-chart-kit';

const ReportsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedType, setSelectedType] = useState('overview');

  const periods = [
    { id: 'week', title: t('reports.week') },
    { id: 'month', title: t('reports.month') },
    { id: 'semester', title: t('reports.semester') },
    { id: 'year', title: t('reports.year') },
  ];

  const reportTypes = [
    { id: 'overview', title: t('reports.overview'), icon: 'view-dashboard' },
    { id: 'academic', title: t('reports.academic'), icon: 'school' },
    { id: 'behavior', title: t('reports.behavior'), icon: 'account-star' },
    { id: 'attendance', title: t('reports.attendance'), icon: 'calendar-check' },
  ];

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const performanceData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        data: [85, 88, 82, 90, 87, 85, 92],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const statistics = [
    {
      id: '1',
      title: t('reports.averagePerformance'),
      value: '87%',
      trend: '+2.5%',
      icon: 'trending-up',
      color: '#4CAF50',
    },
    {
      id: '2',
      title: t('reports.attendance'),
      value: '95%',
      trend: '+1.2%',
      icon: 'trending-up',
      color: '#2196F3',
    },
    {
      id: '3',
      title: t('reports.behaviorScore'),
      value: '92%',
      trend: '+3.8%',
      icon: 'trending-up',
      color: '#FF9800',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('reports.title')}</Text>
        <Text style={styles.subtitle}>{t('reports.description')}</Text>
      </View>

      <View style={styles.periodContainer}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.id}
            style={[
              styles.periodButton,
              selectedPeriod === period.id && styles.selectedPeriod,
            ]}
            onPress={() => setSelectedPeriod(period.id)}
          >
            <Text
              style={[
                styles.periodButtonText,
                selectedPeriod === period.id && styles.selectedPeriodText,
              ]}
            >
              {period.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statisticsContainer}>
        {statistics.map((stat) => (
          <View key={stat.id} style={styles.statCard}>
            <View style={styles.statHeader}>
              <Text style={styles.statTitle}>{stat.title}</Text>
              <Icon name={stat.icon} size={24} color={stat.color} />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={[styles.statTrend, { color: stat.color }]}>
              {stat.trend}
            </Text>
          </View>
        ))}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.typesContainer}
      >
        {reportTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeButton,
              selectedType === type.id && styles.selectedType,
            ]}
            onPress={() => setSelectedType(type.id)}
          >
            <Icon
              name={type.icon}
              size={24}
              color={selectedType === type.id ? '#FFFFFF' : '#666'}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === type.id && styles.selectedTypeText,
              ]}
            >
              {type.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>{t('reports.performanceChart')}</Text>
        <LineChart
          data={performanceData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('GenerateReport')}
        >
          <Icon name="file-pdf-box" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>
            {t('reports.generateReport')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.shareButton]}
          onPress={() => navigation.navigate('ShareReport')}
        >
          <Icon name="share-variant" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>{t('reports.shareReport')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  periodContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  periodButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 5,
    borderRadius: 10,
  },
  selectedPeriod: {
    backgroundColor: '#2196F3',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  selectedPeriodText: {
    color: '#FFFFFF',
  },
  statisticsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    margin: '1%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statTrend: {
    fontSize: 14,
    fontWeight: '600',
  },
  typesContainer: {
    padding: 20,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedType: {
    backgroundColor: '#2196F3',
  },
  typeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedTypeText: {
    color: '#FFFFFF',
  },
  chartContainer: {
    padding: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  actionsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  shareButton: {
    backgroundColor: '#2196F3',
    marginRight: 0,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default ReportsScreen;
