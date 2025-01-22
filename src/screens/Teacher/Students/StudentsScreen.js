import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StudentsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', title: t('students.all'), icon: 'view-grid' },
    { id: 'active', title: t('students.active'), icon: 'account-check' },
    { id: 'pending', title: t('students.pending'), icon: 'account-clock' },
  ];

  const students = [
    {
      id: '1',
      name: 'Thomas Martin',
      age: 8,
      status: 'active',
      progress: 0.85,
      avatar: require('../../../../assets/images/student-1.png'),
      lastActivity: '2h ago',
    },
    {
      id: '2',
      name: 'Emma Bernard',
      age: 9,
      status: 'pending',
      progress: 0.65,
      avatar: require('../../../../assets/images/student-2.png'),
      lastActivity: '1d ago',
    },
    // Add more students
  ];

  const filteredStudents = students.filter(
    (student) =>
      (selectedFilter === 'all' || student.status === selectedFilter) &&
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStudentCard = (student) => (
    <TouchableOpacity
      key={student.id}
      style={styles.studentCard}
      onPress={() => navigation.navigate('StudentDetail', { student })}
    >
      <Image source={student.avatar} style={styles.studentAvatar} />
      <View style={styles.studentInfo}>
        <View style={styles.studentHeader}>
          <Text style={styles.studentName}>{student.name}</Text>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  student.status === 'active' ? '#4CAF50' : '#FF9800',
              },
            ]}
          >
            <Text style={styles.statusText}>
              {t(`students.${student.status}`)}
            </Text>
          </View>
        </View>
        <Text style={styles.studentAge}>
          {t('students.age', { age: student.age })}
        </Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${student.progress * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(student.progress * 100)}%
          </Text>
        </View>
        <View style={styles.activityInfo}>
          <Icon name="clock-outline" size={16} color="#666" />
          <Text style={styles.activityText}>{student.lastActivity}</Text>
        </View>
      </View>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('students.title')}</Text>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={t('students.search')}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
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
      </ScrollView>

      <ScrollView style={styles.studentsContainer}>
        {filteredStudents.map(renderStudentCard)}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddStudent')}
      >
        <Icon name="plus" size={24} color="#FFFFFF" />
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
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filtersContainer: {
    padding: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
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
  studentsContainer: {
    flex: 1,
    padding: 20,
  },
  studentCard: {
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
  studentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  studentInfo: {
    flex: 1,
  },
  studentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  studentAge: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  activityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default StudentsScreen;
