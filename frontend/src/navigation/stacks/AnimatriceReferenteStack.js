import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Écrans principaux
import AccueilScreen from '../../screens/AnimatriceReferente/AccueilScreen';
import CalendrierScreen from '../../screens/AnimatriceReferente/CalendrierScreen';
import DocumentsScreen from '../../screens/Documents/ListeDocumentsScreen';
import EvaluationsScreen from '../../screens/AnimatriceReferente/EvaluationsScreen';
import StatistiquesScreen from '../../screens/AnimatriceReferente/StatistiquesScreen';
import ProfilScreen from '../../screens/Profile/ProfilScreen';

// Écrans des documents
import AjouterDocumentScreen from '../../screens/Documents/ChargerDocumentScreen';
import VisualiserDocumentScreen from '../../screens/Documents/VisualiserDocumentScreen';

// Écrans des évaluations
import NouvelleEvaluationScreen from '../../screens/AnimatriceReferente/Evaluations/NouvelleEvaluationScreen';
import DetailsEvaluationScreen from '../../screens/AnimatriceReferente/Evaluations/DetailsEvaluationScreen';
import ModifierEvaluationScreen from '../../screens/AnimatriceReferente/Evaluations/ModifierEvaluationScreen';

// Écrans de gestion des enfants et groupes
import ListeEnfantsScreen from '../../screens/AnimatriceReferente/Enfants/ListeEnfantsScreen';
import DetailsEnfantScreen from '../../screens/AnimatriceReferente/Enfants/DetailsEnfantScreen';
import ListeGroupesScreen from '../../screens/AnimatriceReferente/Groupes/ListeGroupesScreen';
import DetailsGroupeScreen from '../../screens/AnimatriceReferente/Groupes/DetailsGroupeScreen';

// Écrans de rapports et analyses
import RapportsScreen from '../../screens/AnimatriceReferente/Rapports/RapportsScreen';
import AnalysesScreen from '../../screens/AnimatriceReferente/Rapports/AnalysesScreen';

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

const GestionStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListeEnfants" component={ListeEnfantsScreen} />
    <Stack.Screen name="DetailsEnfant" component={DetailsEnfantScreen} />
    <Stack.Screen name="ListeGroupes" component={ListeGroupesScreen} />
    <Stack.Screen name="DetailsGroupe" component={DetailsGroupeScreen} />
  </Stack.Navigator>
);

const RapportsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListeRapports" component={RapportsScreen} />
    <Stack.Screen name="Analyses" component={AnalysesScreen} />
  </Stack.Navigator>
);

const AnimatriceReferenteStack = () => {
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
            case 'Gestion':
              iconName = 'account-group';
              break;
            case 'Rapports':
              iconName = 'chart-box';
              break;
            case 'Profil':
              iconName = 'account';
              break;
            default:
              iconName = 'help';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E91E63',
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
        name="Gestion" 
        component={GestionStack}
        options={{
          title: 'Gestion',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Rapports" 
        component={RapportsStack}
        options={{
          title: 'Rapports',
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

export default AnimatriceReferenteStack;
