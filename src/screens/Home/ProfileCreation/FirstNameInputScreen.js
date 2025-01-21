import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FirstNameInputScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const { status, lastName } = route.params;

  const handleNext = () => {
    if (firstName.trim()) {
      navigation.navigate('BehaviorContracts', {
        status,
        lastName,
        firstName: firstName.trim()
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{t('name.enterFirstName')}</Text>
        <Text style={styles.subtitle}>{t('name.firstNameDescription')}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="card-text-outline" size={24} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder={t('name.firstNamePlaceholder')}
          autoFocus
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={handleNext}
        />
        {firstName.trim() !== '' && (
          <TouchableOpacity onPress={() => setFirstName('')} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {t('name.step')} 3/5
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '60%' }]} />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !firstName.trim() && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!firstName.trim()}
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
  progressContainer: {
    padding: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
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

export default FirstNameInputScreen;
