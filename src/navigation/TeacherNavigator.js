import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import TeacherHomeScreen from '../screens/Teacher/TeacherHomeScreen';
import QuestionnaireHomeScreen from '../screens/Teacher/Questionnaire/QuestionnaireHomeScreen';
import CalendarScreen from '../screens/Teacher/Questionnaire/CalendarScreen';
import QuestionnaireSelectionScreen from '../screens/Teacher/Questionnaire/QuestionnaireSelectionScreen';
import QuestionNavigationScreen from '../screens/Teacher/Questionnaire/QuestionNavigationScreen';
import ImageEvaluationHomeScreen from '../screens/Teacher/ImageEvaluation/ImageEvaluationHomeScreen';
import SchoolMorningEvalScreen from '../screens/Teacher/ImageEvaluation/SchoolMorningEvalScreen';
import SchoolAfternoonEvalScreen from '../screens/Teacher/ImageEvaluation/SchoolAfternoonEvalScreen';
import ProgressReportHomeScreen from '../screens/Teacher/ProgressReport/ProgressReportHomeScreen';
import ProgressReportCalendarScreen from '../screens/Teacher/ProgressReport/CalendarScreen';
import ProgressReportSelectionScreen from '../screens/Teacher/ProgressReport/ReportSelectionScreen';
import StatisticsHomeScreen from '../screens/Teacher/Statistics/StatisticsHomeScreen';
import ProgressionTrackingScreen from '../screens/Teacher/Statistics/ProgressionTrackingScreen';
import DailyStatsScreen from '../screens/Teacher/Statistics/DailyStatsScreen';
import WeeklyStatsScreen from '../screens/Teacher/Statistics/WeeklyStatsScreen';
import MonthlyStatsScreen from '../screens/Teacher/Statistics/MonthlyStatsScreen';
import OverviewHomeScreen from '../screens/Teacher/Overview/OverviewHomeScreen';
import DailyOverviewScreen from '../screens/Teacher/Overview/DailyOverviewScreen';
import WeeklyOverviewScreen from '../screens/Teacher/Overview/WeeklyOverviewScreen';
import MonthlyOverviewScreen from '../screens/Teacher/Overview/MonthlyOverviewScreen';
import AverageGraphsScreen from '../screens/Teacher/Overview/AverageGraphsScreen';

const Stack = createStackNavigator();

const TeacherNavigator = () => {
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
        name="TeacherHome" 
        component={TeacherHomeScreen}
        options={{ title: 'Enseignant-e' }}
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

export default TeacherNavigator;
