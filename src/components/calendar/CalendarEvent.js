import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const CalendarEvent = ({ event, onPress, onEdit, onDelete }) => {
  const { t } = useTranslation();

  const getEventTypeColor = () => {
    switch (event.type) {
      case 'questionnaire':
        return '#2196F3';
      case 'meeting':
        return '#4CAF50';
      case 'activity':
        return '#FFA726';
      case 'deadline':
        return '#EF5350';
      default:
        return '#757575';
    }
  };

  const getEventIcon = () => {
    switch (event.type) {
      case 'questionnaire':
        return 'clipboard-text';
      case 'meeting':
        return 'account-group';
      case 'activity':
        return 'star';
      case 'deadline':
        return 'clock-alert';
      default:
        return 'calendar';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.colorBar, { backgroundColor: getEventTypeColor() }]} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Icon
              name={getEventIcon()}
              size={24}
              color={getEventTypeColor()}
              style={styles.icon}
            />
            <Text style={styles.title}>{event.title}</Text>
          </View>
          
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onEdit}
            >
              <Icon name="pencil" size={20} color="#666" />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.actionButton, styles.deleteButton]}
              onPress={onDelete}
            >
              <Icon name="delete" size={20} color="#EF5350" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" size={16} color="#666" style={styles.detailIcon} />
            <Text style={styles.time}>
              {event.startTime} - {event.endTime}
            </Text>
          </View>

          {event.location && (
            <View style={styles.locationContainer}>
              <Icon name="map-marker-outline" size={16} color="#666" style={styles.detailIcon} />
              <Text style={styles.location}>{event.location}</Text>
            </View>
          )}
        </View>

        {event.description && (
          <Text style={styles.description} numberOfLines={2}>
            {event.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  colorBar: {
    width: 6,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 5,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: '#FFEBEE',
    borderRadius: 15,
  },
  details: {
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    marginRight: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default CalendarEvent;
