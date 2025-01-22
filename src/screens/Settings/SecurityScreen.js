import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SecurityScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [securitySettings, setSecuritySettings] = useState({
    biometricEnabled: true,
    twoFactorEnabled: false,
    autoLockEnabled: true,
    autoLockTime: '5',
    passwordLastChanged: '2024-12-25',
  });

  const handleToggle = (setting) => {
    if (setting === 'twoFactorEnabled') {
      navigation.navigate('TwoFactorSetup');
      return;
    }

    setSecuritySettings({
      ...securitySettings,
      [setting]: !securitySettings[setting],
    });
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const handleAutoLockTimeChange = (time) => {
    setSecuritySettings({
      ...securitySettings,
      autoLockTime: time,
    });
  };

  const renderToggleItem = (title, description, setting, value) => (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={() => handleToggle(setting)}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#2196F3' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.security.authentication')}</Text>
        
        {renderToggleItem(
          t('settings.security.biometric'),
          t('settings.security.biometricDescription'),
          'biometricEnabled',
          securitySettings.biometricEnabled
        )}

        {renderToggleItem(
          t('settings.security.twoFactor'),
          t('settings.security.twoFactorDescription'),
          'twoFactorEnabled',
          securitySettings.twoFactorEnabled
        )}

        <TouchableOpacity
          style={styles.changePasswordButton}
          onPress={handleChangePassword}
        >
          <View style={styles.changePasswordContent}>
            <View>
              <Text style={styles.changePasswordTitle}>
                {t('settings.security.changePassword')}
              </Text>
              <Text style={styles.lastChanged}>
                {t('settings.security.lastChanged', {
                  date: securitySettings.passwordLastChanged,
                })}
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.security.appLock')}</Text>
        
        {renderToggleItem(
          t('settings.security.autoLock'),
          t('settings.security.autoLockDescription'),
          'autoLockEnabled',
          securitySettings.autoLockEnabled
        )}

        {securitySettings.autoLockEnabled && (
          <View style={styles.timeoutSection}>
            <Text style={styles.timeoutLabel}>
              {t('settings.security.autoLockTimeout')}
            </Text>
            <View style={styles.timeoutInputContainer}>
              <TextInput
                style={styles.timeoutInput}
                value={securitySettings.autoLockTime}
                onChangeText={handleAutoLockTimeChange}
                keyboardType="number-pad"
              />
              <Text style={styles.timeoutUnit}>{t('settings.security.minutes')}</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.security.dataProtection')}</Text>
        
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('DataEncryption')}
        >
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.security.encryption')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.security.encryptionDescription')}
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('SecurityAudit')}
        >
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.security.securityAudit')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.security.securityAuditDescription')}
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#666" />
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
  changePasswordButton: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  changePasswordContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changePasswordTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  lastChanged: {
    fontSize: 14,
    color: '#666',
  },
  timeoutSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeoutLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  timeoutInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeoutInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 12,
    width: 80,
    fontSize: 16,
    marginRight: 10,
  },
  timeoutUnit: {
    fontSize: 16,
    color: '#666',
  },
});

export default SecurityScreen;
