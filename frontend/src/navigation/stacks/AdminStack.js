import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Écrans principaux
import DashboardScreen from '../../screens/Admin/DashboardScreen';
import UtilisateursScreen from '../../screens/Admin/UtilisateursScreen';
import ConfigurationScreen from '../../screens/Admin/ConfigurationScreen';
import StatistiquesScreen from '../../screens/Admin/StatistiquesScreen';
import ProfilScreen from '../../screens/Profile/ProfilScreen';

// Écrans de gestion des utilisateurs
import ListeUtilisateursScreen from '../../screens/Admin/Utilisateurs/ListeUtilisateursScreen';
import AjouterUtilisateurScreen from '../../screens/Admin/Utilisateurs/AjouterUtilisateurScreen';
import ModifierUtilisateurScreen from '../../screens/Admin/Utilisateurs/ModifierUtilisateurScreen';
import DetailsUtilisateurScreen from '../../screens/Admin/Utilisateurs/DetailsUtilisateurScreen';

// Écrans de configuration
import ParametresGenerauxScreen from '../../screens/Admin/Configuration/ParametresGenerauxScreen';
import GestionQuestionnairesScreen from '../../screens/Admin/Configuration/GestionQuestionnairesScreen';
import GestionRolesScreen from '../../screens/Admin/Configuration/GestionRolesScreen';
import GestionNotificationsScreen from '../../screens/Admin/Configuration/GestionNotificationsScreen';

// Écrans de rapports et logs
import RapportsSystemeScreen from '../../screens/Admin/Systeme/RapportsSystemeScreen';
import LogsSystemeScreen from '../../screens/Admin/Systeme/LogsSystemeScreen';
import SauvegardesScreen from '../../screens/Admin/Systeme/SauvegardesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UtilisateursStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListeUtilisateurs" component={ListeUtilisateursScreen} />
    <Stack.Screen name="AjouterUtilisateur" component={AjouterUtilisateurScreen} />
    <Stack.Screen name="ModifierUtilisateur" component={ModifierUtilisateurScreen} />
    <Stack.Screen name="DetailsUtilisateur" component={DetailsUtilisateurScreen} />
  </Stack.Navigator>
);

const ConfigurationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ParametresGeneraux" component={ParametresGenerauxScreen} />
    <Stack.Screen name="GestionQuestionnaires" component={GestionQuestionnairesScreen} />
    <Stack.Screen name="GestionRoles" component={GestionRolesScreen} />
    <Stack.Screen name="GestionNotifications" component={GestionNotificationsScreen} />
  </Stack.Navigator>
);

const SystemeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RapportsSysteme" component={RapportsSystemeScreen} />
    <Stack.Screen name="LogsSysteme" component={LogsSystemeScreen} />
    <Stack.Screen name="Sauvegardes" component={SauvegardesScreen} />
  </Stack.Navigator>
);

const AdminStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'view-dashboard';
              break;
            case 'Utilisateurs':
              iconName = 'account-group';
              break;
            case 'Configuration':
              iconName = 'cog';
              break;
            case 'Systeme':
              iconName = 'server';
              break;
            case 'Profil':
              iconName = 'account';
              break;
            default:
              iconName = 'help';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3F51B5',
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
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Utilisateurs" 
        component={UtilisateursStack}
        options={{
          title: 'Utilisateurs',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Configuration" 
        component={ConfigurationStack}
        options={{
          title: 'Configuration',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Systeme" 
        component={SystemeStack}
        options={{
          title: 'Système',
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

export default AdminStack;
