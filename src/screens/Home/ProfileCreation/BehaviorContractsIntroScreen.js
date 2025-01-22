import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BehaviorContractsIntroScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { status, lastName, firstName } = route.params;

  const contractTypes = [
    {
      id: 'school',
      title: t('contracts.school'),
      icon: 'school',
      description: t('contracts.schoolDescription'),
    },
    {
      id: 'home',
      title: t('contracts.home'),
      icon: 'home',
      description: t('contracts.homeDescription'),
    },
    {
      id: 'community',
      title: t('contracts.community'),
      icon: 'account-group',
      description: t('contracts.communityDescription'),
    },
  ];

  const handleNext = () => {
    navigation.navigate('Questionnaires', {
      status,
      lastName,
      firstName,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('contracts.introTitle')}</Text>
        <Text style={styles.subtitle}>{t('contracts.introDescription')}</Text>
      </View>

      <View style={styles.contractsContainer}>
        {contractTypes.map((contract) => (
          <View key={contract.id} style={styles.contractCard}>
            <View style={styles.contractHeader}>
              <Icon name={contract.icon} size={32} color="#2196F3" />
              <Text style={styles.contractTitle}>{contract.title}</Text>
            </View>
            <Text style={styles.contractDescription}>
              {contract.description}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {t('contracts.step')} 4/5
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '80%' }]} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>{t('common.next')}</Text>
        <Icon name="arrow-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.noteContainer}>
        <Icon name="information" size={24} color="#666" />
        <Text style={styles.noteText}>
          {t('contracts.note')}
        </Text>
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
  contractsContainer: {
    padding: 20,
  },
  contractCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contractHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contractTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  contractDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
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
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    marginBottom: 40,
  },
  noteText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default BehaviorContractsIntroScreen;
