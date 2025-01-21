import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { questionnaires } from '../../data/questionnaires';

const QuestionnaireScreen = ({ navigation, route }) => {
  const { type, date } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questionnaire, setQuestionnaire] = useState(null);

  useEffect(() => {
    setQuestionnaire(questionnaires[type]);
  }, [type]);

  const handleAnswer = (evaluation) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: evaluation
    }));

    if (currentQuestion < questionnaire.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // TODO: Sauvegarder les réponses
    navigation.navigate('EvaluationResult', {
      answers,
      date,
      type
    });
  };

  if (!questionnaire) return null;

  const currentQ = questionnaire.questions[currentQuestion];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.progressCard}>
        <Typography variant="subtitle2" color="secondary">
          Question {currentQuestion + 1} sur {questionnaire.questions.length}
        </Typography>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestion + 1) / questionnaire.questions.length) * 100}%` }
            ]} 
          />
        </View>
      </Card>

      <Card style={styles.questionCard}>
        <Typography variant="h3" style={styles.question}>
          {currentQ.question}
        </Typography>
        
        <Typography variant="body1" style={styles.answer}>
          {currentQ.answer}
        </Typography>

        <View style={styles.evaluationButtons}>
          <Button
            onPress={() => handleAnswer('Rouge')}
            style={[styles.evaluationButton, { backgroundColor: `#${currentQ.evaluation.Rouge}` }]}
          >
            Rouge
          </Button>
          <Button
            onPress={() => handleAnswer('Orange')}
            style={[styles.evaluationButton, { backgroundColor: `#${currentQ.evaluation.Orange}` }]}
          >
            Orange
          </Button>
          <Button
            onPress={() => handleAnswer('Vert')}
            style={[styles.evaluationButton, { backgroundColor: `#${currentQ.evaluation.Vert}` }]}
          >
            Vert
          </Button>
        </View>
      </Card>

      <View style={styles.navigation}>
        <Button
          variant="outline"
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
          style={styles.navigationButton}
        >
          Précédent
        </Button>
        
        {currentQuestion === questionnaire.questions.length - 1 && (
          <Button
            onPress={handleSubmit}
            style={styles.navigationButton}
          >
            Terminer
          </Button>
        )}
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
  progressCard: {
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
  },
  progressBar: {
    height: 4,
    backgroundColor: theme.colors.border.light,
    borderRadius: theme.radius.round,
    marginTop: theme.spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.radius.round,
  },
  questionCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  question: {
    marginBottom: theme.spacing.md,
  },
  answer: {
    marginBottom: theme.spacing.xl,
    color: theme.colors.text.secondary,
  },
  evaluationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  evaluationButton: {
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  navigationButton: {
    flex: 1,
    marginHorizontal: theme.spacing.xs,
  },
});

export default QuestionnaireScreen;
