import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCreationScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('profileCreation.status'),
      icon: 'account-question',
      screen: 'StatusInput',
    },
    {
      title: t('profileCreation.lastName'),
      icon: 'card-text',
      screen: 'NameInput',
    },
    {
      title: t('profileCreation.firstName'),
      icon: 'card-text-outline',
      screen: 'FirstNameInput',
    },
    {
      title: t('profileCreation.behaviorContracts'),
      icon: 'file-document',
      screen: 'BehaviorContracts',
    },
    {
      title: t('profileCreation.questionnaires'),
      icon: 'clipboard-text',
      screen: 'Questionnaires',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('profileCreation.title')}</Text>
        <Text style={styles.subtitle}>{t('profileCreation.subtitle')}</Text>
      </View>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <TouchableOpacity
            key={index}
            style={styles.stepItem}
            onPress={() => navigation.navigate(step.screen)}
          >
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Icon name={step.icon} size={30} color="#2196F3" />
            <Text style={styles.stepText}>{step.title}</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        ))}
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
  stepsContainer: {
    padding: 20,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});

export default ProfileCreationScreen;
