import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationList } from '../../components/notifications/NotificationList';
import { NotificationSettings } from '../../components/notifications/NotificationSettings';

const Stack = createStackNavigator();

export const NotificationsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationList"
        component={NotificationList}
        options={{
          title: 'Notifications',
        }}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{
          title: 'Paramètres des notifications',
        }}
      />
    </Stack.Navigator>
  );
};
