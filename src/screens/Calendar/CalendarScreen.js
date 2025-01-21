import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventItem = ({ event, onPress }) => (
  <TouchableOpacity style={styles.eventItem} onPress={onPress}>
    <View style={[styles.eventColor, { backgroundColor: event.color }]} />
    <View style={styles.eventInfo}>
      <Text style={styles.eventTime}>{event.time}</Text>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
    </View>
    <Icon name="chevron-right" size={24} color="#666" />
  </TouchableOpacity>
);

const CalendarScreen = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);

  const markedDates = {
    [selectedDate]: {
      selected: true,
      marked: true,
      selectedColor: '#2196F3',
    },
  };

  // Ajouter les points pour les dates avec des événements
  Object.keys(events).forEach((date) => {
    if (date !== selectedDate) {
      markedDates[date] = {
        marked: true,
        dotColor: '#2196F3',
      };
    }
  });

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleAddEvent = () => {
    setShowAddModal(true);
  };

  const renderEvents = () => {
    const dayEvents = events[selectedDate] || [];
    return (
      <FlatList
        data={dayEvents}
        renderItem={({ item }) => (
          <EventItem
            event={item}
            onPress={() => {
              // Gérer l'appui sur un événement
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.eventsList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="calendar-blank" size={64} color="#CCCCCC" />
            <Text style={styles.emptyText}>
              {t('calendar.noEvents')}
            </Text>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('calendar.title')}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddEvent}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
          <Text style={styles.addButtonText}>
            {t('calendar.addEvent')}
          </Text>
        </TouchableOpacity>
      </View>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#2196F3',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#2196F3',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#2196F3',
          selectedDotColor: '#ffffff',
          arrowColor: '#2196F3',
          monthTextColor: '#2d4150',
          indicatorColor: '#2196F3',
        }}
      />

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>
          {selectedDate
            ? t('calendar.eventsForDate', { date: selectedDate })
            : t('calendar.selectDate')}
        </Text>
        {renderEvents()}
      </View>

      <Modal
        visible={showAddModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowAddModal(false)}
      >
        {/* Formulaire d'ajout d'événement */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontWeight: '600',
  },
  eventsContainer: {
    flex: 1,
    padding: 15,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  eventsList: {
    flexGrow: 1,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  eventColor: {
    width: 4,
    height: '100%',
    borderRadius: 2,
    marginRight: 15,
  },
  eventInfo: {
    flex: 1,
  },
  eventTime: {
    fontSize: 14,
    color: '#666',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginVertical: 4,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CalendarScreen;
