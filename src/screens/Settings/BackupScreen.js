import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BackupScreen = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState({
    autoBackup: true,
    backupOnWifiOnly: true,
    backupFrequency: 'daily',
    includePhotos: true,
    includeDocuments: true,
    includeSettings: true,
  });

  const [backupStatus, setBackupStatus] = useState({
    lastBackup: '2024-01-21 10:30',
    nextBackup: '2024-01-22 10:30',
    isBackingUp: false,
    progress: 0,
    error: null,
  });

  const backupFrequencies = [
    { id: 'daily', name: t('settings.backup.daily') },
    { id: 'weekly', name: t('settings.backup.weekly') },
    { id: 'monthly', name: t('settings.backup.monthly') },
  ];

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  const handleBackupFrequencyChange = (frequency) => {
    setSettings({
      ...settings,
      backupFrequency: frequency,
    });
  };

  const handleBackupNow = () => {
    setBackupStatus({
      ...backupStatus,
      isBackingUp: true,
      progress: 0,
      error: null,
    });

    // Simulate backup progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      if (progress >= 1) {
        clearInterval(interval);
        setBackupStatus({
          lastBackup: new Date().toLocaleString(),
          nextBackup: '2024-01-22 10:30',
          isBackingUp: false,
          progress: 1,
          error: null,
        });
      } else {
        setBackupStatus((prev) => ({
          ...prev,
          progress,
        }));
      }
    }, 500);
  };

  const renderBackupProgress = () => {
    if (!backupStatus.isBackingUp) return null;

    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${backupStatus.progress * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {Math.round(backupStatus.progress * 100)}%
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backupStatus}>
          <Text style={styles.statusText}>
            {t('settings.backup.lastBackup')}: {backupStatus.lastBackup}
          </Text>
          <Text style={styles.statusText}>
            {t('settings.backup.nextBackup')}: {backupStatus.nextBackup}
          </Text>
          {backupStatus.error && (
            <Text style={styles.errorText}>{backupStatus.error}</Text>
          )}
        </View>
        <TouchableOpacity
          style={[styles.backupButton, backupStatus.isBackingUp && styles.backingUpButton]}
          onPress={handleBackupNow}
          disabled={backupStatus.isBackingUp}
        >
          {backupStatus.isBackingUp ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Icon name="cloud-upload" size={24} color="#FFFFFF" />
              <Text style={styles.backupButtonText}>
                {t('settings.backup.backupNow')}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {renderBackupProgress()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.backup.settings')}</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>{t('settings.backup.autoBackup')}</Text>
            <Text style={styles.settingDescription}>
              {t('settings.backup.autoBackupDescription')}
            </Text>
          </View>
          <Switch
            value={settings.autoBackup}
            onValueChange={() => handleToggle('autoBackup')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.autoBackup ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        {settings.autoBackup && (
          <>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>
                  {t('settings.backup.backupOnWifiOnly')}
                </Text>
                <Text style={styles.settingDescription}>
                  {t('settings.backup.backupOnWifiOnlyDescription')}
                </Text>
              </View>
              <Switch
                value={settings.backupOnWifiOnly}
                onValueChange={() => handleToggle('backupOnWifiOnly')}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={settings.backupOnWifiOnly ? '#2196F3' : '#f4f3f4'}
              />
            </View>

            <View style={styles.frequencySection}>
              <Text style={styles.frequencyTitle}>
                {t('settings.backup.backupFrequency')}
              </Text>
              <View style={styles.frequencyOptions}>
                {backupFrequencies.map((frequency) => (
                  <TouchableOpacity
                    key={frequency.id}
                    style={[
                      styles.frequencyOption,
                      settings.backupFrequency === frequency.id &&
                        styles.selectedFrequency,
                    ]}
                    onPress={() => handleBackupFrequencyChange(frequency.id)}
                  >
                    <Text
                      style={[
                        styles.frequencyText,
                        settings.backupFrequency === frequency.id &&
                          styles.selectedFrequencyText,
                      ]}
                    >
                      {frequency.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.backup.dataTypes')}</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.backup.includePhotos')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.backup.includePhotosDescription')}
            </Text>
          </View>
          <Switch
            value={settings.includePhotos}
            onValueChange={() => handleToggle('includePhotos')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.includePhotos ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.backup.includeDocuments')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.backup.includeDocumentsDescription')}
            </Text>
          </View>
          <Switch
            value={settings.includeDocuments}
            onValueChange={() => handleToggle('includeDocuments')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.includeDocuments ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.backup.includeSettings')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.backup.includeSettingsDescription')}
            </Text>
          </View>
          <Switch
            value={settings.includeSettings}
            onValueChange={() => handleToggle('includeSettings')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.includeSettings ? '#2196F3' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.backup.management')}</Text>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="history" size={24} color="#666" />
          <Text style={styles.actionButtonText}>
            {t('settings.backup.viewHistory')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cloud-download" size={24} color="#666" />
          <Text style={styles.actionButtonText}>
            {t('settings.backup.restore')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="delete" size={24} color="#666" />
          <Text style={styles.actionButtonText}>
            {t('settings.backup.deleteBackups')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backupStatus: {
    marginBottom: 15,
  },
  statusText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#F44336',
    marginTop: 5,
  },
  backupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  backingUpButton: {
    backgroundColor: '#81b0ff',
  },
  backupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  progressContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    width: 45,
    textAlign: 'right',
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
  frequencySection: {
    padding: 20,
  },
  frequencyTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  frequencyOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frequencyOption: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedFrequency: {
    backgroundColor: '#E3F2FD',
  },
  frequencyText: {
    fontSize: 14,
    color: '#666',
  },
  selectedFrequencyText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});

export default BackupScreen;
