import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TeacherHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'students',
      title: t('teacher.students'),
      icon: 'account-group',
      screen: 'TeacherStudents',
      color: '#4CAF50',
      description: t('teacher.studentsDescription'),
    },
    {
      id: 'evaluations',
      title: t('teacher.evaluations'),
      icon: 'clipboard-text',
      screen: 'TeacherEvaluations',
      color: '#2196F3',
      description: t('teacher.evaluationsDescription'),
    },
    {
      id: 'reports',
      title: t('teacher.reports'),
      icon: 'file-chart',
      screen: 'TeacherReports',
      color: '#FF9800',
      description: t('teacher.reportsDescription'),
    },
    {
      id: 'planning',
      title: t('teacher.planning'),
      icon: 'calendar',
      screen: 'TeacherPlanning',
      color: '#9C27B0',
      description: t('teacher.planningDescription'),
    },
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'evaluation',
      title: t('teacher.mathEvaluation'),
      time: '2h ago',
      icon: 'clipboard-text',
      color: '#2196F3',
    },
    {
      id: '2',
      type: 'report',
      title: t('teacher.weeklyReport'),
      time: '1d ago',
      icon: 'file-chart',
      color: '#FF9800',
    },
    // Add more activities
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../../../assets/images/avatar-teacher.png')}
            style={styles.avatar}
          />
          <View style={styles.welcomeText}>
            <Text style={styles.greeting}>{t('teacher.greeting')}</Text>
            <Text style={styles.name}>Marie</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="account-group" size={24} color="#4CAF50" />
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>{t('teacher.students')}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="clipboard-check" size={24} color="#2196F3" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>{t('teacher.pendingEvals')}</Text>
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

      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>{t('teacher.recentActivities')}</Text>
        {recentActivities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.activityItem}
            onPress={() => navigation.navigate('ActivityDetail', { activity })}
          >
            <View
              style={[
                styles.activityIcon,
                { backgroundColor: activity.color },
              ]}
            >
              <Icon name={activity.icon} size={24} color="#FFFFFF" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
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
  recentContainer: {
    padding: 20,
  },
  recentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
  },
});

export default TeacherHomeScreen;
