import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AchievementsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', title: t('achievements.all'), icon: 'view-grid' },
    { id: 'academic', title: t('achievements.academic'), icon: 'school' },
    { id: 'social', title: t('achievements.social'), icon: 'account-group' },
    { id: 'personal', title: t('achievements.personal'), icon: 'account-star' },
  ];

  const achievements = [
    {
      id: '1',
      title: t('achievements.mathWizard'),
      category: 'academic',
      description: t('achievements.mathWizardDesc'),
      icon: 'calculator',
      color: '#4CAF50',
      progress: 0.8,
      requirements: [
        { text: t('achievements.complete10Math'), done: true },
        { text: t('achievements.score90Math'), done: true },
        { text: t('achievements.helpOthers'), done: false },
      ],
    },
    {
      id: '2',
      title: t('achievements.teamPlayer'),
      category: 'social',
      description: t('achievements.teamPlayerDesc'),
      icon: 'account-group',
      color: '#2196F3',
      progress: 0.6,
      requirements: [
        { text: t('achievements.participate5Group'), done: true },
        { text: t('achievements.helpClassmate'), done: true },
        { text: t('achievements.organizeActivity'), done: false },
      ],
    },
    // Add more achievements
  ];

  const renderAchievementCard = (achievement) => (
    <TouchableOpacity
      key={achievement.id}
      style={styles.achievementCard}
      onPress={() => navigation.navigate('AchievementDetail', { achievement })}
    >
      <View style={styles.achievementHeader}>
        <View
          style={[styles.achievementIcon, { backgroundColor: achievement.color }]}
        >
          <Icon name={achievement.icon} size={32} color="#FFFFFF" />
        </View>
        <View style={styles.achievementInfo}>
          <Text style={styles.achievementTitle}>{achievement.title}</Text>
          <Text style={styles.achievementDescription} numberOfLines={2}>
            {achievement.description}
          </Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${achievement.progress * 100}%`,
                backgroundColor: achievement.color,
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {Math.round(achievement.progress * 100)}%
        </Text>
      </View>

      <View style={styles.requirementsList}>
        {achievement.requirements.map((req, index) => (
          <View key={index} style={styles.requirementItem}>
            <Icon
              name={req.done ? 'check-circle' : 'circle-outline'}
              size={20}
              color={req.done ? achievement.color : '#666'}
            />
            <Text
              style={[
                styles.requirementText,
                req.done && styles.completedRequirement,
              ]}
            >
              {req.text}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('achievements.title')}</Text>
        <Text style={styles.subtitle}>{t('achievements.description')}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Icon
              name={category.icon}
              size={24}
              color={selectedCategory === category.id ? '#FFFFFF' : '#666'}
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText,
              ]}
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.achievementsContainer}>
        {achievements
          .filter(
            (achievement) =>
              selectedCategory === 'all' ||
              achievement.category === selectedCategory
          )
          .map(renderAchievementCard)}
      </ScrollView>
    </View>
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
  categoriesContainer: {
    padding: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: '#2196F3',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  achievementsContainer: {
    flex: 1,
    padding: 20,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  achievementHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  achievementIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  requirementsList: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  requirementText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
  completedRequirement: {
    color: '#333',
    textDecorationLine: 'line-through',
  },
});

export default AchievementsScreen;
