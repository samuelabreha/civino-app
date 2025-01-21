import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../../../theme';
import { Card, Typography, Button } from '../../../components/common';

const RapportProgressionScreen = ({ route }) => {
  const { eleve } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [reportType, setReportType] = useState('daily');

  const reports = {
    daily: {
      title: 'Rapport journalier',
      items: [
        {
          time: '08:30',
          activity: 'Arrivée en classe',
          evaluation: 'Vert',
          notes: 'Arrivée à l\'heure, salutations polies',
        },
        {
          time: '09:15',
          activity: 'Activité mathématiques',
          evaluation: 'Vert',
          notes: 'Participation active, aide ses camarades',
        },
        {
          time: '10:30',
          activity: 'Pause récréation',
          evaluation: 'Orange',
          notes: 'Petit conflit résolu avec dialogue',
        },
        {
          time: '11:00',
          activity: 'Activité lecture',
          evaluation: 'Vert',
          notes: 'Concentration et participation excellentes',
        },
        {
          time: '12:00',
          activity: 'Déjeuner',
          evaluation: 'Vert',
          notes: 'Comportement respectueux',
        },
      ],
    },
    weekly: {
      title: 'Rapport hebdomadaire',
      items: [
        {
          day: 'Lundi',
          summary: 'Très bonne journée',
          evaluation: 'Vert',
          notes: 'Participation active dans toutes les activités',
        },
        {
          day: 'Mardi',
          summary: 'Quelques difficultés',
          evaluation: 'Orange',
          notes: 'Frustration pendant l\'activité mathématiques',
        },
        {
          day: 'Mercredi',
          summary: 'Excellente journée',
          evaluation: 'Vert',
          notes: 'Progrès notable dans la gestion des émotions',
        },
        {
          day: 'Jeudi',
          summary: 'Très bien',
          evaluation: 'Vert',
          notes: 'Aide spontanée aux camarades',
        },
        {
          day: 'Vendredi',
          summary: 'Parfait',
          evaluation: 'Vert',
          notes: 'Application des stratégies apprises',
        },
      ],
    },
    monthly: {
      title: 'Bilan mensuel',
      items: [
        {
          week: 'Semaine 1',
          summary: 'Adaptation progressive',
          evaluation: 'Orange',
          notes: 'Période d\'adaptation aux nouvelles règles',
        },
        {
          week: 'Semaine 2',
          summary: 'Amélioration',
          evaluation: 'Vert',
          notes: 'Meilleure compréhension des attentes',
        },
        {
          week: 'Semaine 3',
          summary: 'Consolidation',
          evaluation: 'Vert',
          notes: 'Application constante des règles',
        },
        {
          week: 'Semaine 4',
          summary: 'Excellence',
          evaluation: 'Vert',
          notes: 'Comportement exemplaire et leadership positif',
        },
      ],
    },
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const getEvaluationColor = (evaluation) => {
    switch (evaluation.toLowerCase()) {
      case 'vert':
        return theme.colors.evaluation.vert;
      case 'orange':
        return theme.colors.evaluation.orange;
      case 'rouge':
        return theme.colors.evaluation.rouge;
      default:
        return theme.colors.text.primary;
    }
  };

  const renderReportItems = () => {
    const currentReport = reports[reportType];
    return currentReport.items.map((item, index) => (
      <Card key={index} style={styles.reportItem}>
        <View style={styles.reportItemHeader}>
          <Typography variant="subtitle1">
            {item.time || item.day || item.week}
          </Typography>
          <View style={[
            styles.evaluationBadge,
            { backgroundColor: getEvaluationColor(item.evaluation) }
          ]}>
            <Typography
              variant="caption"
              style={styles.evaluationText}
            >
              {item.evaluation}
            </Typography>
          </View>
        </View>

        <Typography variant="subtitle2" style={styles.activityTitle}>
          {item.activity || item.summary}
        </Typography>

        <Typography variant="body2" style={styles.notes}>
          {item.notes}
        </Typography>
      </Card>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Typography variant="h2" style={styles.title}>
          Rapport de progression
        </Typography>
        <Typography variant="subtitle1" style={styles.subtitle}>
          {eleve.nom} - {eleve.classe}
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
            Journalier
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
        <View style={styles.reportContent}>
          <Typography variant="h3" style={styles.reportTitle}>
            {reports[reportType].title}
          </Typography>
          {renderReportItems()}
          
          <Card style={styles.recommendationsCard}>
            <Typography variant="h3" style={styles.recommendationsTitle}>
              Recommandations
            </Typography>
            <Typography variant="body1" style={styles.recommendationText}>
              - Continuer à encourager la participation active
              - Renforcer les comportements positifs observés
              - Maintenir le dialogue ouvert avec les parents
              - Poursuivre l'utilisation des stratégies de gestion des émotions
            </Typography>
          </Card>

          <View style={styles.actionButtons}>
            <Button
              variant="outline"
              style={styles.actionButton}
              onPress={() => {/* TODO: Implémenter le partage */}}
            >
              Partager
            </Button>
            <Button
              variant="primary"
              style={styles.actionButton}
              onPress={() => {/* TODO: Implémenter l'export PDF */}}
            >
              Exporter PDF
            </Button>
          </View>
        </View>
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
  headerCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
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
  reportContent: {
    marginTop: theme.spacing.md,
  },
  reportTitle: {
    marginBottom: theme.spacing.lg,
  },
  reportItem: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  reportItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
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
  activityTitle: {
    marginBottom: theme.spacing.xs,
  },
  notes: {
    color: theme.colors.text.secondary,
  },
  recommendationsCard: {
    padding: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  recommendationsTitle: {
    marginBottom: theme.spacing.md,
  },
  recommendationText: {
    color: theme.colors.text.secondary,
    lineHeight: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  actionButton: {
    flex: 1,
  },
});

export default RapportProgressionScreen;
