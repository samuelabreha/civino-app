import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const ProgressChart = ({ data, period = 'week' }) => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const getAverageScore = () => {
    const scores = data.datasets[0].data;
    const sum = scores.reduce((a, b) => a + b, 0);
    return (sum / scores.length).toFixed(1);
  };

  const getTrend = () => {
    const scores = data.datasets[0].data;
    const firstHalf = scores.slice(0, Math.floor(scores.length / 2));
    const secondHalf = scores.slice(Math.floor(scores.length / 2));
    
    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
    
    return {
      direction: secondAvg > firstAvg ? 'up' : 'down',
      percentage: Math.abs(((secondAvg - firstAvg) / firstAvg) * 100).toFixed(1),
    };
  };

  const trend = getTrend();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progression</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Moyenne</Text>
            <Text style={styles.statValue}>{getAverageScore()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Tendance</Text>
            <View style={styles.trendContainer}>
              <Icon
                name={trend.direction === 'up' ? 'trending-up' : 'trending-down'}
                size={20}
                color={trend.direction === 'up' ? '#4CAF50' : '#f44336'}
              />
              <Text
                style={[
                  styles.trendValue,
                  {
                    color: trend.direction === 'up' ? '#4CAF50' : '#f44336',
                  },
                ]}
              >
                {trend.percentage}%
              </Text>
            </View>
          </View>
        </View>
      </View>

      <LineChart
        data={data}
        width={width - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withDots={true}
        withShadow={false}
        withVerticalLines={true}
        withHorizontalLines={true}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        fromZero={true}
        segments={4}
      />

      <View style={styles.legend}>
        {data.datasets.map((dataset, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: dataset.color }]}
            />
            <Text style={styles.legendText}>{dataset.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProgressChart;
