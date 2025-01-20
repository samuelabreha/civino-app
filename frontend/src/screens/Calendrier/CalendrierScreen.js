import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { illustrations } from '../../constants/assets';

const CalendrierScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Exemple d'événements
  const events = {
    '2025-01-20': {
      dots: [
        { color: theme.colors.evaluation.vert },
        { color: theme.colors.evaluation.orange },
      ],
      events: [
        {
          id: 1,
          title: 'Évaluation École',
          type: 'school',
          time: '09:00',
          status: 'completed',
          evaluation: 'Vert',
        },
        {
          id: 2,
          title: 'Évaluation Maison',
          type: 'home',
          time: '17:00',
          status: 'pending',
        },
      ],
    },
    '2025-01-21': {
      dots: [
        { color: theme.colors.evaluation.vert },
      ],
      events: [
        {
          id: 3,
          title: 'Évaluation Centre Communautaire',
          type: 'community',
          time: '14:00',
          status: 'completed',
          evaluation: 'Vert',
        },
      ],
    },
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setSelectedEvent(events[date.dateString]);
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'school':
        return illustrations.school.activities.stayFocused;
      case 'home':
        return illustrations.home.listenParents;
      case 'community':
        return illustrations.communityCenter.stayFocused;
      default:
        return null;
    }
  };

  const navigateToQuestionnaire = (type) => {
    switch (type) {
      case 'school':
        navigation.navigate('QuestionnaireEcole');
        break;
      case 'home':
        navigation.navigate('QuestionnaireMaison');
        break;
      case 'community':
        navigation.navigate('QuestionnaireMaisonQuartier');
        break;
    }
  };

  const renderEventList = () => {
    if (!selectedEvent) return null;

    return selectedEvent.events.map((event) => (
      <Card key={event.id} style={styles.eventCard}>
        <View style={styles.eventHeader}>
          <Typography variant="h3">{event.title}</Typography>
          <Typography variant="caption" style={styles.eventTime}>
            {event.time}
          </Typography>
        </View>

        {event.status === 'completed' ? (
          <View style={styles.completedEvent}>
            <Typography variant="subtitle1">Évaluation :</Typography>
            <View style={[
              styles.evaluationBadge,
              { backgroundColor: theme.colors.evaluation[event.evaluation.toLowerCase()] }
            ]}>
              <Typography variant="caption" style={styles.evaluationText}>
                {event.evaluation}
              </Typography>
            </View>
          </View>
        ) : (
          <Button
            onPress={() => navigateToQuestionnaire(event.type)}
            style={styles.startButton}
          >
            Commencer l'évaluation
          </Button>
        )}
      </Card>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.calendarCard}>
        <Typography variant="h2" style={styles.title}>
          Calendrier des évaluations
        </Typography>

        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            ...events,
            [selectedDate]: {
              ...events[selectedDate],
              selected: true,
              selectedColor: theme.colors.primary.main,
            },
          }}
          markingType="multi-dot"
          theme={{
            calendarBackground: theme.colors.background.default,
            selectedDayBackgroundColor: theme.colors.primary.main,
            selectedDayTextColor: theme.colors.primary.contrastText,
            todayTextColor: theme.colors.primary.main,
            dayTextColor: theme.colors.text.primary,
            textDisabledColor: theme.colors.text.disabled,
            monthTextColor: theme.colors.text.primary,
            textMonthFontFamily: theme.fonts.semiBold,
            textDayFontFamily: theme.fonts.regular,
            textDayHeaderFontFamily: theme.fonts.medium,
          }}
        />
      </Card>

      {selectedDate && (
        <View style={styles.eventsSection}>
          <Typography variant="h3" style={styles.eventsTitle}>
            Évaluations du {selectedDate}
          </Typography>
          {renderEventList()}
        </View>
      )}

      <Card style={styles.summaryCard}>
        <Typography variant="h3" style={styles.summaryTitle}>
          Résumé de la semaine
        </Typography>

        <View style={styles.summaryStats}>
          <View style={styles.statItem}>
            <Typography variant="h4">12</Typography>
            <Typography variant="caption">Évaluations</Typography>
          </View>
          <View style={styles.statItem}>
            <Typography variant="h4">85%</Typography>
            <Typography variant="caption">Vert</Typography>
          </View>
          <View style={styles.statItem}>
            <Typography variant="h4">10%</Typography>
            <Typography variant="caption">Orange</Typography>
          </View>
          <View style={styles.statItem}>
            <Typography variant="h4">5%</Typography>
            <Typography variant="caption">Rouge</Typography>
          </View>
        </View>
      </Card>

      <Button
        variant="outline"
        style={styles.exportButton}
        onPress={() => {/* TODO: Implémenter l'export */}}
      >
        Exporter le planning
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  calendarCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  eventsSection: {
    marginTop: theme.spacing.md,
  },
  eventsTitle: {
    marginBottom: theme.spacing.md,
  },
  eventCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  eventTime: {
    color: theme.colors.text.secondary,
  },
  completedEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  evaluationBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
  },
  evaluationText: {
    color: theme.colors.background.default,
    fontFamily: theme.fonts.medium,
  },
  startButton: {
    marginTop: theme.spacing.sm,
  },
  summaryCard: {
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.md,
  },
  summaryTitle: {
    marginBottom: theme.spacing.lg,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statItem: {
    alignItems: 'center',
    minWidth: '25%',
  },
  exportButton: {
    marginBottom: theme.spacing.lg,
  },
});

export default CalendrierScreen;
