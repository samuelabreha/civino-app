import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import EnfantStack from './stacks/EnfantStack';
import EnseignantStack from './stacks/EnseignantStack';
import ParentStack from './stacks/ParentStack';
import MoniteurFincStack from './stacks/MoniteurFincStack';
import AnimatriceReferenteStack from './stacks/AnimatriceReferenteStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { currentProfile } = useSelector((state) => state.profile);

  const getInitialRouteName = () => {
    if (!currentProfile) return 'Auth';
    
    switch (currentProfile.role) {
      case 'enfant':
        return 'EnfantStack';
      case 'enseignant':
        return 'EnseignantStack';
      case 'parent':
        return 'ParentStack';
      case 'moniteurFinc':
        return 'MoniteurFincStack';
      case 'animatriceReferente':
        return 'AnimatriceReferenteStack';
      default:
        return 'Auth';
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={getInitialRouteName()}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="EnfantStack" component={EnfantStack} />
        <Stack.Screen name="EnseignantStack" component={EnseignantStack} />
        <Stack.Screen name="ParentStack" component={ParentStack} />
        <Stack.Screen name="MoniteurFincStack" component={MoniteurFincStack} />
        <Stack.Screen
          name="AnimatriceReferenteStack"
          component={AnimatriceReferenteStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
