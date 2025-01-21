import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActivitiesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', title: t('activities.all'), icon: 'view-grid' },
    { id: 'school', title: t('activities.school'), icon: 'school' },
    { id: 'home', title: t('activities.home'), icon: 'home' },
    { id: 'fun', title: t('activities.fun'), icon: 'gamepad-variant' },
  ];

  const activities = [
    {
      id: '1',
      title: t('activities.mathQuest'),
      category: 'school',
      points: 100,
      duration: '20 min',
      image: require('../../../../assets/images/math-quest.png'),
      progress: 0.75,
    },
    {
      id: '2',
      title: t('activities.readingChallenge'),
      category: 'home',
      points: 150,
      duration: '30 min',
      image: require('../../../../assets/images/reading-challenge.png'),
      progress: 0.5,
    },
    // Add more activities
  ];

  const renderActivityCard = (activity) => (
    <TouchableOpacity
      key={activity.id}
      style={styles.activityCard}
      onPress={() => navigation.navigate('ActivityDetail', { activity })}
    >
      <Image source={activity.image} style={styles.activityImage} />
      <View style={styles.activityContent}>
        <Text style={styles.activityTitle}>{activity.title}</Text>
        <View style={styles.activityInfo}>
          <View style={styles.infoItem}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.infoText}>{activity.points} pts</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="clock-outline" size={16} color="#666" />
            <Text style={styles.infoText}>{activity.duration}</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${activity.progress * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(activity.progress * 100)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('activities.title')}</Text>
        <Text style={styles.subtitle}>{t('activities.description')}</Text>
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

      <ScrollView style={styles.activitiesContainer}>
        {activities
          .filter(
            (activity) =>
              selectedCategory === 'all' || activity.category === selectedCategory
          )
          .map(renderActivityCard)}
      </ScrollView>

      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => navigation.navigate('Help')}
      >
        <Icon name="help-circle" size={24} color="#FFFFFF" />
      </TouchableOpacity>
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
  activitiesContainer: {
    flex: 1,
    padding: 20,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  activityContent: {
    padding: 15,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  activityInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  infoText: {
    marginLeft: 5,
    color: '#666',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  helpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ActivitiesScreen;
