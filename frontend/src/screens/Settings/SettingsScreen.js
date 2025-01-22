import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const settingsOptions = [
    {
      id: 'language',
      title: 'Langue',
      icon: icons.general.globe,
      value: 'Français',
      action: () => navigation.navigate('LanguageSettings'),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: icons.general.notification,
      value: notifications,
      isToggle: true,
      action: () => setNotifications(!notifications),
    },
    {
      id: 'darkMode',
      title: 'Mode sombre',
      icon: icons.general.eyeOff,
      value: darkMode,
      isToggle: true,
      action: () => setDarkMode(!darkMode),
    },
    {
      id: 'account',
      title: 'Compte',
      icon: icons.general.user,
      action: () => navigation.navigate('AccountSettings'),
    },
  ];

  const renderSettingItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={item.action}
    >
      <View style={styles.settingLeft}>
        <Image source={item.icon} style={styles.settingIcon} />
        <Text style={styles.settingTitle}>{item.title}</Text>
      </View>
      
      <View style={styles.settingRight}>
        {item.isToggle ? (
          <Switch
            value={item.value}
            onValueChange={item.action}
            trackColor={{ false: '#767577', true: '#2196F3' }}
            thumbColor={item.value ? '#fff' : '#f4f3f4'}
          />
        ) : (
          <>
            {item.value && (
              <Text style={styles.settingValue}>{item.value}</Text>
            )}
            <Image 
              source={icons.general.arrowCircleRight} 
              style={styles.arrowIcon}
            />
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.general.settings} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Paramètres</Text>
      </View>

      <View style={styles.settingsList}>
        {settingsOptions.map(renderSettingItem)}
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Image 
          source={icons.general.export} 
          style={[styles.settingIcon, styles.logoutIcon]} 
        />
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: '#2196F3',
  },
  headerTitle: {
    ...typography.h6,
  },
  settingsList: {
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 1,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: '#757575',
  },
  settingTitle: {
    ...typography.body1,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    ...typography.body2,
    color: '#757575',
    marginRight: 8,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#757575',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  logoutIcon: {
    tintColor: '#F44336',
  },
  logoutText: {
    ...typography.button,
    color: '#F44336',
  },
});

export default SettingsScreen;
