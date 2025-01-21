import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';

const QuestionnaireScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);

  const questionnaireTypes = [
    {
      id: 'school',
      title: t('questionnaires.school'),
      periods: ['morning', 'afternoon'],
    },
    {
      id: 'community',
      title: t('questionnaires.community'),
      periods: ['morning', 'afternoon'],
    },
    {
      id: 'home',
      title: t('questionnaires.home'),
      periods: ['morning', 'afterSchool'],
    },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleQuestionnaireSelect = (type) => {
    setSelectedQuestionnaire(type);
    navigation.navigate('QuestionnaireDetail', {
      date: selectedDate,
      type: type,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('questionnaires.title')}</Text>
        <Text style={styles.subtitle}>{t('questionnaires.selectDate')}</Text>
      </View>

      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={handleDateSelect}
          selectedDayColor="#2196F3"
          selectedDayTextColor="#FFFFFF"
          todayBackgroundColor="#F5F5F5"
          todayTextStyle={{ color: '#2196F3' }}
        />
      </View>

      {selectedDate && (
        <View style={styles.questionnaireContainer}>
          <Text style={styles.sectionTitle}>{t('questionnaires.selectType')}</Text>
          {questionnaireTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={styles.questionnaireItem}
              onPress={() => handleQuestionnaireSelect(type)}
            >
              <View style={styles.questionnaireHeader}>
                <Text style={styles.questionnaireTitle}>{type.title}</Text>
                <Icon name="chevron-right" size={24} color="#666" />
              </View>
              <View style={styles.periodContainer}>
                {type.periods.map((period) => (
                  <View key={period} style={styles.periodBadge}>
                    <Text style={styles.periodText}>
                      {t(`questionnaires.periods.${period}`)}
                    </Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selectedDate && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.downloadButton}
            onPress={() => {/* Handle PDF download */}}
          >
            <Icon name="file-pdf-box" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>
              {t('questionnaires.downloadPdf')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  calendarContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  questionnaireContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  questionnaireItem: {
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
  questionnaireHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  questionnaireTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  periodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  periodBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  periodText: {
    color: '#2196F3',
    fontSize: 14,
  },
  actionsContainer: {
    padding: 20,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default QuestionnaireScreen;
