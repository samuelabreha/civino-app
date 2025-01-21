import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LanguageSelectionScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const languages = [
    {
      id: 'fr',
      name: 'Français',
      nativeName: 'Français',
      flag: '🇫🇷',
      isDefault: true
    },
    {
      id: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇬🇧'
    },
    {
      id: 'de',
      name: 'Allemand',
      nativeName: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      id: 'it',
      name: 'Italien',
      nativeName: 'Italiano',
      flag: '🇮🇹'
    }
  ];

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
    // Ici, nous ajouterions la logique pour changer la langue de l'application
  };

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        selectedLanguage === item.id && styles.languageItemSelected
      ]}
      onPress={() => handleLanguageSelect(item.id)}
    >
      <View style={styles.languageContent}>
        <Text style={styles.flagText}>{item.flag}</Text>
        <View style={styles.languageInfo}>
          <Text style={styles.languageName}>{item.name}</Text>
          <Text style={styles.nativeName}>{item.nativeName}</Text>
        </View>
      </View>
      {selectedLanguage === item.id && (
        <Icon name="check-circle" size={24} color="#2196F3" />
      )}
      {item.isDefault && (
        <View style={styles.defaultBadge}>
          <Text style={styles.defaultText}>Par défaut</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="language" size={40} color="#2196F3" />
        <Text style={styles.title}>Langue de l'Application</Text>
      </View>

      <Text style={styles.description}>
        Sélectionnez la langue que vous souhaitez utiliser dans l'application.
        Vous pourrez la modifier à tout moment dans les paramètres.
      </Text>

      <FlatList
        data={languages}
        renderItem={renderLanguageItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.languageList}
      />

      <View style={styles.infoContainer}>
        <Icon name="info" size={20} color="#757575" />
        <Text style={styles.infoText}>
          Le changement de langue nécessite un redémarrage de l'application
          pour être complètement appliqué.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => {
          // Ici, nous ajouterions la logique pour appliquer le changement de langue
          navigation.goBack();
        }}
      >
        <Icon name="check" size={24} color="#FFFFFF" />
        <Text style={styles.applyButtonText}>
          Appliquer les Changements
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    padding: 20,
    lineHeight: 24,
  },
  languageList: {
    padding: 10,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  languageItemSelected: {
    backgroundColor: '#E3F2FD',
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagText: {
    fontSize: 30,
    marginRight: 15,
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  nativeName: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  defaultBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 10,
  },
  defaultText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#757575',
    marginLeft: 10,
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default LanguageSelectionScreen;
