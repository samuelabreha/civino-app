import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import DocumentsHomeScreen from '../screens/Documents/DocumentsHomeScreen';
import UploadScreen from '../screens/Documents/Upload/UploadScreen';
import CalendarScreen from '../screens/Documents/Calendar/CalendarScreen';
import ReportsScreen from '../screens/Documents/Reports/ReportsScreen';
import WeeklyObservationsScreen from '../screens/Documents/Reports/WeeklyObservationsScreen';
import MonthlyObservationsScreen from '../screens/Documents/Reports/MonthlyObservationsScreen';
import MonthlyReviewScreen from '../screens/Documents/Reports/MonthlyReviewScreen';
import ImprovementPointsScreen from '../screens/Documents/Reports/ImprovementPointsScreen';
import DocumentationScreen from '../screens/Documents/Documentation/DocumentationScreen';
import BehaviorContractsScreen from '../screens/Documents/Documentation/BehaviorContractsScreen';
import SchoolContractScreen from '../screens/Documents/Documentation/Contracts/SchoolContractScreen';
import HomeContractScreen from '../screens/Documents/Documentation/Contracts/HomeContractScreen';
import CenterContractScreen from '../screens/Documents/Documentation/Contracts/CenterContractScreen';
import RulesVisualizationScreen from '../screens/Documents/Documentation/Contracts/RulesVisualizationScreen';
import IEPScreen from '../screens/Documents/Documentation/IEPScreen';
import IEPDetailsScreen from '../screens/Documents/Documentation/IEP/IEPDetailsScreen';
import IEPDownloadScreen from '../screens/Documents/Documentation/IEP/IEPDownloadScreen';

const Stack = createStackNavigator();

const DocumentsNavigator = () => {
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
        name="DocumentsHome" 
        component={DocumentsHomeScreen}
        options={{ title: 'Documents' }}
      />
      <Stack.Screen 
        name="Upload" 
        component={UploadScreen}
        options={{ title: 'Charger un Document' }}
      />
      <Stack.Screen 
        name="Calendar" 
        component={CalendarScreen}
        options={{ title: 'Calendrier' }}
      />
      <Stack.Screen 
        name="Reports" 
        component={ReportsScreen}
        options={{ title: "Rapports d'Observation" }}
      />
      <Stack.Screen 
        name="WeeklyObservations" 
        component={WeeklyObservationsScreen}
        options={{ title: 'Observations Hebdomadaires' }}
      />
      <Stack.Screen 
        name="MonthlyObservations" 
        component={MonthlyObservationsScreen}
        options={{ title: 'Observations Mensuelles' }}
      />
      <Stack.Screen 
        name="MonthlyReview" 
        component={MonthlyReviewScreen}
        options={{ title: 'Bilan du Mois' }}
      />
      <Stack.Screen 
        name="ImprovementPoints" 
        component={ImprovementPointsScreen}
        options={{ title: 'Points à Travailler' }}
      />
      <Stack.Screen 
        name="Documentation" 
        component={DocumentationScreen}
        options={{ title: 'Documentation' }}
      />
      <Stack.Screen 
        name="BehaviorContracts" 
        component={BehaviorContractsScreen}
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
      <Stack.Screen 
        name="RulesVisualization" 
        component={RulesVisualizationScreen}
        options={{ title: 'Visualisation des Règles' }}
      />
      <Stack.Screen 
        name="IEP" 
        component={IEPScreen}
        options={{ title: "Plan d'Éducation Individualisé" }}
      />
      <Stack.Screen 
        name="IEPDetails" 
        component={IEPDetailsScreen}
        options={{ title: "Détails du PEI" }}
      />
      <Stack.Screen 
        name="IEPDownload" 
        component={IEPDownloadScreen}
        options={{ title: 'Télécharger le PEI' }}
      />
    </Stack.Navigator>
  );
};

export default DocumentsNavigator;
