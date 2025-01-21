import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const QuestionItem = ({ question, onAnswer, selectedAnswer }) => {
  const { t } = useTranslation();

  const renderAnswerOption = (value, color, label) => (
    <TouchableOpacity
      style={[
        styles.answerOption,
        { backgroundColor: color },
        selectedAnswer === value && styles.selectedAnswer,
      ]}
      onPress={() => onAnswer(value)}
    >
      <Text style={styles.answerText}>{t(label)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.text}</Text>
      
      {question.imageUrl && (
        <Image
          source={{ uri: question.imageUrl }}
          style={styles.questionImage}
          resizeMode="contain"
        />
      )}

      <View style={styles.answersContainer}>
        {renderAnswerOption(3, '#4CAF50', 'questionnaire.answers.good')}
        {renderAnswerOption(2, '#FFA726', 'questionnaire.answers.average')}
        {renderAnswerOption(1, '#EF5350', 'questionnaire.answers.poor')}
      </View>

      {question.description && (
        <Text style={styles.description}>{question.description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
  },
  answersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  answerOption: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedAnswer: {
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  answerText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  description: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default QuestionItem;
