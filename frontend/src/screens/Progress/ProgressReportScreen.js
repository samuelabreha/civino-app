import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';

const ProgressReportScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reportType, setReportType] = useState('daily');

  const reports = {
    daily: {
      title: 'Rapport quotidien',
      items: [
        { time: '08:00', activity: 'Arrivée à l'école', evaluation: 'Vert' },
        { time: '09:30', activity: 'Activité en classe', evaluation: 'Orange' },
        { time: '12:00', activity: 'Déjeuner', evaluation: 'Vert' },
        { time: '14:00', activity: 'Travail en groupe', evaluation: 'Vert' },
        { time: '16:30', activity: 'Fin des cours', evaluation: 'Vert' },
      ],
    },
    weekly: {
      title: 'Rapport hebdomadaire',
      items: [
        { day: 'Lundi', summary: 'Bonne participation', evaluation: 'Vert' },
        { day: 'Mardi', summary: 'Quelques difficultés', evaluation: 'Orange' },
        { day: 'Mercredi', summary: 'Très bonne journée', evaluation: 'Vert' },
        { day: 'Jeudi', summary: 'Progrès constant', evaluation: 'Vert' },
        { day: 'Vendredi', summary: 'Excellence', evaluation: 'Vert' },
      ],
    },
    monthly: {
      title: 'Rapport mensuel',
      items: [
        { week: 'Semaine 1', summary: 'Adaptation progressive', evaluation: 'Orange' },
        { week: 'Semaine 2', summary: 'Amélioration notable', evaluation: 'Vert' },
        { week: 'Semaine 3', summary: 'Stabilité', evaluation: 'Vert' },
        { week: 'Semaine 4', summary: 'Excellent mois', evaluation: 'Vert' },
      ],
    },
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const getEvaluationColor = (evaluation) => {
    switch (evaluation) {
      case 'Vert':
        return theme.colors.evaluation.vert;
      case 'Orange':
        return theme.colors.evaluation.orange;
      case 'Rouge':
        return theme.colors.evaluation.rouge;
      default:
        return theme.colors.text.primary;
    }
  };

  const renderReportItems = () => {
    const currentReport = reports[reportType];
    return currentReport.items.map((item, index) => (
      <View key={index} style={styles.reportItem}>
        <View style={styles.reportItemHeader}>
          <Typography variant="subtitle2">
            {item.time || item.day || item.week}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: getEvaluationColor(item.evaluation) }}
          >
            {item.evaluation}
          </Typography>
        </View>
        <Typography variant="body1" style={styles.reportItemContent}>
          {item.activity || item.summary}
        </Typography>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.calendarCard}>
        <Typography variant="h2" style={styles.title}>
          Rapport de progression
        </Typography>

        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: theme.colors.primary.main,
            },
          }}
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

      <Card style={styles.reportTypeCard}>
        <View style={styles.reportTypeButtons}>
          <Button
            variant={reportType === 'daily' ? 'primary' : 'outline'}
            onPress={() => setReportType('daily')}
            style={styles.reportTypeButton}
          >
            Quotidien
          </Button>
          <Button
            variant={reportType === 'weekly' ? 'primary' : 'outline'}
            onPress={() => setReportType('weekly')}
            style={styles.reportTypeButton}
          >
            Hebdomadaire
          </Button>
          <Button
            variant={reportType === 'monthly' ? 'primary' : 'outline'}
            onPress={() => setReportType('monthly')}
            style={styles.reportTypeButton}
          >
            Mensuel
          </Button>
        </View>
      </Card>

      {selectedDate && (
        <Card style={styles.reportCard}>
          <Typography variant="h3" style={styles.reportTitle}>
            {reports[reportType].title}
          </Typography>
          <View style={styles.reportContent}>
            {renderReportItems()}
          </View>
          <Button
            variant="outline"
            style={styles.downloadButton}
            onPress={() => {/* TODO: Implémenter le téléchargement du rapport */}}
          >
            Télécharger PDF
          </Button>
        </Card>
      )}
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
  reportTypeCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  reportTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  reportTypeButton: {
    flex: 1,
  },
  reportCard: {
    padding: theme.spacing.lg,
  },
  reportTitle: {
    marginBottom: theme.spacing.lg,
  },
  reportContent: {
    gap: theme.spacing.md,
  },
  reportItem: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
    paddingBottom: theme.spacing.md,
  },
  reportItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  reportItemContent: {
    color: theme.colors.text.secondary,
  },
  downloadButton: {
    marginTop: theme.spacing.lg,
  },
});

export default ProgressReportScreen;
