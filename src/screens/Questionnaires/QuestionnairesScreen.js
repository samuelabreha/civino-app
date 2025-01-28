import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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
    { id: 'school', title: t('evaluation.school'), description: '30 questions', icon: 'school', color: '#4CAF50' },
    { id: 'home', title: t('evaluation.home'), description: '9 questions', icon: 'home', color: '#2196F3' },
    { id: 'neighborhood', title: t('evaluation.neighborhood'), description: '20 questions', icon: 'home-group', color: '#FF9800' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={questionnaires}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <QuestionnaireCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate(item.id)}
            icon={item.icon}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
