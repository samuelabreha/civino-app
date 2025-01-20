import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { BehaviorChart } from '../../../components/statistics/BehaviorChart';
import { OverviewSummary } from '../../../components/statistics/OverviewSummary';
import { api } from '../../../services/api';

const Overview = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'daily', title: 'Daily' },
    { key: 'weekly', title: 'Weekly' },
    { key: 'monthly', title: 'Monthly' },
    { key: 'graphs', title: 'Average Graphs' },
  ]);
  const [overviewData, setOverviewData] = useState({
    daily: null,
    weekly: null,
    monthly: null,
    graphs: null,
  });

  useEffect(() => {
    fetchOverviewData(routes[index].key);
  }, [index]);

  const fetchOverviewData = async (period) => {
    try {
      const response = await api.get('/overview', {
        params: { period }
      });
      setOverviewData(prev => ({
        ...prev,
        [period]: response.data
      }));
    } catch (error) {
      console.error('Error fetching overview data:', error);
    }
  };

  const renderScene = ({ route }) => {
    const data = overviewData[route.key];

    return (
      <ScrollView style={styles.scene}>
        <View style={styles.contentContainer}>
          {route.key === 'graphs' ? (
            data && (
              <BehaviorChart
                data={data}
                period="average"
              />
            )
          ) : (
            data && (
              <OverviewSummary
                data={data}
                period={route.key}
              />
            )
          )}
        </View>
      </ScrollView>
    );
  };

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
  contentContainer: {
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

export default Overview;
