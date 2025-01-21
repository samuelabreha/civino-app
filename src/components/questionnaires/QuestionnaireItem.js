import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const QuestionnaireItem = ({ questionnaire, onPress }) => {
  const { t } = useTranslation();
  
  const getContextIcon = () => {
    switch (questionnaire.context) {
      case 'school':
        return 'school';
      case 'home':
        return 'home';
      case 'community':
        return 'account-group';
      default:
        return 'clipboard-text';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={getContextIcon()} size={32} color="#2196F3" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{questionnaire.title}</Text>
        <Text style={styles.subtitle}>
          {t(`questionnaire.contexts.${questionnaire.context}`)}
        </Text>
        <Text style={styles.details}>
          {questionnaire.questionCount} {t('questionnaire.questions')}
        </Text>
      </View>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});

export default QuestionnaireItem;
