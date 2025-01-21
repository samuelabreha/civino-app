import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';

const EvaluationsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const evaluationTypes = [
    { id: 'all', title: t('evaluations.all'), icon: 'view-grid' },
    { id: 'academic', title: t('evaluations.academic'), icon: 'school' },
    { id: 'behavior', title: t('evaluations.behavior'), icon: 'account-star' },
    { id: 'social', title: t('evaluations.social'), icon: 'account-group' },
  ];

  const evaluations = [
    {
      id: '1',
      title: t('evaluations.mathTest'),
      type: 'academic',
      date: '2025-01-21',
      time: '09:30',
      students: 25,
      completed: 18,
      status: 'in-progress',
    },
    {
      id: '2',
      title: t('evaluations.behaviorAssessment'),
      type: 'behavior',
      date: '2025-01-21',
      time: '14:00',
      students: 25,
      completed: 25,
      status: 'completed',
    },
    // Add more evaluations
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const renderEvaluationCard = (evaluation) => (
    <TouchableOpacity
      key={evaluation.id}
      style={styles.evaluationCard}
      onPress={() => navigation.navigate('EvaluationDetail', { evaluation })}
    >
      <View style={styles.evaluationHeader}>
        <View style={styles.titleContainer}>
          <Icon
            name={
              evaluation.type === 'academic'
                ? 'school'
                : evaluation.type === 'behavior'
                ? 'account-star'
                : 'account-group'
            }
            size={24}
            color="#2196F3"
          />
          <Text style={styles.evaluationTitle}>{evaluation.title}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                evaluation.status === 'completed' ? '#4CAF50' : '#FF9800',
            },
          ]}
        >
          <Text style={styles.statusText}>
            {t(`evaluations.${evaluation.status}`)}
          </Text>
        </View>
      </View>

      <View style={styles.evaluationInfo}>
        <View style={styles.infoItem}>
          <Icon name="calendar" size={20} color="#666" />
          <Text style={styles.infoText}>{evaluation.date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="clock-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{evaluation.time}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>
            {evaluation.completed}/{evaluation.students}{' '}
            {t('evaluations.completed')}
          </Text>
          <Text style={styles.progressPercentage}>
            {Math.round((evaluation.completed / evaluation.students) * 100)}%
          </Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${(evaluation.completed / evaluation.students) * 100}%`,
              },
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('evaluations.title')}</Text>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={t('evaluations.search')}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={handleDateSelect}
            selectedDayColor="#2196F3"
            selectedDayTextColor="#FFFFFF"
            todayBackgroundColor="#F5F5F5"
            todayTextStyle={{ color: '#2196F3' }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.typesContainer}
        >
          {evaluationTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.typeButton,
                selectedType === type.id && styles.selectedType,
              ]}
              onPress={() => setSelectedType(type.id)}
            >
              <Icon
                name={type.icon}
                size={24}
                color={selectedType === type.id ? '#FFFFFF' : '#666'}
              />
              <Text
                style={[
                  styles.typeText,
                  selectedType === type.id && styles.selectedTypeText,
                ]}
              >
                {type.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.evaluationsContainer}>
          {evaluations
            .filter(
              (evaluation) =>
                (selectedType === 'all' || evaluation.type === selectedType) &&
                evaluation.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
            )
            .map(renderEvaluationCard)}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateEvaluation')}
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
  content: {
    flex: 1,
  },
  calendarContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  typesContainer: {
    padding: 20,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedType: {
    backgroundColor: '#2196F3',
  },
  typeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedTypeText: {
    color: '#FFFFFF',
  },
  evaluationsContainer: {
    padding: 20,
  },
  evaluationCard: {
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
  evaluationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
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
  evaluationInfo: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  infoText: {
    marginLeft: 5,
    color: '#666',
  },
  progressContainer: {
    marginTop: 5,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2196F3',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
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

export default EvaluationsScreen;
