import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { BehaviorContract } from '../../../components/contracts/BehaviorContract';
import { api } from '../../../services/api';

const BehaviorContracts = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'school', title: 'School' },
    { key: 'home', title: 'Home' },
    { key: 'community', title: 'Community Center' },
  ]);
  const [contracts, setContracts] = useState({
    school: null,
    home: null,
    community: null,
  });

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const responses = await Promise.all([
        api.get('/contracts/school'),
        api.get('/contracts/home'),
        api.get('/contracts/community'),
      ]);

      setContracts({
        school: responses[0].data,
        home: responses[1].data,
        community: responses[2].data,
      });
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };

  const renderScene = ({ route }) => {
    const contract = contracts[route.key];
    return (
      <ScrollView style={styles.scene}>
        {contract && (
          <BehaviorContract
            contract={contract}
            onUpdate={fetchContracts}
          />
        )}
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

export default BehaviorContracts;
