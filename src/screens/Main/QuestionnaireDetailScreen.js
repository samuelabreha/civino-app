import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebaseService } from '../../services/firebase.service';

const AnswerOption = ({ option, selected, onSelect, type }) => {
  const getColor = () => {
    if (!selected) return '#E0E0E0';
    switch (option.value) {
      case 3:
        return '#4CAF50';
      case 2:
        return '#FFC107';
      case 1:
        return '#F44336';
      default:
        return '#E0E0E0';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.answerOption,
        selected && { borderColor: getColor(), backgroundColor: `${getColor()}10` },
      ]}
      onPress={() => onSelect(option)}
    >
      {type === 'image' ? (
        <Image
          source={{ uri: option.imageUrl }}
          style={styles.optionImage}
          resizeMode="contain"
        />
      ) : (
        <Text style={[styles.optionText, selected && { color: getColor() }]}>
          {option.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const QuestionnaireDetailScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { id } = route.params;
  const user = useSelector(state => state.auth.user);
  
  const [questionnaire, setQuestionnaire] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchQuestionnaire();
  }, []);

  const fetchQuestionnaire = async () => {
    try {
      const data = await firebaseService.getQuestionnaireById(id);
      setQuestionnaire(data);
      // Load previous answers if any
      const previousAnswers = await firebaseService.getQuestionnaireAnswers(id, user.uid);
      if (previousAnswers) {
        setAnswers(previousAnswers.answers);
      }
    } catch (error) {
      console.error('Error fetching questionnaire:', error);
      Alert.alert(
        t('common.error'),
        t('questionnaire.errorLoading'),
        [{ text: t('common.ok'), onPress: () => navigation.goBack() }]
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (option) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const navigateQuestion = (direction) => {
    if (direction === 'next' && currentQuestionIndex < questionnaire.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    const totalQuestions = questionnaire.questions.length;
    const answeredQuestions = Object.keys(answers).length;
    const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.value, 0);
    const averageScore = totalPoints / totalQuestions;

    return {
      score: averageScore,
      completed: answeredQuestions === totalQuestions,
      status: averageScore >= 2.5 ? 'excellent' : averageScore >= 1.5 ? 'progress' : 'improve',
    };
  };

  const handleSubmit = async () => {
    const result = calculateScore();
    
    if (!result.completed) {
      Alert.alert(
        t('common.warning'),
        t('questionnaire.incompleteWarning'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          { text: t('common.continue'), onPress: submitAnswers },
        ]
      );
      return;
    }

    submitAnswers();
  };

  const submitAnswers = async () => {
    try {
      setSubmitting(true);
      const result = calculateScore();
      
      await firebaseService.submitQuestionnaireAnswers({
        questionnaireId: id,
        userId: user.uid,
        answers,
        score: result.score,
        status: result.status,
        submittedAt: new Date().toISOString(),
      });

      Alert.alert(
        t('common.success'),
        t('questionnaire.submitSuccess'),
        [{ text: t('common.ok'), onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      console.error('Error submitting answers:', error);
      Alert.alert(
        t('common.error'),
        t('questionnaire.submitError'),
        [{ text: t('common.ok') }]
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  const currentQuestion = questionnaire.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {t('questionnaire.questionProgress', {
              current: currentQuestionIndex + 1,
              total: questionnaire.questions.length,
            })}
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${((currentQuestionIndex + 1) / questionnaire.questions.length) * 100}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.text}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <AnswerOption
                key={index}
                option={option}
                selected={answers[currentQuestionIndex]?.id === option.id}
                onSelect={handleAnswer}
                type={questionnaire.type}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestionIndex === 0 && styles.navButtonDisabled]}
          onPress={() => navigateQuestion('prev')}
          disabled={currentQuestionIndex === 0}
        >
          <Icon name="chevron-left" size={24} color={currentQuestionIndex === 0 ? '#9E9E9E' : '#2196F3'} />
          <Text style={[styles.navButtonText, currentQuestionIndex === 0 && styles.navButtonTextDisabled]}>
            {t('common.previous')}
          </Text>
        </TouchableOpacity>

        {currentQuestionIndex === questionnaire.questions.length - 1 ? (
          <TouchableOpacity
            style={[styles.submitButton, submitting && styles.submitButtonDisabled]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.submitButtonText}>{t('common.submit')}</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigateQuestion('next')}
          >
            <Text style={styles.navButtonText}>{t('common.next')}</Text>
            <Icon name="chevron-right" size={24} color="#2196F3" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  questionContainer: {
    flex: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  optionsContainer: {
    marginTop: 20,
  },
  answerOption: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  optionImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 16,
    color: '#2196F3',
    marginHorizontal: 5,
  },
  navButtonTextDisabled: {
    color: '#9E9E9E',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuestionnaireDetailScreen;
