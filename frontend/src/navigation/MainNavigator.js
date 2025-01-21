import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../constants/assets';

// Écrans d'authentification
import LoginScreen from '../screens/Authentification/LoginScreen';
import RegisterScreen from '../screens/Authentification/RegisterScreen';
import ForgotPasswordScreen from '../screens/Authentification/ForgotPasswordScreen';

// Écrans d'accueil et profils
import AccueilScreen from '../screens/Accueil/AccueilScreen';
import SaisieStatutScreen from '../screens/Accueil/CreationProfil/SaisieStatutScreen';
import SaisieNomScreen from '../screens/Accueil/CreationProfil/SaisieNomScreen';
import SaisiePrenomScreen from '../screens/Accueil/CreationProfil/SaisiePrenomScreen';
import ContratsComportementScreen from '../screens/Accueil/CreationProfil/ContratsComportementScreen';

// Écrans de questionnaires
import EvaluationImageScreen from '../screens/Accueil/CreationProfil/Questionnaires/EvaluationImageScreen';
import EcoleScreen from '../screens/Accueil/CreationProfil/Questionnaires/EcoleScreen';
import MaisonDeQuartierScreen from '../screens/Accueil/CreationProfil/Questionnaires/MaisonDeQuartierScreen';
import MaisonScreen from '../screens/Accueil/CreationProfil/Questionnaires/MaisonScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

const CreationProfilStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SaisieStatut" component={SaisieStatutScreen} />
    <Stack.Screen name="SaisieNom" component={SaisieNomScreen} />
    <Stack.Screen name="SaisiePrenom" component={SaisiePrenomScreen} />
    <Stack.Screen name="ContratsComportement" component={ContratsComportementScreen} />
    <Stack.Screen name="EvaluationImage" component={EvaluationImageScreen} />
    <Stack.Screen name="Ecole" component={EcoleScreen} />
    <Stack.Screen name="MaisonDeQuartier" component={MaisonDeQuartierScreen} />
    <Stack.Screen name="Maison" component={MaisonScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconSource;

        switch (route.name) {
          case 'Accueil':
            iconSource = icons.general.home;
            break;
          case 'Documents':
            iconSource = icons.general.documents;
            break;
          case 'Contacts':
            iconSource = icons.general.contacts;
            break;
          case 'Paramètres':
            iconSource = icons.general.settings;
            break;
          default:
            iconSource = icons.general.home;
        }

        return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
      },
    })}
  >
    <Tab.Screen name="Accueil" component={AccueilScreen} />
    <Tab.Screen name="Documents" component={DocumentsScreen} />
    <Tab.Screen name="Contacts" component={ContactsScreen} />
    <Tab.Screen name="Paramètres" component={ParametresScreen} />
  </Tab.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="CreationProfil" component={CreationProfilStack} />
    <Stack.Screen name="MainApp" component={MainTabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
