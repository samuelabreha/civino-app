import React, { useState, useEffect } from 'react';
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

const SyncScreen = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState({
    autoSync: true,
    syncOnWifiOnly: true,
    syncInterval: '30',
    syncPhotos: true,
    syncDocuments: true,
    syncContacts: true,
  });

  const [syncStatus, setSyncStatus] = useState({
    lastSync: '2024-01-21 10:30',
    isSyncing: false,
    progress: 0,
    error: null,
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  const handleSync = () => {
    setSyncStatus({
      ...syncStatus,
      isSyncing: true,
      progress: 0,
      error: null,
    });

    // Simulate sync progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      if (progress >= 1) {
        clearInterval(interval);
        setSyncStatus({
          lastSync: new Date().toLocaleString(),
          isSyncing: false,
          progress: 1,
          error: null,
        });
      } else {
        setSyncStatus((prev) => ({
          ...prev,
          progress,
        }));
      }
    }, 500);
  };

  const renderSyncProgress = () => {
    if (!syncStatus.isSyncing) return null;

    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${syncStatus.progress * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {Math.round(syncStatus.progress * 100)}%
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.syncStatus}>
          <Text style={styles.lastSyncText}>
            {t('settings.sync.lastSync')}: {syncStatus.lastSync}
          </Text>
          {syncStatus.error && (
            <Text style={styles.errorText}>{syncStatus.error}</Text>
          )}
        </View>
        <TouchableOpacity
          style={[styles.syncButton, syncStatus.isSyncing && styles.syncingButton]}
          onPress={handleSync}
          disabled={syncStatus.isSyncing}
        >
          {syncStatus.isSyncing ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Icon name="sync" size={24} color="#FFFFFF" />
              <Text style={styles.syncButtonText}>
                {t('settings.sync.syncNow')}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {renderSyncProgress()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.sync.settings')}</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>{t('settings.sync.autoSync')}</Text>
            <Text style={styles.settingDescription}>
              {t('settings.sync.autoSyncDescription')}
            </Text>
          </View>
          <Switch
            value={settings.autoSync}
            onValueChange={() => handleToggle('autoSync')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.autoSync ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        {settings.autoSync && (
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>
                {t('settings.sync.syncOnWifiOnly')}
              </Text>
              <Text style={styles.settingDescription}>
                {t('settings.sync.syncOnWifiOnlyDescription')}
              </Text>
            </View>
            <Switch
              value={settings.syncOnWifiOnly}
              onValueChange={() => handleToggle('syncOnWifiOnly')}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings.syncOnWifiOnly ? '#2196F3' : '#f4f3f4'}
            />
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.sync.dataTypes')}</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.sync.syncPhotos')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.sync.syncPhotosDescription')}
            </Text>
          </View>
          <Switch
            value={settings.syncPhotos}
            onValueChange={() => handleToggle('syncPhotos')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.syncPhotos ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.sync.syncDocuments')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.sync.syncDocumentsDescription')}
            </Text>
          </View>
          <Switch
            value={settings.syncDocuments}
            onValueChange={() => handleToggle('syncDocuments')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.syncDocuments ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.sync.syncContacts')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.sync.syncContactsDescription')}
            </Text>
          </View>
          <Switch
            value={settings.syncContacts}
            onValueChange={() => handleToggle('syncContacts')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.syncContacts ? '#2196F3' : '#f4f3f4'}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>
          {t('settings.sync.resetSync')}
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
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  syncStatus: {
    marginBottom: 15,
  },
  lastSyncText: {
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    fontSize: 14,
    color: '#F44336',
    marginTop: 5,
  },
  syncButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  syncingButton: {
    backgroundColor: '#81b0ff',
  },
  syncButtonText: {
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

export default SyncScreen;
