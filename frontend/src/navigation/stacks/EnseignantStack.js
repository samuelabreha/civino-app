import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Écrans principaux
import AccueilScreen from '../../screens/Enseignant/AccueilScreen';
import CalendrierScreen from '../../screens/Enseignant/CalendrierScreen';
import DocumentsScreen from '../../screens/Documents/ListeDocumentsScreen';
import EvaluationsScreen from '../../screens/Enseignant/EvaluationsScreen';
import StatistiquesScreen from '../../screens/Enseignant/StatistiquesScreen';
import ProfilScreen from '../../screens/Profile/ProfilScreen';

// Écrans des documents
import AjouterDocumentScreen from '../../screens/Documents/ChargerDocumentScreen';
import VisualiserDocumentScreen from '../../screens/Documents/VisualiserDocumentScreen';

// Écrans des évaluations
import NouvelleEvaluationScreen from '../../screens/Enseignant/Evaluations/NouvelleEvaluationScreen';
import DetailsEvaluationScreen from '../../screens/Enseignant/Evaluations/DetailsEvaluationScreen';
import ModifierEvaluationScreen from '../../screens/Enseignant/Evaluations/ModifierEvaluationScreen';

// Écrans des statistiques
import StatistiquesDetailleesScreen from '../../screens/Enseignant/Statistiques/StatistiquesDetailleesScreen';
import RapportProgressionScreen from '../../screens/Enseignant/Rapports/RapportProgressionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DocumentsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListeDocuments" component={DocumentsScreen} />
    <Stack.Screen name="AjouterDocument" component={AjouterDocumentScreen} />
    <Stack.Screen name="VisualiserDocument" component={VisualiserDocumentScreen} />
  </Stack.Navigator>
);

const EvaluationsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListeEvaluations" component={EvaluationsScreen} />
    <Stack.Screen name="NouvelleEvaluation" component={NouvelleEvaluationScreen} />
    <Stack.Screen name="DetailsEvaluation" component={DetailsEvaluationScreen} />
    <Stack.Screen name="ModifierEvaluation" component={ModifierEvaluationScreen} />
  </Stack.Navigator>
);

const StatistiquesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="StatistiquesMenu" component={StatistiquesScreen} />
    <Stack.Screen name="StatistiquesDetailees" component={StatistiquesDetailleesScreen} />
    <Stack.Screen name="RapportProgression" component={RapportProgressionScreen} />
  </Stack.Navigator>
);

const EnseignantStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Accueil':
              iconName = 'home';
              break;
            case 'Calendrier':
              iconName = 'calendar';
              break;
            case 'Documents':
              iconName = 'file-document';
              break;
            case 'Evaluations':
              iconName = 'clipboard-check';
              break;
            case 'Statistiques':
              iconName = 'chart-bar';
              break;
            case 'Profil':
              iconName = 'account';
              break;
            default:
              iconName = 'help';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Plus_Jakarta_Sans-Regular',
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen 
        name="Accueil" 
        component={AccueilScreen}
        options={{
          title: 'Accueil',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Calendrier" 
        component={CalendrierScreen}
        options={{
          title: 'Calendrier',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Documents" 
        component={DocumentsStack}
        options={{
          title: 'Documents',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Evaluations" 
        component={EvaluationsStack}
        options={{
          title: 'Évaluations',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Statistiques" 
        component={StatistiquesStack}
        options={{
          title: 'Statistiques',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfilScreen}
        options={{
          title: 'Profil',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default EnseignantStack;
