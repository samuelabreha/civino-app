import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileCreationNavigator from './ProfileCreationNavigator';
import ProfileSelectionScreen from '../screens/Home/ProfileSelection/ProfileSelectionScreen';
import ChildProfileScreen from '../screens/Home/ProfileSelection/ChildProfileScreen';
import TeacherProfileScreen from '../screens/Home/ProfileSelection/TeacherProfileScreen';
import MonitorProfileScreen from '../screens/Home/ProfileSelection/MonitorProfileScreen';
import ParentsProfileScreen from '../screens/Home/ProfileSelection/ParentsProfileScreen';
import AdminProfileScreen from '../screens/Home/ProfileSelection/AdminProfileScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
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
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Accueil' }}
      />
      <Stack.Screen 
        name="ProfileSelection" 
        component={ProfileSelectionScreen}
        options={{ title: 'Sélection du Profil' }}
      />
      <Stack.Screen 
        name="ChildProfile" 
        component={ChildProfileScreen}
        options={{ title: "Profil de l'Enfant" }}
      />
      <Stack.Screen 
        name="TeacherProfile" 
        component={TeacherProfileScreen}
        options={{ title: "Profil de l'Enseignant-e" }}
      />
      <Stack.Screen 
        name="MonitorProfile" 
        component={MonitorProfileScreen}
        options={{ title: 'Profil du Moniteur FINC' }}
      />
      <Stack.Screen 
        name="ParentsProfile" 
        component={ParentsProfileScreen}
        options={{ title: 'Profil des Parents' }}
      />
      <Stack.Screen 
        name="AdminProfile" 
        component={AdminProfileScreen}
        options={{ title: "Profil de l'Administrateur" }}
      />
      <Stack.Screen 
        name="ProfileCreation" 
        component={ProfileCreationNavigator}
        options={{ 
          title: "Création d'un Profil",
          headerShown: false 
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
