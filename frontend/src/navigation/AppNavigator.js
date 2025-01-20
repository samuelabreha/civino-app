import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Écrans d'authentification
import LoginScreen from '../screens/Authentification/LoginScreen';
import RegisterScreen from '../screens/Authentification/RegisterScreen';
import ForgotPasswordScreen from '../screens/Authentification/ForgotPasswordScreen';

// Écrans principaux
import AccueilScreen from '../screens/Accueil/AccueilScreen';
import CalendarScreen from '../screens/Documents/CalendarScreen';
import StatistiquesScreen from '../screens/AnimatriceReferente/StatistiquesScreen';
import ProfilScreen from '../screens/Parametres/GestionCompteScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Accueil':
            iconName = 'home';
            break;
          case 'Calendar':
            iconName = 'event';
            break;
          case 'Statistiques':
            iconName = 'bar-chart';
            break;
          case 'Profil':
            iconName = 'person';
            break;
          default:
            iconName = 'help';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#2196F3',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Accueil" component={AccueilScreen} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
    <Tab.Screen name="Statistiques" component={StatistiquesScreen} />
    <Tab.Screen name="Profil" component={ProfilScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  // Ici vous pouvez ajouter la logique pour vérifier si l'utilisateur est connecté
  const isAuthenticated = false; // À remplacer par votre logique d'authentification

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
