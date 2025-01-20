import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Plus_Jakarta_Sans-Regular': require('./src/assets/Font/Plus_Jakarta_Sans/PlusJakartaSans-Regular.ttf'),
    'Plus_Jakarta_Sans-Medium': require('./src/assets/Font/Plus_Jakarta_Sans/PlusJakartaSans-Medium.ttf'),
    'Plus_Jakarta_Sans-SemiBold': require('./src/assets/Font/Plus_Jakarta_Sans/PlusJakartaSans-SemiBold.ttf'),
    'Plus_Jakarta_Sans-Bold': require('./src/assets/Font/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf'),
    'Plus_Jakarta_Sans-ExtraBold': require('./src/assets/Font/Plus_Jakarta_Sans/PlusJakartaSans-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={theme.colors.background.default} />
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
