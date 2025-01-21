import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '../components/common/Icon';
import { theme } from '../theme';
import { ROUTES, SCREEN_OPTIONS } from '../constants/routes';
import { LAYOUT } from '../constants/layout';

// Test de GitHub Desktop - Configuration réussie
// Navigation configuration for CIVINO app
// Updated January 2025

// Screens
import HomeScreen from '../screens/Home';
import ChildScreen from '../screens/Child';
import CommunityScreen from '../screens/Community';
import ContractScreen from '../screens/Contract';
import SchoolScreen from '../screens/School';
import TeacherScreen from '../screens/Teacher';
import ReferenceScreen from '../screens/Reference';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getTabBarIcon = (route, focused) => {
  const icons = {
    [ROUTES.HOME]: 'home',
    [ROUTES.CHILD]: 'account-child',
    [ROUTES.COMMUNITY]: 'account-group',
    [ROUTES.CONTRACT]: 'file-document',
    [ROUTES.SCHOOL]: 'school',
    [ROUTES.TEACHER]: 'teach',
    [ROUTES.REFERENCE]: 'book-open',
  };

  return (
    <Icon
      name={icons[route.name]}
      size={LAYOUT.bottomTab.iconSize}
      color={focused ? theme.colors.primary.main : theme.colors.text.secondary}
    />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
        tabBarActiveTintColor: theme.colors.primary.main,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarStyle: {
          height: LAYOUT.bottomTab.height,
          backgroundColor: theme.colors.background.paper,
          borderTopColor: theme.colors.divider,
          paddingBottom: theme.spacing.sm,
          paddingTop: theme.spacing.xs,
        },
        tabBarLabelStyle: {
          fontSize: LAYOUT.bottomTab.labelSize,
          fontFamily: theme.typography.fontFamily.primary,
          fontWeight: '500',
        },
        ...SCREEN_OPTIONS,
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CHILD} component={ChildScreen} />
      <Tab.Screen name={ROUTES.COMMUNITY} component={CommunityScreen} />
      <Tab.Screen name={ROUTES.CONTRACT} component={ContractScreen} />
      <Tab.Screen name={ROUTES.SCHOOL} component={SchoolScreen} />
      <Tab.Screen name={ROUTES.TEACHER} component={TeacherScreen} />
      <Tab.Screen name={ROUTES.REFERENCE} component={ReferenceScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name={ROUTES.MAIN} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
