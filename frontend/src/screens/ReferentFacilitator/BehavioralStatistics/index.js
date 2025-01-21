import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { BehaviorChart } from '../../../components/statistics/BehaviorChart';
import { api } from '../../../services/api';

const BehavioralStatistics = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'daily', title: 'Daily' },
    { key: 'weekly', title: 'Weekly' },
    { key: 'monthly', title: 'Monthly' },
  ]);
  const [statistics, setStatistics] = useState({
    daily: null,
    weekly: null,
    monthly: null,
  });

  useEffect(() => {
    fetchStatistics(routes[index].key);
  }, [index]);

  const fetchStatistics = async (period) => {
    try {
      const response = await api.get('/statistics/behavior', {
        params: { period }
      });
      setStatistics(prev => ({
        ...prev,
        [period]: response.data
      }));
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const renderScene = ({ route }) => (
    <ScrollView style={styles.scene}>
      <View style={styles.chartContainer}>
        {statistics[route.key] && (
          <BehaviorChart
            data={statistics[route.key]}
            period={route.key}
          />
        )}
      </View>
    </ScrollView>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chartContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBar: {
    backgroundColor: '#2196F3',
  },
  indicator: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default BehavioralStatistics;
