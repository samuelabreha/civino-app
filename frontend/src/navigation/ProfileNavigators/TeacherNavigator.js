import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Questionnaire from '../../screens/Teacher/Questionnaire';
import ImageEvaluation from '../../screens/Teacher/ImageEvaluation';
import ProgressReport from '../../screens/Teacher/ProgressReport';
import BehavioralStatistics from '../../screens/Teacher/BehavioralStatistics';
import Overview from '../../screens/Teacher/Overview';

const Stack = createStackNavigator();

const TeacherNavigator = () => {
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
        name="Questionnaire"
        component={Questionnaire}
        options={{ title: 'School Questionnaire' }}
      />
      <Stack.Screen
        name="ImageEvaluation"
        component={ImageEvaluation}
        options={{ title: 'School Evaluation' }}
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

export default TeacherNavigator;
