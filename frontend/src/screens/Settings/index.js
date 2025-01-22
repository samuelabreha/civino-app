import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Dropdown } from '../../components/Dropdown';
import { Switch } from '../../components/Switch';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

const Settings = () => {
  const { user, logout } = useAuth();
  const [language, setLanguage] = useState('fr');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reports: true
  });
  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const languages = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];

  const handleLanguageChange = async (value) => {
    setLanguage(value);
    try {
      await api.put('/settings/language', { language: value });
    } catch (error) {
      console.error('Error updating language:', error);
    }
  };

  const handleNotificationToggle = async (type) => {
    const newValue = !notifications[type];
    setNotifications(prev => ({
      ...prev,
      [type]: newValue
    }));
    try {
      await api.put('/settings/notifications', {
        type,
        enabled: newValue
      });
    } catch (error) {
      console.error('Error updating notifications:', error);
    }
  };

  const handleInfoUpdate = async () => {
    try {
      await api.put('/settings/user-info', userInfo);
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Dropdown
          label="Language"
          items={languages}
          value={language}
          onValueChange={handleLanguageChange}
        />
      </View>

      <View style={styles.section}>
        <Switch
          label="Email Notifications"
          value={notifications.email}
          onValueChange={() => handleNotificationToggle('email')}
        />
        <Switch
          label="Push Notifications"
          value={notifications.push}
          onValueChange={() => handleNotificationToggle('push')}
        />
        <Switch
          label="Report Notifications"
          value={notifications.reports}
          onValueChange={() => handleNotificationToggle('reports')}
        />
      </View>

      <View style={styles.section}>
        <TextInput
          label="Name"
          value={userInfo.name}
          onChangeText={(value) => setUserInfo(prev => ({ ...prev, name: value }))}
        />
        <TextInput
          label="Email"
          value={userInfo.email}
          onChangeText={(value) => setUserInfo(prev => ({ ...prev, email: value }))}
          keyboardType="email-address"
        />
        <Button
          title="Update Information"
          onPress={handleInfoUpdate}
        />
      </View>

      <Button
        title="Logout"
        onPress={handleLogout}
        style={styles.logoutButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    margin: 10,
  },
});

export default Settings;
