import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { ImageEvaluation as ImageEvaluationComponent } from '../../../components/questionnaire/ImageEvaluation';
import { api } from '../../../services/api';

const ImageEvaluation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'school_morning', title: 'School (Morning)' },
    { key: 'school_afternoon', title: 'School (Afternoon)' },
    { key: 'community_morning', title: 'Community Center (Morning)' },
    { key: 'community_afternoon', title: 'Community Center (Afternoon)' },
    { key: 'home_morning', title: 'Home (Morning)' },
    { key: 'home_after_school', title: 'Home (After School)' },
  ]);

  const renderScene = ({ route }) => {
    const images = [
      { source: require('../../../assets/images/mood1.png'), value: 'very_happy' },
      { source: require('../../../assets/images/mood2.png'), value: 'happy' },
      { source: require('../../../assets/images/mood3.png'), value: 'neutral' },
      { source: require('../../../assets/images/mood4.png'), value: 'sad' },
      { source: require('../../../assets/images/mood5.png'), value: 'very_sad' },
    ];

    const handleImageSelect = async (image) => {
      try {
        await api.post('/evaluation/image', {
          location: route.key,
          evaluation: image.value,
          timestamp: new Date().toISOString(),
          evaluator: 'referent_facilitator',
        });
      } catch (error) {
        console.error('Error saving image evaluation:', error);
      }
    };

    return (
      <ScrollView style={styles.scene}>
        <View style={styles.evaluationContainer}>
          <ImageEvaluationComponent
            images={images}
            onSelect={handleImageSelect}
          />
        </View>
      </ScrollView>
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
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
  evaluationContainer: {
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
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ImageEvaluation;
