import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { typography } from '../../styles/theme';

// Langues suisses en premier avec le drapeau suisse
const languages = [
  { id: 'fr-CH', name: 'FR', fullName: 'Suisse Romand', flag: '🇨🇭' },
  { id: 'de-CH', name: 'DE', fullName: 'Schweizerdeutsch', flag: '🇨🇭' },
  { id: 'it-CH', name: 'IT', fullName: 'Svizzero Italiano', flag: '🇨🇭' },
  { id: 'rm-CH', name: 'RM', fullName: 'Rumantsch', flag: '🇨🇭' },
  { id: 'fr', name: 'FR', fullName: 'Français', flag: '🇫🇷' },
  { id: 'en', name: 'EN', fullName: 'English', flag: '🇬🇧' },
  { id: 'de', name: 'DE', fullName: 'Deutsch', flag: '🇩🇪' },
  { id: 'it', name: 'IT', fullName: 'Italiano', flag: '🇮🇹' },
  { id: 'es', name: 'ES', fullName: 'Español', flag: '🇪🇸' },
  { id: 'pt', name: 'PT', fullName: 'Português', flag: '🇵🇹' },
  { id: 'ar', name: 'AR', fullName: 'العربية', flag: '🇸🇦' },
  { id: 'fa', name: 'FA', fullName: 'فارسی', flag: '🇮🇷' }
];

const LanguageSelector = () => {
  // Définir le suisse-romand comme langue par défaut
  const [selectedLanguage, setSelectedLanguage] = useState('fr-CH');
  const [modalVisible, setModalVisible] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  const renderLanguageOption = (lang) => (
    <TouchableOpacity
      key={lang.id}
      style={[
        styles.languageOption,
        selectedLanguage === lang.id && styles.selectedOption,
        // Mettre en évidence les langues suisses
        lang.id.endsWith('-CH') && styles.swissOption
      ]}
      onPress={() => {
        setSelectedLanguage(lang.id);
        setModalVisible(false);
      }}
    >
      <Text style={styles.flag}>{lang.flag}</Text>
      <Text style={[
        styles.languageName,
        lang.id.endsWith('-CH') && styles.swissText
      ]}>{lang.fullName}</Text>
      <Text style={styles.languageCode}>{lang.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity
        style={styles.switchLanguage}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.content}>
          <Text style={styles.flag}>{currentLanguage.flag}</Text>
          <Text style={styles.languageCode}>{currentLanguage.name}</Text>
        </View>
        <View style={styles.arrowDown} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choisir la langue</Text>
            </View>
            
            {/* Section Suisse */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Suisse 🇨🇭</Text>
              {languages.filter(lang => lang.id.endsWith('-CH')).map(renderLanguageOption)}
            </View>
            
            {/* Autres langues */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Autres langues</Text>
              {languages.filter(lang => !lang.id.endsWith('-CH')).map(renderLanguageOption)}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  switchLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flag: {
    fontSize: 22, 
    width: 32,
    height: 32,
    textAlign: 'center',
    lineHeight: 32,
    backgroundColor: '#F5F5F5',
    borderRadius: 16, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', 
  },
  languageCode: {
    ...typography.button,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  arrowDown: {
    width: 20,
    height: 20,
    marginLeft: 4,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    transform: [{ rotate: '45deg' }, { translateY: -4 }],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '80%',
    maxHeight: '80%',
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    padding: 16,
  },
  modalTitle: {
    ...typography.h6,
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    ...typography.subtitle1,
    color: '#666',
    marginBottom: 8,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  selectedOption: {
    backgroundColor: '#F5F5F5',
  },
  swissOption: {
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
  },
  languageName: {
    ...typography.body1,
    flex: 1,
  },
  swissText: {
    fontWeight: '600',
  }
});

export default LanguageSelector;
