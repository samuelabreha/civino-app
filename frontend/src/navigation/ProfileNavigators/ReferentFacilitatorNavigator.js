import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Questionnaire from '../../screens/ReferentFacilitator/Questionnaire';
import ImageEvaluation from '../../screens/ReferentFacilitator/ImageEvaluation';
import ProgressReport from '../../screens/ReferentFacilitator/ProgressReport';
import BehavioralStatistics from '../../screens/ReferentFacilitator/BehavioralStatistics';
import Overview from '../../screens/ReferentFacilitator/Overview';

const Stack = createStackNavigator();

const ReferentFacilitatorNavigator = () => {
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

export default ReferentFacilitatorNavigator;
