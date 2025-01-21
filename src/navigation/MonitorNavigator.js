import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import MonitorHomeScreen from '../screens/Monitor/MonitorHomeScreen';
import QuestionnaireHomeScreen from '../screens/Monitor/Questionnaire/QuestionnaireHomeScreen';
import CalendarScreen from '../screens/Monitor/Questionnaire/CalendarScreen';
import QuestionnaireSelectionScreen from '../screens/Monitor/Questionnaire/QuestionnaireSelectionScreen';
import QuestionNavigationScreen from '../screens/Monitor/Questionnaire/QuestionNavigationScreen';
import ImageEvaluationHomeScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/ImageEvaluationHomeScreen';
import SchoolMorningEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/SchoolMorningEvalScreen';
import SchoolAfternoonEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/SchoolAfternoonEvalScreen';
import CenterMorningEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/CenterMorningEvalScreen';
import CenterAfternoonEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/CenterAfternoonEvalScreen';
import HomeMorningEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/HomeMorningEvalScreen';
import HomeAfterSchoolEvalScreen from '../screens/Monitor/Questionnaire/ImageEvaluation/HomeAfterSchoolEvalScreen';
import ProgressReportHomeScreen from '../screens/Monitor/ProgressReport/ProgressReportHomeScreen';
import ProgressReportCalendarScreen from '../screens/Monitor/ProgressReport/CalendarScreen';
import ProgressReportSelectionScreen from '../screens/Monitor/ProgressReport/ReportSelectionScreen';
import StatisticsHomeScreen from '../screens/Monitor/Statistics/StatisticsHomeScreen';
import ProgressionTrackingScreen from '../screens/Monitor/Statistics/ProgressionTrackingScreen';
import DailyStatsScreen from '../screens/Monitor/Statistics/DailyStatsScreen';
import WeeklyStatsScreen from '../screens/Monitor/Statistics/WeeklyStatsScreen';
import MonthlyStatsScreen from '../screens/Monitor/Statistics/MonthlyStatsScreen';
import OverviewHomeScreen from '../screens/Monitor/Overview/OverviewHomeScreen';
import DailyOverviewScreen from '../screens/Monitor/Overview/DailyOverviewScreen';
import WeeklyOverviewScreen from '../screens/Monitor/Overview/WeeklyOverviewScreen';
import MonthlyOverviewScreen from '../screens/Monitor/Overview/MonthlyOverviewScreen';
import AverageGraphsScreen from '../screens/Monitor/Overview/AverageGraphsScreen';

const Stack = createStackNavigator();

const MonitorNavigator = () => {
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
        name="MonitorHome" 
        component={MonitorHomeScreen}
        options={{ title: 'Moniteur FINC' }}
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
        name="HomeMorningEval" 
        component={HomeMorningEvalScreen}
        options={{ title: 'Maison (matin)' }}
      />
      <Stack.Screen 
        name="HomeAfterSchoolEval" 
        component={HomeAfterSchoolEvalScreen}
        options={{ title: "Maison (après l'école)" }}
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

export default MonitorNavigator;
