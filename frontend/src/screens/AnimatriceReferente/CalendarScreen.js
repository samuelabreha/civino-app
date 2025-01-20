import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const séances = {
    '2025-01-20': [
      { 
        time: '09:00',
        title: 'Atelier créatif - Groupe A',
        type: 'atelier',
        lieu: 'Salle 1',
        participants: 12
      },
      {
        time: '14:00',
        title: 'Suivi individuel - Emma',
        type: 'suivi',
        lieu: 'Bureau 3',
        participants: 1
      }
    ],
    '2025-01-21': [
      {
        time: '10:30',
        title: 'Activité sportive - Groupe B',
        type: 'sport',
        lieu: 'Gymnase',
        participants: 15
      },
      {
        time: '15:30',
        title: 'Réunion équipe',
        type: 'reunion',
        lieu: 'Salle de réunion',
        participants: 8
      }
    ]
  };

  const getTypeColor = (type) => {
    const colors = {
      atelier: '#FF9800',
      sport: '#4CAF50',
      suivi: '#2196F3',
      reunion: '#9C27B0'
    };
    return colors[type] || '#757575';
  };

  const markedDates = Object.keys(séances).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: '#2196F3',
      selected: date === selectedDate
    };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Header title="Planning des séances" />
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
      />
      <ScrollView style={styles.séancesContainer}>
        {selectedDate && séances[selectedDate] ? (
          <>
            <Text style={styles.dateTitle}>
              Séances du {new Date(selectedDate).toLocaleDateString('fr-FR')}
            </Text>
            {séances[selectedDate].map((séance, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.séanceCard,
                  { borderLeftColor: getTypeColor(séance.type) }
                ]}
              >
                <Text style={styles.séanceTime}>{séance.time}</Text>
                <View style={styles.séanceInfo}>
                  <Text style={styles.séanceTitle}>{séance.title}</Text>
                  <View style={styles.séanceDetails}>
                    <Text style={styles.séanceLieu}>📍 {séance.lieu}</Text>
                    <Text style={styles.séanceParticipants}>
                      👥 {séance.participants} {séance.participants > 1 ? 'participants' : 'participant'}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>
                + Ajouter une séance
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.noSéances}>
            Aucune séance prévue pour cette date
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
  séancesContainer: {
    flex: 1,
    padding: 15,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  séanceCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
  },
  séanceTime: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 15,
    color: '#2196F3',
  },
  séanceInfo: {
    flex: 1,
  },
  séanceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  séanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  séanceLieu: {
    fontSize: 14,
    color: '#666',
  },
  séanceParticipants: {
    fontSize: 14,
    color: '#666',
  },
  noSéances: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CalendarScreen;
