import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import ContactsHomeScreen from '../screens/Contacts/ContactsHomeScreen';
import ContactListScreen from '../screens/Contacts/ContactListScreen';
import CreateContactScreen from '../screens/Contacts/CreateContactScreen';
import EditContactScreen from '../screens/Contacts/EditContactScreen';
import ContactDetailsScreen from '../screens/Contacts/ContactDetailsScreen';

const Stack = createStackNavigator();

const ContactsNavigator = () => {
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
        name="ContactsHome" 
        component={ContactsHomeScreen}
        options={{ title: 'Contacts' }}
      />
      <Stack.Screen 
        name="ContactList" 
        component={ContactListScreen}
        options={{ title: 'Liste des Contacts' }}
      />
      <Stack.Screen 
        name="CreateContact" 
        component={CreateContactScreen}
        options={{ title: 'Ajouter un Contact' }}
      />
      <Stack.Screen 
        name="EditContact" 
        component={EditContactScreen}
        options={{ title: 'Modifier le Contact' }}
      />
      <Stack.Screen 
        name="ContactDetails" 
        component={ContactDetailsScreen}
        options={{ title: 'Détails du Contact' }}
      />
    </Stack.Navigator>
  );
};

export default ContactsNavigator;
