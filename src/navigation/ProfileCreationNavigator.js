import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import StatusInputScreen from '../screens/Home/ProfileCreation/StatusInputScreen';
import NameInputScreen from '../screens/Home/ProfileCreation/NameInputScreen';
import FirstNameInputScreen from '../screens/Home/ProfileCreation/FirstNameInputScreen';
import BehaviorContractsIntroScreen from '../screens/Home/ProfileCreation/BehaviorContractsIntroScreen';
import QuestionnairesHomeScreen from '../screens/Home/ProfileCreation/QuestionnairesHomeScreen';
import ImageEvaluationScreen from '../screens/Home/ProfileCreation/Questionnaires/ImageEvaluationScreen';
import SchoolQuestionnaireScreen from '../screens/Home/ProfileCreation/Questionnaires/SchoolQuestionnaireScreen';
import CenterQuestionnaireScreen from '../screens/Home/ProfileCreation/Questionnaires/CenterQuestionnaireScreen';
import HomeQuestionnaireScreen from '../screens/Home/ProfileCreation/Questionnaires/HomeQuestionnaireScreen';
import ProgressReportScreen from '../screens/Home/ProfileCreation/ProgressReportScreen';

const Stack = createStackNavigator();

const ProfileCreationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#E0E0E0',
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#333',
        },
        headerTintColor: '#2196F3',
      }}
    >
      <Stack.Screen 
        name="StatusInput" 
        component={StatusInputScreen}
        options={{ title: 'Saisie du Statut' }}
      />
      <Stack.Screen 
        name="NameInput" 
        component={NameInputScreen}
        options={{ title: 'Saisie du Nom' }}
      />
      <Stack.Screen 
        name="FirstNameInput" 
        component={FirstNameInputScreen}
        options={{ title: 'Saisie du Prénom' }}
      />
      <Stack.Screen 
        name="BehaviorContracts" 
        component={BehaviorContractsIntroScreen}
        options={{ title: 'Contrats de Comportement' }}
      />
      <Stack.Screen 
        name="QuestionnairesHome" 
        component={QuestionnairesHomeScreen}
        options={{ title: 'Différents Questionnaires' }}
      />
      <Stack.Screen 
        name="ImageEvaluation" 
        component={ImageEvaluationScreen}
        options={{ title: 'Évaluation par Image' }}
      />
      <Stack.Screen 
        name="SchoolQuestionnaire" 
        component={SchoolQuestionnaireScreen}
        options={{ title: 'Questionnaire École' }}
      />
      <Stack.Screen 
        name="CenterQuestionnaire" 
        component={CenterQuestionnaireScreen}
        options={{ title: 'Questionnaire Maison de Quartier' }}
      />
      <Stack.Screen 
        name="HomeQuestionnaire" 
        component={HomeQuestionnaireScreen}
        options={{ title: 'Questionnaire Maison' }}
      />
      <Stack.Screen 
        name="ProgressReport" 
        component={ProgressReportScreen}
        options={{ title: 'Rapport de Progression' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileCreationNavigator;
