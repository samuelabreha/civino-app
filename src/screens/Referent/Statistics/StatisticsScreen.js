import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart, BarChart } from 'react-native-chart-kit';

const StatisticsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedChart, setSelectedChart] = useState('line');

  const periods = [
    { id: 'week', title: t('statistics.week') },
    { id: 'month', title: t('statistics.month') },
    { id: 'year', title: t('statistics.year') },
  ];

  const chartTypes = [
    { id: 'line', title: t('statistics.lineChart'), icon: 'chart-line' },
    { id: 'bar', title: t('statistics.barChart'), icon: 'chart-bar' },
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

  const data = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const renderChart = () => {
    const screenWidth = Dimensions.get('window').width - 40;

    return selectedChart === 'line' ? (
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    ) : (
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('statistics.title')}</Text>
        <Text style={styles.subtitle}>{t('statistics.description')}</Text>
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

      <View style={styles.chartTypeContainer}>
        {chartTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.chartTypeButton,
              selectedChart === type.id && styles.selectedChartType,
            ]}
            onPress={() => setSelectedChart(type.id)}
          >
            <Icon
              name={type.icon}
              size={24}
              color={selectedChart === type.id ? '#FFFFFF' : '#666'}
            />
            <Text
              style={[
                styles.chartTypeText,
                selectedChart === type.id && styles.selectedChartTypeText,
              ]}
            >
              {type.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chartContainer}>
        {renderChart()}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.exportButton}
          onPress={() => {/* Handle export */}}
        >
          <Icon name="file-export" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>
            {t('statistics.export')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigation.navigate('StatisticsDetail')}
        >
          <Icon name="chart-box" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>
            {t('statistics.viewDetails')}
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
    justifyContent: 'space-between',
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
  chartTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  chartTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    margin: 5,
    borderRadius: 10,
  },
  selectedChartType: {
    backgroundColor: '#2196F3',
  },
  chartTypeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedChartTypeText: {
    color: '#FFFFFF',
  },
  chartContainer: {
    padding: 20,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  actionsContainer: {
    padding: 20,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default StatisticsScreen;
