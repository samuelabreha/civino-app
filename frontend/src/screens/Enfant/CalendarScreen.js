import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const activities = {
    '2025-01-20': [
      { time: '10:00', title: 'Atelier dessin', type: 'creative' },
      { time: '14:30', title: 'Sport collectif', type: 'sport' }
    ],
    '2025-01-21': [
      { time: '09:30', title: 'Lecture en groupe', type: 'education' },
      { time: '15:00', title: 'Jeux de société', type: 'social' }
    ]
  };

  const getActivityColor = (type) => {
    const colors = {
      creative: '#FF9800',
      sport: '#4CAF50',
      education: '#2196F3',
      social: '#9C27B0'
    };
    return colors[type] || '#757575';
  };

  const markedDates = Object.keys(activities).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: '#2196F3',
      selected: date === selectedDate
    };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Header title="Mon calendrier" />
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
      />
      <ScrollView style={styles.activitiesContainer}>
        {selectedDate && activities[selectedDate] ? (
          <>
            <Text style={styles.dateTitle}>
              Mes activités du {new Date(selectedDate).toLocaleDateString('fr-FR')}
            </Text>
            {activities[selectedDate].map((activity, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.activityCard,
                  { borderLeftColor: getActivityColor(activity.type) }
                ]}
              >
                <Text style={styles.activityTime}>{activity.time}</Text>
                <Text style={styles.activityTitle}>{activity.title}</Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text style={styles.noActivities}>
            Pas d'activités prévues pour cette date
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activitiesContainer: {
    flex: 1,
    padding: 15,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  activityCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
  },
  activityTime: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 15,
    color: '#2196F3',
  },
  activityTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  noActivities: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CalendarScreen;
