import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { illustrations } from '../../constants/assets';
import { calculateStatistics } from '../../utils/evaluation';

const QuestionnaireImageScreen = ({ route, navigation }) => {
  const { questionnaire, type } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questionnaire[currentQuestionIndex];
  const totalQuestions = questionnaire.length;

  const getIllustrationForQuestion = (question) => {
    // Map questions to specific illustrations
    // This would need to be configured based on your illustrations
    return illustrations.questionnaire.default;
  };

  const handleAnswer = (evaluation) => {
    const newAnswers = [...answers, { ...currentQuestion, evaluation }];
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final statistics
      const stats = calculateStatistics(newAnswers);
      navigation.navigate('QuestionnaireResult', {
        stats,
        type,
        answers: newAnswers,
      });
    }
  };

  const getEvaluationButtonStyle = (evaluation) => ({
    ...styles.evaluationButton,
    backgroundColor: theme.colors.evaluation[evaluation.toLowerCase()],
  });

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.progressCard}>
        <Typography variant="subtitle1" style={styles.progressText}>
          Question {currentQuestionIndex + 1} sur {totalQuestions}
        </Typography>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              },
            ]}
          />
        </View>
      </Card>

      <Card style={styles.questionCard}>
        <Image
          source={getIllustrationForQuestion(currentQuestion)}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Typography variant="h3" style={styles.question}>
          {currentQuestion.question}
        </Typography>

        <View style={styles.evaluationButtons}>
          <Button
            style={getEvaluationButtonStyle('Vert')}
            onPress={() => handleAnswer('Vert')}
          >
            <Typography style={styles.evaluationText}>Vert</Typography>
          </Button>
          <Button
            style={getEvaluationButtonStyle('Jaune')}
            onPress={() => handleAnswer('Jaune')}
          >
            <Typography style={styles.evaluationText}>Jaune</Typography>
          </Button>
          <Button
            style={getEvaluationButtonStyle('Rouge')}
            onPress={() => handleAnswer('Rouge')}
          >
            <Typography style={styles.evaluationText}>Rouge</Typography>
          </Button>
        </View>

        <Typography variant="body2" style={styles.answer}>
          {currentQuestion.answer}
        </Typography>
      </Card>

      {currentQuestionIndex > 0 && (
        <Button
          variant="outline"
          onPress={() => {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswers(answers.slice(0, -1));
          }}
          style={styles.backButton}
        >
          Question précédente
        </Button>
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
  progressCard: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  progressText: {
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  progressBar: {
    height: 4,
    backgroundColor: theme.colors.background.light,
    borderRadius: theme.radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.radius.full,
  },
  questionCard: {
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    height: 200,
    marginBottom: theme.spacing.lg,
  },
  question: {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  evaluationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    width: '100%',
  },
  evaluationButton: {
    flex: 1,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  evaluationText: {
    color: theme.colors.background.default,
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
  },
  answer: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
  },
  backButton: {
    marginTop: theme.spacing.lg,
  },
});

export default QuestionnaireImageScreen;
