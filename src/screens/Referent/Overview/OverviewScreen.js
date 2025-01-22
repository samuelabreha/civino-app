import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OverviewScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', title: t('overview.all'), icon: 'view-grid' },
    { id: 'pending', title: t('overview.pending'), icon: 'clock-outline' },
    { id: 'completed', title: t('overview.completed'), icon: 'check-circle' },
  ];

  const activities = [
    {
      id: '1',
      title: 'Questionnaire Mathématiques',
      type: 'school',
      status: 'pending',
      date: '2025-01-21',
      time: '09:30',
    },
    {
      id: '2',
      title: 'Évaluation Comportementale',
      type: 'community',
      status: 'completed',
      date: '2025-01-21',
      time: '14:00',
    },
    // Add more activities as needed
  ];

  const renderActivityItem = ({ item }) => (
    <TouchableOpacity
      style={styles.activityCard}
      onPress={() => navigation.navigate('ActivityDetail', { activity: item })}
    >
      <View style={styles.activityHeader}>
        <View style={styles.activityType}>
          <Icon
            name={item.type === 'school' ? 'school' : 'account-group'}
            size={24}
            color="#2196F3"
          />
          <Text style={styles.activityTitle}>{item.title}</Text>
        </View>
        <Icon
          name={item.status === 'completed' ? 'check-circle' : 'clock-outline'}
          size={24}
          color={item.status === 'completed' ? '#4CAF50' : '#FF9800'}
        />
      </View>
      <View style={styles.activityInfo}>
        <View style={styles.infoItem}>
          <Icon name="calendar" size={20} color="#666" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="clock" size={20} color="#666" />
          <Text style={styles.infoText}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('overview.title')}</Text>
        <Text style={styles.subtitle}>{t('overview.description')}</Text>
      </View>

      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              selectedFilter === filter.id && styles.selectedFilter,
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <Icon
              name={filter.icon}
              size={24}
              color={selectedFilter === filter.id ? '#FFFFFF' : '#666'}
            />
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter.id && styles.selectedFilterText,
              ]}
            >
              {filter.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={activities.filter(
          (activity) =>
            selectedFilter === 'all' || activity.status === selectedFilter
        )}
        renderItem={renderActivityItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.activitiesList}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NewActivity')}
      >
        <Icon name="plus" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>{t('overview.addActivity')}</Text>
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
  filterContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    margin: 5,
    borderRadius: 10,
  },
  selectedFilter: {
    backgroundColor: '#2196F3',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedFilterText: {
    color: '#FFFFFF',
  },
  activitiesList: {
    padding: 20,
  },
  activityCard: {
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
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
  },
  activityInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 5,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default OverviewScreen;
