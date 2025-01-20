import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { ImageEvaluation } from '../../../../components/questionnaire/ImageEvaluation';

const Questionnaires = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'image', title: 'Image-Based Evaluation' },
    { key: 'school', title: 'School' },
    { key: 'community', title: 'Community Center' },
    { key: 'home', title: 'Home' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'image':
        return (
          <ImageEvaluation
            locations={[
              { key: 'school', title: 'School' },
              { key: 'community', title: 'Community Center' },
              { key: 'home', title: 'Home' },
            ]}
          />
        );
      case 'school':
      case 'community':
      case 'home':
        return (
          <View style={styles.questionnaireContainer}>
            {/* Questionnaire spécifique pour chaque lieu */}
          </View>
        );
      default:
        return null;
    }
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
  questionnaireContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
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

export default Questionnaires;
