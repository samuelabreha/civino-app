import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationsScreen = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState({
    pushEnabled: true,
    emailEnabled: true,
    notifications: {
      messages: true,
      reminders: true,
      updates: true,
      news: false,
    },
    schedules: {
      daily: true,
      weekly: false,
      monthly: true,
    },
    quiet: {
      enabled: false,
      start: '22:00',
      end: '07:00',
    },
  });

  const handleToggle = (category, setting) => {
    if (category) {
      setSettings({
        ...settings,
        [category]: {
          ...settings[category],
          [setting]: !settings[category][setting],
        },
      });
    } else {
      setSettings({
        ...settings,
        [setting]: !settings[setting],
      });
    }
  };

  const renderToggleItem = (title, description, category, setting, value) => (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={() => handleToggle(category, setting)}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#2196F3' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.notifications.general')}</Text>
        
        {renderToggleItem(
          t('settings.notifications.push'),
          t('settings.notifications.pushDescription'),
          null,
          'pushEnabled',
          settings.pushEnabled
        )}

        {renderToggleItem(
          t('settings.notifications.email'),
          t('settings.notifications.emailDescription'),
          null,
          'emailEnabled',
          settings.emailEnabled
        )}
      </View>

      {settings.pushEnabled && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t('settings.notifications.categories')}
          </Text>
          
          {renderToggleItem(
            t('settings.notifications.messages'),
            t('settings.notifications.messagesDescription'),
            'notifications',
            'messages',
            settings.notifications.messages
          )}

          {renderToggleItem(
            t('settings.notifications.reminders'),
            t('settings.notifications.remindersDescription'),
            'notifications',
            'reminders',
            settings.notifications.reminders
          )}

          {renderToggleItem(
            t('settings.notifications.updates'),
            t('settings.notifications.updatesDescription'),
            'notifications',
            'updates',
            settings.notifications.updates
          )}

          {renderToggleItem(
            t('settings.notifications.news'),
            t('settings.notifications.newsDescription'),
            'notifications',
            'news',
            settings.notifications.news
          )}
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {t('settings.notifications.schedules')}
        </Text>
        
        {renderToggleItem(
          t('settings.notifications.daily'),
          t('settings.notifications.dailyDescription'),
          'schedules',
          'daily',
          settings.schedules.daily
        )}

        {renderToggleItem(
          t('settings.notifications.weekly'),
          t('settings.notifications.weeklyDescription'),
          'schedules',
          'weekly',
          settings.schedules.weekly
        )}

        {renderToggleItem(
          t('settings.notifications.monthly'),
          t('settings.notifications.monthlyDescription'),
          'schedules',
          'monthly',
          settings.schedules.monthly
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {t('settings.notifications.quietHours')}
        </Text>
        
        {renderToggleItem(
          t('settings.notifications.quietHours'),
          t('settings.notifications.quietHoursDescription'),
          'quiet',
          'enabled',
          settings.quiet.enabled
        )}

        {settings.quiet.enabled && (
          <View style={styles.quietHours}>
            <TouchableOpacity style={styles.timeButton}>
              <Text style={styles.timeButtonText}>
                {t('settings.notifications.from')}: {settings.quiet.start}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeButton}>
              <Text style={styles.timeButtonText}>
                {t('settings.notifications.to')}: {settings.quiet.end}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>
          {t('settings.notifications.resetDefaults')}
        </Text>
      </TouchableOpacity>
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
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  quietHours: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    flex: 0.45,
  },
  timeButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  resetButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    color: '#666',
  },
});

export default NotificationsScreen;
