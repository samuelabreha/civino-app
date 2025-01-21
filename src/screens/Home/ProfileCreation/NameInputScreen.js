import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NameInputScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [lastName, setLastName] = useState('');
  const { status } = route.params;

  const handleNext = () => {
    if (lastName.trim()) {
      navigation.navigate('FirstNameInput', { 
        status,
        lastName: lastName.trim() 
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{t('name.enterLastName')}</Text>
        <Text style={styles.subtitle}>{t('name.lastNameDescription')}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="card-text-outline" size={24} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder={t('name.lastNamePlaceholder')}
          autoFocus
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={handleNext}
        />
        {lastName.trim() !== '' && (
          <TouchableOpacity onPress={() => setLastName('')} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !lastName.trim() && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!lastName.trim()}
      >
        <Text style={styles.nextButtonText}>{t('common.next')}</Text>
        <Icon name="arrow-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  clearButton: {
    padding: 5,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nextButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default NameInputScreen;
