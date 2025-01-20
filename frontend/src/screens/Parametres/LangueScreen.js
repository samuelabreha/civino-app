import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';

const LangueScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    // Implémenter la logique de changement de langue
  };

  return (
    <View style={styles.container}>
      <Header title="Langue / Language" />
      <ScrollView style={styles.content}>
        <Text style={styles.description}>
          Sélectionnez votre langue préférée pour l'application
        </Text>

        <View style={styles.languageList}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.code}
              style={[
                styles.languageOption,
                selectedLanguage === language.code && styles.selectedLanguage,
              ]}
              onPress={() => handleLanguageSelect(language.code)}
            >
              <Text style={styles.languageFlag}>{language.flag}</Text>
              <Text
                style={[
                  styles.languageName,
                  selectedLanguage === language.code && styles.selectedLanguageText,
                ]}
              >
                {language.name}
              </Text>
              {selectedLanguage === language.code && (
                <View style={styles.checkmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Note</Text>
          <Text style={styles.infoText}>
            Le changement de langue nécessite un redémarrage de l'application pour prendre effet.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  description: {
    ...typography.body,
    color: colors.gray,
    marginBottom: 24,
  },
  languageList: {
    marginBottom: 24,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedLanguage: {
    backgroundColor: colors.primary,
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 16,
  },
  languageName: {
    ...typography.body,
    flex: 1,
  },
  selectedLanguageText: {
    color: colors.white,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    ...typography.body,
    color: colors.primary,
  },
  infoSection: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  infoTitle: {
    ...typography.h3,
    marginBottom: 8,
  },
  infoText: {
    ...typography.body,
    color: colors.gray,
  },
});

export default LangueScreen;
