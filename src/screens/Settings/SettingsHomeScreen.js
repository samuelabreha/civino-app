import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const settingsSections = [
    {
      title: t('settings.account'),
      items: [
        {
          id: 'profile',
          title: t('settings.profile'),
          icon: 'account',
          type: 'navigation',
          onPress: () => navigation.navigate('Profile'),
        },
        {
          id: 'security',
          title: t('settings.security'),
          icon: 'shield-check',
          type: 'navigation',
          onPress: () => navigation.navigate('Security'),
        },
      ],
    },
    {
      title: t('settings.preferences'),
      items: [
        {
          id: 'language',
          title: t('settings.language'),
          icon: 'translate',
          type: 'navigation',
          onPress: () => navigation.navigate('Language'),
        },
        {
          id: 'notifications',
          title: t('settings.notifications'),
          icon: 'bell',
          type: 'navigation',
          onPress: () => navigation.navigate('Notifications'),
        },
        {
          id: 'appearance',
          title: t('settings.appearance'),
          icon: 'palette',
          type: 'navigation',
          onPress: () => navigation.navigate('Appearance'),
        },
      ],
    },
    {
      title: t('settings.data'),
      items: [
        {
          id: 'sync',
          title: t('settings.sync'),
          icon: 'sync',
          type: 'navigation',
          onPress: () => navigation.navigate('Sync'),
        },
        {
          id: 'backup',
          title: t('settings.backup'),
          icon: 'cloud-upload',
          type: 'navigation',
          onPress: () => navigation.navigate('Backup'),
        },
        {
          id: 'storage',
          title: t('settings.storage'),
          icon: 'folder',
          type: 'navigation',
          onPress: () => navigation.navigate('Storage'),
        },
      ],
    },
    {
      title: t('settings.help'),
      items: [
        {
          id: 'support',
          title: t('settings.support'),
          icon: 'help-circle',
          type: 'navigation',
          onPress: () => navigation.navigate('Support'),
        },
        {
          id: 'about',
          title: t('settings.about'),
          icon: 'information',
          type: 'navigation',
          onPress: () => navigation.navigate('About'),
        },
      ],
    },
  ];

  const renderSettingItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={item.onPress}
    >
      <View style={styles.settingItemLeft}>
        <Icon name={item.icon} size={24} color="#2196F3" />
        <Text style={styles.settingItemTitle}>{item.title}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {settingsSections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionContent}>
            {section.items.map(renderSettingItem)}
          </View>
        </View>
      ))}

      <View style={styles.version}>
        <Text style={styles.versionText}>
          {t('settings.version')} 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemTitle: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  version: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SettingsHomeScreen;
