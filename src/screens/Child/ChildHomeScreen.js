import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChildHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'activities',
      title: t('child.activities'),
      icon: 'star',
      screen: 'ChildActivities',
      color: '#4CAF50',
      description: t('child.activitiesDescription'),
    },
    {
      id: 'rewards',
      title: t('child.rewards'),
      icon: 'gift',
      screen: 'ChildRewards',
      color: '#2196F3',
      description: t('child.rewardsDescription'),
    },
    {
      id: 'progress',
      title: t('child.progress'),
      icon: 'chart-line-variant',
      screen: 'ChildProgress',
      color: '#FF9800',
      description: t('child.progressDescription'),
    },
    {
      id: 'achievements',
      title: t('child.achievements'),
      icon: 'trophy',
      screen: 'ChildAchievements',
      color: '#9C27B0',
      description: t('child.achievementsDescription'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../../../assets/images/avatar-child.png')}
            style={styles.avatar}
          />
          <View style={styles.welcomeText}>
            <Text style={styles.greeting}>{t('child.greeting')}</Text>
            <Text style={styles.name}>Thomas</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="star" size={24} color="#FFD700" />
            <Text style={styles.statValue}>250</Text>
            <Text style={styles.statLabel}>{t('child.points')}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="trophy" size={24} color="#FF9800" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>{t('child.trophies')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={32} color="#FFFFFF" />
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemDescription}>
                {item.description}
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dailyTaskContainer}>
        <Text style={styles.dailyTaskTitle}>{t('child.dailyTask')}</Text>
        <TouchableOpacity
          style={styles.dailyTaskCard}
          onPress={() => navigation.navigate('DailyTask')}
        >
          <Icon name="calendar-check" size={32} color="#4CAF50" />
          <View style={styles.dailyTaskContent}>
            <Text style={styles.dailyTaskName}>
              {t('child.completeDailyTask')}
            </Text>
            <Text style={styles.dailyTaskReward}>
              +50 {t('child.points')}
            </Text>
          </View>
          <Icon name="arrow-right" size={24} color="#666" />
        </TouchableOpacity>
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
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  welcomeText: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  dailyTaskContainer: {
    padding: 20,
  },
  dailyTaskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  dailyTaskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dailyTaskContent: {
    flex: 1,
    marginLeft: 15,
  },
  dailyTaskName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  dailyTaskReward: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
});

export default ChildHomeScreen;
