import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const events = {
    '2025-01-20': [
      { time: '09:00', title: 'Réunion parents - Emma', type: 'meeting' },
      { time: '14:00', title: 'Évaluation comportementale - Lucas', type: 'evaluation' }
    ],
    '2025-01-21': [
      { time: '10:30', title: 'Atelier pédagogique', type: 'workshop' },
      { time: '15:30', title: 'Suivi individuel - Léa', type: 'individual' }
    ]
  };

  const getEventTypeColor = (type) => {
    const colors = {
      meeting: '#FF9800',
      evaluation: '#4CAF50',
      workshop: '#2196F3',
      individual: '#9C27B0'
    };
    return colors[type] || '#757575';
  };

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: '#2196F3',
      selected: date === selectedDate
    };
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
              <TouchableOpacity
                key={index}
                style={[
                  styles.eventCard,
                  { borderLeftColor: getEventTypeColor(event.type) }
                ]}
              >
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

        <TouchableOpacity style={styles.addEventButton}>
          <Text style={styles.addEventButtonText}>
            Ajouter un événement
          </Text>
        </TouchableOpacity>
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
    borderLeftWidth: 4,
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
  addEventButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addEventButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CalendarScreen;
