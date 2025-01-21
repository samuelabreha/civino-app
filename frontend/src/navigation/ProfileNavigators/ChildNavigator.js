import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BehaviorContracts from '../../screens/Child/BehaviorContracts';
import Questionnaire from '../../screens/Child/Questionnaire';
import ImageEvaluation from '../../screens/Child/ImageEvaluation';
import ProgressReport from '../../screens/Child/ProgressReport';
import BehavioralStatistics from '../../screens/Child/BehavioralStatistics';
import Overview from '../../screens/Child/Overview';

const Stack = createStackNavigator();

const ChildNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="BehaviorContracts"
        component={BehaviorContracts}
        options={{ title: 'Behavior Contracts' }}
      />
      <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{ title: 'Questionnaire' }}
      />
      <Stack.Screen
        name="ImageEvaluation"
        component={ImageEvaluation}
        options={{ title: 'Image Evaluation' }}
      />
      <Stack.Screen
        name="ProgressReport"
        component={ProgressReport}
        options={{ title: 'Progress Report' }}
      />
      <Stack.Screen
        name="BehavioralStatistics"
        component={BehavioralStatistics}
        options={{ title: 'Behavioral Statistics' }}
      />
      <Stack.Screen
        name="Overview"
        component={Overview}
        options={{ title: 'Overview' }}
      />
    </Stack.Navigator>
  );
};

export default ChildNavigator;
