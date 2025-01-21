import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({
    '2025-01-20': [
      { time: '10:00', title: 'Séance individuelle - Emma' },
      { time: '14:30', title: 'Activité de groupe' }
    ],
    '2025-01-21': [
      { time: '11:00', title: 'Réunion parents - Lucas' },
      { time: '15:00', title: 'Atelier comportemental' }
    ]
  });

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true, dotColor: '#2196F3' };
    if (date === selectedDate) {
      acc[date].selected = true;
    }
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Header title="Calendrier" />
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
      />
      <ScrollView style={styles.eventsContainer}>
        {selectedDate && events[selectedDate] ? (
          <>
            <Text style={styles.dateTitle}>
              Événements du {new Date(selectedDate).toLocaleDateString('fr-FR')}
            </Text>
            {events[selectedDate].map((event, index) => (
              <TouchableOpacity key={index} style={styles.eventCard}>
                <Text style={styles.eventTime}>{event.time}</Text>
                <Text style={styles.eventTitle}>{event.title}</Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text style={styles.noEvents}>
            Aucun événement prévu pour cette date
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
  eventsContainer: {
    flex: 1,
    padding: 15,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTime: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 15,
    color: '#2196F3',
  },
  eventTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  noEvents: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CalendarScreen;
