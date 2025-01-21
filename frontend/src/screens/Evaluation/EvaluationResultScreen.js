import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { questionnaires } from '../../data/questionnaires';

const EvaluationResultScreen = ({ navigation, route }) => {
  const { answers, date, type } = route.params;
  const questionnaire = questionnaires[type];

  const calculateResults = () => {
    const total = Object.keys(answers).length;
    const counts = {
      Rouge: 0,
      Orange: 0,
      Vert: 0
    };

    Object.values(answers).forEach(answer => {
      counts[answer]++;
    });

    return {
      total,
      rouge: (counts.Rouge / total) * 100,
      orange: (counts.Orange / total) * 100,
      vert: (counts.Vert / total) * 100,
    };
  };

  const results = calculateResults();

  const getEvaluationColor = (evaluation) => {
    switch (evaluation) {
      case 'Rouge':
        return theme.colors.evaluation.rouge;
      case 'Orange':
        return theme.colors.evaluation.orange;
      case 'Vert':
        return theme.colors.evaluation.vert;
      default:
        return theme.colors.text.primary;
    }
  };

  const handleDownloadPDF = () => {
    // TODO: Implémenter la génération et le téléchargement du PDF
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.summaryCard}>
        <Typography variant="h2" style={styles.title}>
          Résultats de l'évaluation
        </Typography>
        
        <Typography variant="subtitle1" style={styles.subtitle}>
          {questionnaire.title} - {date}
        </Typography>

        <View style={styles.resultsContainer}>
          {Object.entries(answers).map(([index, evaluation]) => {
            const question = questionnaire.questions[index];
            return (
              <View key={index} style={styles.questionResult}>
                <Typography variant="body2" style={styles.questionText}>
                  {question.question}
                </Typography>
                <Typography
                  variant="body2"
                  style={[
                    styles.evaluationText,
                    { color: getEvaluationColor(evaluation) }
                  ]}
                >
                  {evaluation}
                </Typography>
              </View>
            );
          })}
        </View>
      </Card>

      <Card style={styles.statisticsCard}>
        <Typography variant="h3" style={styles.statisticsTitle}>
          Statistiques
        </Typography>

        <View style={styles.statisticsContainer}>
          <View style={styles.statItem}>
            <Typography variant="body1" color="error">
              Rouge: {results.rouge.toFixed(1)}%
            </Typography>
            <View style={[styles.statBar, { width: `${results.rouge}%`, backgroundColor: theme.colors.evaluation.rouge }]} />
          </View>

          <View style={styles.statItem}>
            <Typography variant="body1" color="warning">
              Orange: {results.orange.toFixed(1)}%
            </Typography>
            <View style={[styles.statBar, { width: `${results.orange}%`, backgroundColor: theme.colors.evaluation.orange }]} />
          </View>

          <View style={styles.statItem}>
            <Typography variant="body1" color="success">
              Vert: {results.vert.toFixed(1)}%
            </Typography>
            <View style={[styles.statBar, { width: `${results.vert}%`, backgroundColor: theme.colors.evaluation.vert }]} />
          </View>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button
          variant="outline"
          style={styles.actionButton}
          onPress={() => navigation.navigate('Calendar')}
        >
          Retour au calendrier
        </Button>
        
        <Button
          style={styles.actionButton}
          onPress={handleDownloadPDF}
        >
          Télécharger PDF
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  summaryCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
    color: theme.colors.text.secondary,
  },
  resultsContainer: {
    gap: theme.spacing.sm,
  },
  questionResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  questionText: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  evaluationText: {
    fontFamily: theme.fonts.medium,
  },
  statisticsCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  statisticsTitle: {
    marginBottom: theme.spacing.lg,
  },
  statisticsContainer: {
    gap: theme.spacing.md,
  },
  statItem: {
    marginBottom: theme.spacing.sm,
  },
  statBar: {
    height: 8,
    borderRadius: theme.radius.round,
    marginTop: theme.spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
  },
});

export default EvaluationResultScreen;
