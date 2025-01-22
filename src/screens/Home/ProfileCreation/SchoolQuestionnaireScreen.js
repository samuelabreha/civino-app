import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SchoolQuestionnaireScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: t('schoolQuestionnaire.question1'),
      options: [
        { id: 'a', text: t('schoolQuestionnaire.q1_option1') },
        { id: 'b', text: t('schoolQuestionnaire.q1_option2') },
        { id: 'c', text: t('schoolQuestionnaire.q1_option3') },
      ],
    },
    {
      id: 2,
      text: t('schoolQuestionnaire.question2'),
      options: [
        { id: 'a', text: t('schoolQuestionnaire.q2_option1') },
        { id: 'b', text: t('schoolQuestionnaire.q2_option2') },
        { id: 'c', text: t('schoolQuestionnaire.q2_option3') },
      ],
    },
    // Add more questions
  ];

  const handleAnswer = (questionId, answerId) => {
    setAnswers({
      ...answers,
      [questionId]: answerId,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save answers and navigate to next screen
      navigation.navigate('CenterQuestionnaire');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleDownloadPDF = () => {
    // Implement PDF download functionality
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('schoolQuestionnaire.title')}</Text>
        <Text style={styles.subtitle}>
          {t('schoolQuestionnaire.questionCount', {
            current: currentQuestion + 1,
            total: questions.length,
          })}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestionData.text}</Text>
          <View style={styles.optionsContainer}>
            {currentQuestionData.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionButton,
                  answers[currentQuestionData.id] === option.id &&
                    styles.selectedOption,
                ]}
                onPress={() => handleAnswer(currentQuestionData.id, option.id)}
              >
                <Text
                  style={[
                    styles.optionText,
                    answers[currentQuestionData.id] === option.id &&
                      styles.selectedOptionText,
                  ]}
                >
                  {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 0 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <Icon
            name="chevron-left"
            size={24}
            color={currentQuestion === 0 ? '#999' : '#FFFFFF'}
          />
          <Text
            style={[
              styles.navButtonText,
              currentQuestion === 0 && styles.disabledButtonText,
            ]}
          >
            {t('common.previous')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pdfButton} onPress={handleDownloadPDF}>
          <Icon name="file-pdf-box" size={24} color="#FFFFFF" />
          <Text style={styles.pdfButtonText}>{t('common.downloadPDF')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            !answers[currentQuestionData.id] && styles.disabledButton,
          ]}
          onPress={handleNext}
          disabled={!answers[currentQuestionData.id]}
        >
          <Text
            style={[
              styles.navButtonText,
              !answers[currentQuestionData.id] && styles.disabledButtonText,
            ]}
          >
            {currentQuestion === questions.length - 1
              ? t('common.finish')
              : t('common.next')}
          </Text>
          <Icon
            name="chevron-right"
            size={24}
            color={!answers[currentQuestionData.id] ? '#999' : '#FFFFFF'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  questionContainer: {
    padding: 20,
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
  optionButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#2196F3',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  disabledButtonText: {
    color: '#999',
  },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  pdfButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  progressContainer: {
    padding: 20,
    paddingTop: 0,
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
});

export default SchoolQuestionnaireScreen;
