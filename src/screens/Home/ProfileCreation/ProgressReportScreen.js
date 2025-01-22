import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const ProgressReportScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const periods = [
    { id: 'daily', title: t('progressReport.daily') },
    { id: 'weekly', title: t('progressReport.weekly') },
    { id: 'monthly', title: t('progressReport.monthly') },
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

  const getChartData = (period) => {
    switch (period) {
      case 'daily':
        return {
          labels: ['Matin', 'Midi', 'Après-midi', 'Soir'],
          datasets: [
            {
              data: [85, 88, 82, 90],
              color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        };
      case 'weekly':
        return {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
            {
              data: [85, 88, 82, 90, 87, 85, 92],
              color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        };
      case 'monthly':
        return {
          labels: ['S1', 'S2', 'S3', 'S4'],
          datasets: [
            {
              data: [86, 88, 90, 92],
              color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        };
      default:
        return null;
    }
  };

  const statistics = [
    {
      id: 'school',
      title: t('progressReport.schoolProgress'),
      value: '87%',
      trend: '+2.5%',
      icon: 'school',
      color: '#4CAF50',
    },
    {
      id: 'center',
      title: t('progressReport.centerProgress'),
      value: '92%',
      trend: '+3.8%',
      icon: 'home-city',
      color: '#2196F3',
    },
    {
      id: 'home',
      title: t('progressReport.homeProgress'),
      value: '90%',
      trend: '+1.2%',
      icon: 'home',
      color: '#FF9800',
    },
  ];

  const handleDownloadPDF = () => {
    // Implement PDF download functionality
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('progressReport.title')}</Text>
        <Text style={styles.subtitle}>{t('progressReport.description')}</Text>
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
              <Icon name={stat.icon} size={24} color={stat.color} />
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={[styles.statTrend, { color: stat.color }]}>
              {stat.trend}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>
          {t('progressReport.progressChart')}
        </Text>
        <LineChart
          data={getChartData(selectedPeriod)}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDownloadPDF}>
          <Icon name="file-pdf-box" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>
            {t('progressReport.downloadPDF')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.finishButton]}
          onPress={() => navigation.navigate('ProfileSelection')}
        >
          <Icon name="check" size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>
            {t('progressReport.finishProfile')}
          </Text>
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
    padding: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
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
  finishButton: {
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

export default ProgressReportScreen;
