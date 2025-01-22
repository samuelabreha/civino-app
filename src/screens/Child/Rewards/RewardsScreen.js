import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RewardsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', title: t('rewards.all'), icon: 'view-grid' },
    { id: 'badges', title: t('rewards.badges'), icon: 'shield-star' },
    { id: 'items', title: t('rewards.items'), icon: 'gift' },
    { id: 'privileges', title: t('rewards.privileges'), icon: 'star' },
  ];

  const rewards = [
    {
      id: '1',
      title: t('rewards.superStudent'),
      category: 'badges',
      points: 500,
      image: require('../../../../assets/images/super-student.png'),
      description: t('rewards.superStudentDesc'),
      unlocked: true,
    },
    {
      id: '2',
      title: t('rewards.extraPlaytime'),
      category: 'privileges',
      points: 1000,
      image: require('../../../../assets/images/extra-playtime.png'),
      description: t('rewards.extraPlaytimeDesc'),
      unlocked: false,
    },
    // Add more rewards
  ];

  const renderRewardCard = (reward) => (
    <TouchableOpacity
      key={reward.id}
      style={[styles.rewardCard, !reward.unlocked && styles.lockedCard]}
      onPress={() => navigation.navigate('RewardDetail', { reward })}
    >
      <Image
        source={reward.image}
        style={[
          styles.rewardImage,
          !reward.unlocked && styles.lockedImage,
        ]}
      />
      <View style={styles.rewardContent}>
        <Text style={styles.rewardTitle}>{reward.title}</Text>
        <Text style={styles.rewardDescription} numberOfLines={2}>
          {reward.description}
        </Text>
        <View style={styles.rewardFooter}>
          <View style={styles.pointsContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.pointsText}>{reward.points} pts</Text>
          </View>
          {!reward.unlocked && (
            <Icon name="lock" size={20} color="#666" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.title}>{t('rewards.title')}</Text>
            <Text style={styles.subtitle}>{t('rewards.description')}</Text>
          </View>
          <View style={styles.pointsDisplay}>
            <Icon name="star" size={24} color="#FFD700" />
            <Text style={styles.pointsValue}>2500</Text>
          </View>
        </View>
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

      <ScrollView style={styles.rewardsContainer}>
        {rewards
          .filter(
            (reward) =>
              selectedCategory === 'all' || reward.category === selectedCategory
          )
          .map(renderRewardCard)}
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  pointsDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pointsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#333',
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
  rewardsContainer: {
    flex: 1,
    padding: 20,
  },
  rewardCard: {
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
  lockedCard: {
    opacity: 0.7,
  },
  rewardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  lockedImage: {
    opacity: 0.5,
  },
  rewardContent: {
    padding: 15,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  rewardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
});

export default RewardsScreen;
