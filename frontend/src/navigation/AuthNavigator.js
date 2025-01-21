import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectProfileScreen from '../screens/Profile/SelectProfileScreen';
import CreateProfileScreen from '../screens/Profile/CreateProfileScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SelectProfile" component={SelectProfileScreen} />
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
