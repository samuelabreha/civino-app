import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import SettingsHomeScreen from '../screens/Settings/SettingsHomeScreen';
import LanguageSelectionScreen from '../screens/Settings/LanguageSelectionScreen';
import NotificationsScreen from '../screens/Settings/NotificationsScreen';
import AccountManagementScreen from '../screens/Settings/AccountManagementScreen';
import EditInformationScreen from '../screens/Settings/Account/EditInformationScreen';
import LogoutScreen from '../screens/Settings/Account/LogoutScreen';

const Stack = createStackNavigator();

const SettingsNavigator = () => {
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
        name="SettingsHome" 
        component={SettingsHomeScreen}
        options={{ title: 'Paramètres' }}
      />
      <Stack.Screen 
        name="LanguageSelection" 
        component={LanguageSelectionScreen}
        options={{ title: 'Sélection de la Langue' }}
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen 
        name="AccountManagement" 
        component={AccountManagementScreen}
        options={{ title: 'Gestion du Compte' }}
      />
      <Stack.Screen 
        name="EditInformation" 
        component={EditInformationScreen}
        options={{ title: 'Modifier les Informations' }}
      />
      <Stack.Screen 
        name="Logout" 
        component={LogoutScreen}
        options={{ title: 'Déconnexion' }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
