import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QuestionnairesScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { status, lastName, firstName } = route.params;
  const [selectedType, setSelectedType] = useState(null);

  const questionnaireTypes = [
    {
      id: 'imageEvaluation',
      title: t('questionnaires.imageEvaluation'),
      icon: 'image-multiple',
      description: t('questionnaires.imageEvaluationDescription'),
    },
    {
      id: 'school',
      title: t('questionnaires.school'),
      icon: 'school',
      description: t('questionnaires.schoolDescription'),
    },
    {
      id: 'community',
      title: t('questionnaires.community'),
      icon: 'account-group',
      description: t('questionnaires.communityDescription'),
    },
    {
      id: 'home',
      title: t('questionnaires.home'),
      icon: 'home',
      description: t('questionnaires.homeDescription'),
    },
  ];

  const handleComplete = () => {
    // Navigation vers le rapport de progression ou la page suivante
    navigation.navigate('ProgressReport', {
      status,
      lastName,
      firstName,
      selectedQuestionnaire: selectedType,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('questionnaires.selectTitle')}</Text>
        <Text style={styles.subtitle}>{t('questionnaires.selectDescription')}</Text>
      </View>

      <View style={styles.questionnairesContainer}>
        {questionnaireTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.questionnaireCard,
              selectedType === type.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedType(type.id)}
          >
            <View style={styles.cardHeader}>
              <Icon 
                name={type.icon} 
                size={32} 
                color={selectedType === type.id ? '#2196F3' : '#666'} 
              />
              <Text style={[
                styles.cardTitle,
                selectedType === type.id && styles.selectedText,
              ]}>
                {type.title}
              </Text>
            </View>
            <Text style={styles.cardDescription}>
              {type.description}
            </Text>
            {selectedType === type.id && (
              <View style={styles.selectedIndicator}>
                <Icon name="check-circle" size={24} color="#2196F3" />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {t('questionnaires.step')} 5/5
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.completeButton, !selectedType && styles.completeButtonDisabled]}
        onPress={handleComplete}
        disabled={!selectedType}
      >
        <Text style={styles.completeButtonText}>{t('common.complete')}</Text>
        <Icon name="check" size={24} color="#FFFFFF" />
      </TouchableOpacity>
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
  questionnairesContainer: {
    padding: 20,
  },
  questionnaireCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#2196F3',
    backgroundColor: '#F5F5F5',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  selectedText: {
    color: '#2196F3',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
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
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    marginBottom: 40,
  },
  completeButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default QuestionnairesScreen;
