import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import ChildHomeScreen from '../screens/Child/ChildHomeScreen';
import ContractsHomeScreen from '../screens/Child/Contracts/ContractsHomeScreen';
import SchoolContractScreen from '../screens/Child/Contracts/SchoolContractScreen';
import HomeContractScreen from '../screens/Child/Contracts/HomeContractScreen';
import CenterContractScreen from '../screens/Child/Contracts/CenterContractScreen';
import QuestionnaireHomeScreen from '../screens/Child/Questionnaire/QuestionnaireHomeScreen';
import CalendarScreen from '../screens/Child/Questionnaire/CalendarScreen';
import QuestionnaireSelectionScreen from '../screens/Child/Questionnaire/QuestionnaireSelectionScreen';
import QuestionNavigationScreen from '../screens/Child/Questionnaire/QuestionNavigationScreen';
import ImageEvaluationHomeScreen from '../screens/Child/Questionnaire/ImageEvaluation/ImageEvaluationHomeScreen';
import SchoolMorningEvalScreen from '../screens/Child/Questionnaire/ImageEvaluation/SchoolMorningEvalScreen';
import SchoolAfternoonEvalScreen from '../screens/Child/Questionnaire/ImageEvaluation/SchoolAfternoonEvalScreen';
import CenterMorningEvalScreen from '../screens/Child/Questionnaire/ImageEvaluation/CenterMorningEvalScreen';
import CenterAfternoonEvalScreen from '../screens/Child/Questionnaire/ImageEvaluation/CenterAfternoonEvalScreen';
import HomeAfternoonEvalScreen from '../screens/Child/Questionnaire/ImageEvaluation/HomeAfternoonEvalScreen';
import ProgressReportHomeScreen from '../screens/Child/ProgressReport/ProgressReportHomeScreen';
import ProgressReportCalendarScreen from '../screens/Child/ProgressReport/CalendarScreen';
import ProgressReportSelectionScreen from '../screens/Child/ProgressReport/ReportSelectionScreen';
import StatisticsHomeScreen from '../screens/Child/Statistics/StatisticsHomeScreen';
import ProgressionTrackingScreen from '../screens/Child/Statistics/ProgressionTrackingScreen';
import DailyStatsScreen from '../screens/Child/Statistics/DailyStatsScreen';
import WeeklyStatsScreen from '../screens/Child/Statistics/WeeklyStatsScreen';
import MonthlyStatsScreen from '../screens/Child/Statistics/MonthlyStatsScreen';
import OverviewHomeScreen from '../screens/Child/Overview/OverviewHomeScreen';
import DailyOverviewScreen from '../screens/Child/Overview/DailyOverviewScreen';
import WeeklyOverviewScreen from '../screens/Child/Overview/WeeklyOverviewScreen';
import MonthlyOverviewScreen from '../screens/Child/Overview/MonthlyOverviewScreen';
import AverageGraphsScreen from '../screens/Child/Overview/AverageGraphsScreen';

const Stack = createStackNavigator();

const ChildNavigator = () => {
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
        name="ChildHome" 
        component={ChildHomeScreen}
        options={{ title: 'Enfant' }}
      />
      
      {/* Behavior Contracts Screens */}
      <Stack.Screen 
        name="ContractsHome" 
        component={ContractsHomeScreen}
        options={{ title: 'Contrats de Comportement' }}
      />
      <Stack.Screen 
        name="SchoolContract" 
        component={SchoolContractScreen}
        options={{ title: 'Contrat École' }}
      />
      <Stack.Screen 
        name="HomeContract" 
        component={HomeContractScreen}
        options={{ title: 'Contrat Maison' }}
      />
      <Stack.Screen 
        name="CenterContract" 
        component={CenterContractScreen}
        options={{ title: 'Contrat Maison de Quartier' }}
      />
      
      {/* Questionnaire Screens */}
      <Stack.Screen 
        name="QuestionnaireHome" 
        component={QuestionnaireHomeScreen}
        options={{ title: 'Questionnaire' }}
      />
      <Stack.Screen 
        name="Calendar" 
        component={CalendarScreen}
        options={{ title: 'Sélectionner une Date' }}
      />
      <Stack.Screen 
        name="QuestionnaireSelection" 
        component={QuestionnaireSelectionScreen}
        options={{ title: 'Choix du Questionnaire' }}
      />
      <Stack.Screen 
        name="QuestionNavigation" 
        component={QuestionNavigationScreen}
        options={{ title: 'Questions' }}
      />
      
      {/* Image Evaluation Screens */}
      <Stack.Screen 
        name="ImageEvaluationHome" 
        component={ImageEvaluationHomeScreen}
        options={{ title: 'Évaluation par Image' }}
      />
      <Stack.Screen 
        name="SchoolMorningEval" 
        component={SchoolMorningEvalScreen}
        options={{ title: 'École (matin)' }}
      />
      <Stack.Screen 
        name="SchoolAfternoonEval" 
        component={SchoolAfternoonEvalScreen}
        options={{ title: 'École (après-midi)' }}
      />
      <Stack.Screen 
        name="CenterMorningEval" 
        component={CenterMorningEvalScreen}
        options={{ title: 'Maison de Quartier (matin)' }}
      />
      <Stack.Screen 
        name="CenterAfternoonEval" 
        component={CenterAfternoonEvalScreen}
        options={{ title: 'Maison de Quartier (après-midi)' }}
      />
      <Stack.Screen 
        name="HomeAfternoonEval" 
        component={HomeAfternoonEvalScreen}
        options={{ title: 'Maison (après-midi)' }}
      />
      
      {/* Progress Report Screens */}
      <Stack.Screen 
        name="ProgressReportHome" 
        component={ProgressReportHomeScreen}
        options={{ title: 'Rapport de Progression' }}
      />
      <Stack.Screen 
        name="ProgressReportCalendar" 
        component={ProgressReportCalendarScreen}
        options={{ title: 'Sélectionner une Date' }}
      />
      <Stack.Screen 
        name="ProgressReportSelection" 
        component={ProgressReportSelectionScreen}
        options={{ title: "Type de Rapport" }}
      />
      
      {/* Statistics Screens */}
      <Stack.Screen 
        name="StatisticsHome" 
        component={StatisticsHomeScreen}
        options={{ title: 'Statistiques Comportementales' }}
      />
      <Stack.Screen 
        name="ProgressionTracking" 
        component={ProgressionTrackingScreen}
        options={{ title: 'Suivi des Progressions/Régressions' }}
      />
      <Stack.Screen 
        name="DailyStats" 
        component={DailyStatsScreen}
        options={{ title: 'Statistiques Quotidiennes' }}
      />
      <Stack.Screen 
        name="WeeklyStats" 
        component={WeeklyStatsScreen}
        options={{ title: 'Statistiques Hebdomadaires' }}
      />
      <Stack.Screen 
        name="MonthlyStats" 
        component={MonthlyStatsScreen}
        options={{ title: 'Statistiques Mensuelles' }}
      />
      
      {/* Overview Screens */}
      <Stack.Screen 
        name="OverviewHome" 
        component={OverviewHomeScreen}
        options={{ title: "Vue d'Ensemble" }}
      />
      <Stack.Screen 
        name="DailyOverview" 
        component={DailyOverviewScreen}
        options={{ title: 'Vue Quotidienne' }}
      />
      <Stack.Screen 
        name="WeeklyOverview" 
        component={WeeklyOverviewScreen}
        options={{ title: 'Vue Hebdomadaire' }}
      />
      <Stack.Screen 
        name="MonthlyOverview" 
        component={MonthlyOverviewScreen}
        options={{ title: 'Vue Mensuelle' }}
      />
      <Stack.Screen 
        name="AverageGraphs" 
        component={AverageGraphsScreen}
        options={{ title: 'Graphiques des Moyennes' }}
      />
    </Stack.Navigator>
  );
};

export default ChildNavigator;
