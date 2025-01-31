import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import QuestionnaireCard from './QuestionnaireCard';

const QuestionnairesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const userProfile = useSelector(state => state.auth.profile);

  const questionnaires = [
    { id: 'school', title: t('evaluation.school'), description: '30 questions', icon: 'school', color: '#4CAF50' },
    { id: 'home', title: t('evaluation.home'), description: '9 questions', icon: 'home', color: '#2196F3' },
    { id: 'neighborhood', title: t('evaluation.neighborhood'), description: '20 questions', icon: 'home-group', color: '#FF9800' },
  ];

  const handlePress = (questionnaire) => {
    // Logique pour naviguer vers le questionnaire
    navigation.navigate('QuestionnaireDetail', { questionnaire });
  };

  // Exemple de gestion d'erreur (à adapter selon vos besoins)
  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{t('error.noProfile')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={questionnaires}
        renderItem={({ item }) => (
          <QuestionnaireCard
            title={item.title}
            description={item.description}
            onPress={() => handlePress(item)}
            icon={item.icon}
            color={item.color}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#666',
  },
  card: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default QuestionnairesScreen;
