import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Écrans principaux
import AccueilScreen from '../../screens/Enfant/AccueilScreen';
import QuestionnaireScreen from '../../screens/Enfant/QuestionnaireScreen';
import ContratsComportementScreen from '../../screens/Enfant/ContratsComportementScreen';
import StatistiquesScreen from '../../screens/Enfant/StatistiquesScreen';
import ProfilScreen from '../../screens/Profile/ProfilScreen';

// Écrans des questionnaires
import QuestionnaireEcoleScreen from '../../screens/Enfant/Questionnaires/EcoleScreen';
import QuestionnaireMaisonScreen from '../../screens/Enfant/Questionnaires/MaisonScreen';
import QuestionnaireMaisonQuartierScreen from '../../screens/Enfant/Questionnaires/MaisonDeQuartierScreen';
import EvaluationImageScreen from '../../screens/Enfant/Questionnaires/EvaluationImageScreen';

// Écrans des statistiques
import StatistiquesDetailleesScreen from '../../screens/Enfant/Statistiques/StatistiquesDetailleesScreen';
import RapportProgressionScreen from '../../screens/Enfant/Rapports/RapportProgressionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const QuestionnaireStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="QuestionnaireMenu" component={QuestionnaireScreen} />
    <Stack.Screen name="QuestionnaireEcole" component={QuestionnaireEcoleScreen} />
    <Stack.Screen name="QuestionnaireMaison" component={QuestionnaireMaisonScreen} />
    <Stack.Screen name="QuestionnaireMaisonQuartier" component={QuestionnaireMaisonQuartierScreen} />
    <Stack.Screen name="EvaluationImage" component={EvaluationImageScreen} />
  </Stack.Navigator>
);

const StatistiquesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="StatistiquesMenu" component={StatistiquesScreen} />
    <Stack.Screen name="StatistiquesDetailees" component={StatistiquesDetailleesScreen} />
    <Stack.Screen name="RapportProgression" component={RapportProgressionScreen} />
  </Stack.Navigator>
);

const EnfantStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Accueil':
              iconName = 'home';
              break;
            case 'Questionnaires':
              iconName = 'clipboard-text';
              break;
            case 'Contrats':
              iconName = 'handshake';
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
        tabBarActiveTintColor: '#4CAF50',
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
        name="Questionnaires" 
        component={QuestionnaireStack}
        options={{
          title: 'Questionnaires',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Contrats" 
        component={ContratsComportementScreen}
        options={{
          title: 'Contrats',
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

export default EnfantStack;
