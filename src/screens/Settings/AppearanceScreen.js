import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppearanceScreen = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    colorScheme: 'blue',
    useSystemTheme: true,
    animations: true,
    reduceMotion: false,
  });

  const themes = [
    { id: 'light', name: t('settings.appearance.light'), icon: 'white-balance-sunny' },
    { id: 'dark', name: t('settings.appearance.dark'), icon: 'moon-waning-crescent' },
    { id: 'auto', name: t('settings.appearance.auto'), icon: 'theme-light-dark' },
  ];

  const fontSizes = [
    { id: 'small', name: t('settings.appearance.small'), scale: 0.8 },
    { id: 'medium', name: t('settings.appearance.medium'), scale: 1 },
    { id: 'large', name: t('settings.appearance.large'), scale: 1.2 },
    { id: 'xlarge', name: t('settings.appearance.xlarge'), scale: 1.4 },
  ];

  const colorSchemes = [
    { id: 'blue', name: t('settings.appearance.blue'), color: '#2196F3' },
    { id: 'green', name: t('settings.appearance.green'), color: '#4CAF50' },
    { id: 'purple', name: t('settings.appearance.purple'), color: '#9C27B0' },
    { id: 'orange', name: t('settings.appearance.orange'), color: '#FF9800' },
    { id: 'red', name: t('settings.appearance.red'), color: '#F44336' },
  ];

  const handleThemeChange = (theme) => {
    setSettings({ ...settings, theme });
  };

  const handleFontSizeChange = (fontSize) => {
    setSettings({ ...settings, fontSize });
  };

  const handleColorSchemeChange = (colorScheme) => {
    setSettings({ ...settings, colorScheme });
  };

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.appearance.theme')}</Text>
        <View style={styles.themeContainer}>
          {themes.map((theme) => (
            <TouchableOpacity
              key={theme.id}
              style={[
                styles.themeOption,
                settings.theme === theme.id && styles.selectedTheme,
              ]}
              onPress={() => handleThemeChange(theme.id)}
            >
              <Icon
                name={theme.icon}
                size={24}
                color={settings.theme === theme.id ? '#2196F3' : '#666'}
              />
              <Text
                style={[
                  styles.themeText,
                  settings.theme === theme.id && styles.selectedThemeText,
                ]}
              >
                {theme.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.appearance.fontSize')}</Text>
        <View style={styles.fontSizeContainer}>
          {fontSizes.map((size) => (
            <TouchableOpacity
              key={size.id}
              style={[
                styles.fontSizeOption,
                settings.fontSize === size.id && styles.selectedFontSize,
              ]}
              onPress={() => handleFontSizeChange(size.id)}
            >
              <Text
                style={[
                  styles.fontSizeText,
                  { fontSize: 16 * size.scale },
                  settings.fontSize === size.id && styles.selectedFontSizeText,
                ]}
              >
                {size.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.appearance.colorScheme')}</Text>
        <View style={styles.colorSchemeContainer}>
          {colorSchemes.map((scheme) => (
            <TouchableOpacity
              key={scheme.id}
              style={[
                styles.colorSchemeOption,
                { backgroundColor: scheme.color },
                settings.colorScheme === scheme.id && styles.selectedColorScheme,
              ]}
              onPress={() => handleColorSchemeChange(scheme.id)}
            >
              {settings.colorScheme === scheme.id && (
                <Icon name="check" size={20} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.appearance.preferences')}</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.appearance.useSystemTheme')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.appearance.useSystemThemeDescription')}
            </Text>
          </View>
          <Switch
            value={settings.useSystemTheme}
            onValueChange={() => handleToggle('useSystemTheme')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.useSystemTheme ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.appearance.animations')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.appearance.animationsDescription')}
            </Text>
          </View>
          <Switch
            value={settings.animations}
            onValueChange={() => handleToggle('animations')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.animations ? '#2196F3' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              {t('settings.appearance.reduceMotion')}
            </Text>
            <Text style={styles.settingDescription}>
              {t('settings.appearance.reduceMotionDescription')}
            </Text>
          </View>
          <Switch
            value={settings.reduceMotion}
            onValueChange={() => handleToggle('reduceMotion')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.reduceMotion ? '#2196F3' : '#f4f3f4'}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>
          {t('settings.appearance.resetDefaults')}
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
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  themeOption: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 5,
  },
  selectedTheme: {
    backgroundColor: '#E3F2FD',
  },
  themeText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  selectedThemeText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  fontSizeContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  fontSizeOption: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  selectedFontSize: {
    backgroundColor: '#E3F2FD',
  },
  fontSizeText: {
    textAlign: 'center',
    color: '#666',
  },
  selectedFontSizeText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  colorSchemeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  colorSchemeOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedColorScheme: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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

export default AppearanceScreen;
