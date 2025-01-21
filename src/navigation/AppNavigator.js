import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

// Auth Screens
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ProfileSelectionScreen from '../screens/Auth/ProfileSelectionScreen';

// Main Screens
import HomeScreen from '../screens/Main/HomeScreen';
import QuestionnairesScreen from '../screens/Main/QuestionnairesScreen';
import QuestionnaireDetailScreen from '../screens/Main/QuestionnaireDetailScreen';
import ContractsScreen from '../screens/Main/ContractsScreen';
import ContractDetailScreen from '../screens/Main/ContractDetailScreen';
import CalendarScreen from '../screens/Main/CalendarScreen';
import DocumentsScreen from '../screens/Main/DocumentsScreen';
import StatisticsScreen from '../screens/Main/StatisticsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import NotificationsScreen from '../screens/Main/NotificationsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const { t } = useTranslation();
  const userRole = useSelector(state => state.auth.user?.role);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Questionnaires':
              iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
              break;
            case 'Contracts':
              iconName = focused ? 'file-document' : 'file-document-outline';
              break;
            case 'Calendar':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Documents':
              iconName = focused ? 'folder' : 'folder-outline';
              break;
            case 'Statistics':
              iconName = focused ? 'chart-bar' : 'chart-bar-outline';
              break;
            case 'Profile':
              iconName = focused ? 'account' : 'account-outline';
              break;
            default:
              iconName = 'circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: t('navigation.home') }} 
      />
      <Tab.Screen 
        name="Questionnaires" 
        component={QuestionnairesScreen} 
        options={{ title: t('navigation.questionnaires') }} 
      />
      {['student', 'teacher', 'parent'].includes(userRole) && (
        <Tab.Screen 
          name="Contracts" 
          component={ContractsScreen} 
          options={{ title: t('navigation.contracts') }} 
        />
      )}
      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{ title: t('navigation.calendar') }} 
      />
      <Tab.Screen 
        name="Documents" 
        component={DocumentsScreen} 
        options={{ title: t('navigation.documents') }} 
      />
      {['teacher', 'admin', 'monitor'].includes(userRole) && (
        <Tab.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
          options={{ title: t('navigation.statistics') }} 
        />
      )}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: t('navigation.profile') }} 
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated ? (
          // Auth Stack
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ProfileSelection" component={ProfileSelectionScreen} />
          </Stack.Group>
        ) : (
          // Main Stack
          <Stack.Group>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen 
              name="QuestionnaireDetail" 
              component={QuestionnaireDetailScreen}
              options={{ headerShown: true }} 
            />
            <Stack.Screen 
              name="ContractDetail" 
              component={ContractDetailScreen}
              options={{ headerShown: true }} 
            />
            <Stack.Screen 
              name="Notifications" 
              component={NotificationsScreen}
              options={{ headerShown: true }} 
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
