import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotifications } from '../../hooks/useNotifications';

const NOTIFICATION_SETTINGS_KEY = '@notification_settings';

const defaultSettings = {
  evaluationReminders: true,
  documentNotifications: true,
  progressUpdates: true,
  sound: true,
  vibration: true,
  dailyDigest: false,
  quietHours: {
    enabled: false,
    start: '22:00',
    end: '07:00',
  },
};

export const NotificationSettings = () => {
  const [settings, setSettings] = useState(defaultSettings);
  const { permission, cancelAllNotifications } = useNotifications();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem(NOTIFICATION_SETTINGS_KEY);
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Error loading notification settings:', error);
    }
  };

  const saveSettings = async (newSettings) => {
    try {
      await AsyncStorage.setItem(
        NOTIFICATION_SETTINGS_KEY,
        JSON.stringify(newSettings)
      );
      setSettings(newSettings);
    } catch (error) {
      console.error('Error saving notification settings:', error);
      Alert.alert('Erreur', 'Impossible de sauvegarder les paramètres');
    }
  };

  const toggleSetting = (key) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };
    saveSettings(newSettings);
  };

  const toggleQuietHours = () => {
    const newSettings = {
      ...settings,
      quietHours: {
        ...settings.quietHours,
        enabled: !settings.quietHours.enabled,
      },
    };
    saveSettings(newSettings);
  };

  const resetSettings = async () => {
    Alert.alert(
      'Réinitialiser les paramètres',
      'Voulez-vous vraiment réinitialiser tous les paramètres de notification ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Réinitialiser',
          style: 'destructive',
          onPress: async () => {
            await cancelAllNotifications();
            saveSettings(defaultSettings);
          },
        },
      ]
    );
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.warningText}>
          Les notifications ne sont pas autorisées. Veuillez les activer dans les paramètres de votre appareil.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications générales</Text>
        
        <View style={styles.settingItem}>
          <Text>Rappels d'évaluation</Text>
          <Switch
            value={settings.evaluationReminders}
            onValueChange={() => toggleSetting('evaluationReminders')}
          />
        </View>

        <View style={styles.settingItem}>
          <Text>Notifications de documents</Text>
          <Switch
            value={settings.documentNotifications}
            onValueChange={() => toggleSetting('documentNotifications')}
          />
        </View>

        <View style={styles.settingItem}>
          <Text>Mises à jour de progression</Text>
          <Switch
            value={settings.progressUpdates}
            onValueChange={() => toggleSetting('progressUpdates')}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paramètres sonores</Text>
        
        <View style={styles.settingItem}>
          <Text>Son</Text>
          <Switch
            value={settings.sound}
            onValueChange={() => toggleSetting('sound')}
          />
        </View>

        <View style={styles.settingItem}>
          <Text>Vibration</Text>
          <Switch
            value={settings.vibration}
            onValueChange={() => toggleSetting('vibration')}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paramètres avancés</Text>
        
        <View style={styles.settingItem}>
          <Text>Résumé quotidien</Text>
          <Switch
            value={settings.dailyDigest}
            onValueChange={() => toggleSetting('dailyDigest')}
          />
        </View>

        <View style={styles.settingItem}>
          <Text>Mode silencieux</Text>
          <Switch
            value={settings.quietHours.enabled}
            onValueChange={toggleQuietHours}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetSettings}
      >
        <Text style={styles.resetButtonText}>
          Réinitialiser les paramètres
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  resetButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  warningText: {
    margin: 16,
    color: '#ff4444',
    textAlign: 'center',
  },
});
