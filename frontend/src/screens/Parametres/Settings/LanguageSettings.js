import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';

const languages = [
  { id: 'fr', name: 'Français', flag: '🇫🇷' },
  { id: 'en', name: 'English', flag: '🇬🇧' },
  { id: 'es', name: 'Español', flag: '🇪🇸' },
  { id: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { id: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const LanguageSettings = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        selectedLanguage === item.id && styles.selectedLanguage,
      ]}
      onPress={() => setSelectedLanguage(item.id)}
    >
      <View style={styles.languageInfo}>
        <Text style={styles.languageFlag}>{item.flag}</Text>
        <Text style={styles.languageName}>{item.name}</Text>
      </View>
      {selectedLanguage === item.id && (
        <Image 
          source={icons.general.checklistRectangle} 
          style={styles.checkIcon} 
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.general.arrowBack} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Langue</Text>
      </View>

      <Text style={styles.description}>
        Sélectionnez votre langue préférée pour l'application
      </Text>

      <FlatList
        data={languages}
        renderItem={renderLanguageItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.languageList}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.saveButtonText}>Enregistrer</Text>
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
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#2196F3',
  },
  headerTitle: {
    ...typography.h6,
  },
  description: {
    ...typography.body1,
    color: '#757575',
    padding: 20,
  },
  languageList: {
    padding: 20,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedLanguage: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  languageName: {
    ...typography.body1,
  },
  checkIcon: {
    width: 20,
    height: 20,
    tintColor: '#2196F3',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    ...typography.button,
    color: '#FFF',
  },
});

export default LanguageSettings;
