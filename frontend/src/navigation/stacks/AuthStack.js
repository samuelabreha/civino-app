import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Écrans d'authentification
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';
import SelectRoleScreen from '../../screens/Auth/SelectRoleScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="SelectRole" component={SelectRoleScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
