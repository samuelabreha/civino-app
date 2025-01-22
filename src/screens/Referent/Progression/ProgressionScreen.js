import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';

const ProgressionScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const periods = [
    { id: 'daily', title: t('progression.daily'), icon: 'calendar-today' },
    { id: 'weekly', title: t('progression.weekly'), icon: 'calendar-week' },
    { id: 'monthly', title: t('progression.monthly'), icon: 'calendar-month' },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleDownload = () => {
    // Handle PDF download logic
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('progression.title')}</Text>
        <Text style={styles.subtitle}>{t('progression.selectDate')}</Text>
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
        <View style={styles.periodContainer}>
          <Text style={styles.sectionTitle}>{t('progression.selectPeriod')}</Text>
          <View style={styles.periodButtons}>
            {periods.map((period) => (
              <TouchableOpacity
                key={period.id}
                style={[
                  styles.periodButton,
                  selectedPeriod === period.id && styles.selectedPeriod,
                ]}
                onPress={() => setSelectedPeriod(period.id)}
              >
                <Icon
                  name={period.icon}
                  size={24}
                  color={selectedPeriod === period.id ? '#FFFFFF' : '#666'}
                />
                <Text
                  style={[
                    styles.periodButtonText,
                    selectedPeriod === period.id && styles.selectedPeriodText,
                  ]}
                >
                  {period.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {selectedDate && selectedPeriod && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={handleDownload}
          >
            <Icon name="file-pdf-box" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>
              {t('progression.downloadReport')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => navigation.navigate('ProgressionDetail', {
              date: selectedDate,
              period: selectedPeriod,
            })}
          >
            <Icon name="eye" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>
              {t('progression.viewReport')}
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
  periodContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  periodButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  selectedPeriod: {
    backgroundColor: '#2196F3',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  selectedPeriodText: {
    color: '#FFFFFF',
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
    marginBottom: 10,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default ProgressionScreen;
