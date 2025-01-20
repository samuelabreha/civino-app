import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const QuestionnaireCard = ({ title, description, onPress, icon, color }) => (
  <TouchableOpacity style={[styles.card, { borderColor: color }]} onPress={onPress}>
    <Icon name={icon} size={30} color={color} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
    <Icon name="chevron-right" size={24} color={color} />
  </TouchableOpacity>
);

const QuestionnairesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const userProfile = useSelector(state => state.auth.profile);

  const questionnaires = [
    {
      id: 'school',
      title: t('evaluation.school'),
      description: '30 questions',
      icon: 'school',
      color: '#4CAF50',
    },
    {
      id: 'home',
      title: t('evaluation.home'),
      description: '9 questions',
      icon: 'home',
      color: '#2196F3',
    },
    {
      id: 'neighborhood',
      title: t('evaluation.neighborhood'),
      description: '20 questions',
      icon: 'home-group',
      color: '#FF9800',
    },
  ];

  const handleQuestionnaireSelection = (questionnaireId) => {
    navigation.navigate('QuestionnaireDetail', { id: questionnaireId });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('evaluation.daily')}</Text>
        <Text style={styles.subtitle}>
          {t('evaluation.selectQuestionnaire')}
        </Text>
      </View>

      <View style={styles.questionnairesContainer}>
        {questionnaires.map((questionnaire) => (
          <QuestionnaireCard
            key={questionnaire.id}
            title={questionnaire.title}
            description={questionnaire.description}
            icon={questionnaire.icon}
            color={questionnaire.color}
            onPress={() => handleQuestionnaireSelection(questionnaire.id)}
          />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  questionnairesContainer: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default QuestionnairesScreen;
