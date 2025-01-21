import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import ReferentHomeScreen from '../screens/Referent/ReferentHomeScreen';
import QuestionnaireHomeScreen from '../screens/Referent/Questionnaire/QuestionnaireHomeScreen';
import CalendarScreen from '../screens/Referent/Questionnaire/CalendarScreen';
import QuestionnaireSelectionScreen from '../screens/Referent/Questionnaire/QuestionnaireSelectionScreen';
import QuestionNavigationScreen from '../screens/Referent/Questionnaire/QuestionNavigationScreen';
import ImageEvaluationHomeScreen from '../screens/Referent/Questionnaire/ImageEvaluation/ImageEvaluationHomeScreen';
import SchoolMorningEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/SchoolMorningEvalScreen';
import SchoolAfternoonEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/SchoolAfternoonEvalScreen';
import CenterMorningEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/CenterMorningEvalScreen';
import CenterAfternoonEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/CenterAfternoonEvalScreen';
import HomeMorningEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/HomeMorningEvalScreen';
import HomeAfterSchoolEvalScreen from '../screens/Referent/Questionnaire/ImageEvaluation/HomeAfterSchoolEvalScreen';
import ProgressReportHomeScreen from '../screens/Referent/ProgressReport/ProgressReportHomeScreen';
import ProgressReportCalendarScreen from '../screens/Referent/ProgressReport/CalendarScreen';
import ProgressReportSelectionScreen from '../screens/Referent/ProgressReport/ReportSelectionScreen';
import StatisticsHomeScreen from '../screens/Referent/Statistics/StatisticsHomeScreen';
import ProgressionTrackingScreen from '../screens/Referent/Statistics/ProgressionTrackingScreen';
import DailyStatsScreen from '../screens/Referent/Statistics/DailyStatsScreen';
import WeeklyStatsScreen from '../screens/Referent/Statistics/WeeklyStatsScreen';
import MonthlyStatsScreen from '../screens/Referent/Statistics/MonthlyStatsScreen';
import OverviewHomeScreen from '../screens/Referent/Overview/OverviewHomeScreen';
import DailyOverviewScreen from '../screens/Referent/Overview/DailyOverviewScreen';
import WeeklyOverviewScreen from '../screens/Referent/Overview/WeeklyOverviewScreen';
import MonthlyOverviewScreen from '../screens/Referent/Overview/MonthlyOverviewScreen';
import AverageGraphsScreen from '../screens/Referent/Overview/AverageGraphsScreen';

const Stack = createStackNavigator();

const ReferentNavigator = () => {
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
        name="ReferentHome" 
        component={ReferentHomeScreen}
        options={{ title: 'Animatrice Référente' }}
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

export default ReferentNavigator;
