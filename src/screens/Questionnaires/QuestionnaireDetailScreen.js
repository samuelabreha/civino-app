import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { saveResponse } from '../../redux/slices/questionnairesSlice';

const RESPONSE_TYPES = {
  GOOD: { value: 3, color: '#4CAF50', icon: 'emoticon' },
  MEDIUM: { value: 2, color: '#FF9800', icon: 'emoticon-neutral' },
  BAD: { value: 1, color: '#F44336', icon: 'emoticon-sad' },
};

const ResponseButton = ({ type, selected, onPress }) => (
  <TouchableOpacity
    style={[
      styles.responseButton,
      { borderColor: type.color },
      selected && { backgroundColor: type.color },
    ]}
    onPress={onPress}
  >
    <Icon
      name={type.icon}
      size={30}
      color={selected ? '#FFFFFF' : type.color}
    />
  </TouchableOpacity>
);

const QuestionnaireDetailScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const dispatch = dispatch();
  const { id: questionnaireId } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});

  // Exemple de questions (à remplacer par les vraies questions depuis l'API)
  const questions = [
    {
      id: 1,
      text: "Comment s'est passée la communication aujourd'hui ?",
      image: require('../../assets/images/communication.png'),
      category: 'communication',
    },
    // Ajoutez d'autres questions ici
  ];

  const handleResponse = (questionId, response) => {
    setResponses({
      ...responses,
      [questionId]: response,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Enregistrer les réponses
      dispatch(saveResponse({ questionnaireId, responses }));
      navigation.navigate('QuestionnaireResult', {
        responses,
        questionnaireId,
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {`${currentQuestion + 1} / ${questions.length}`}
          </Text>
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

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          {question.image && (
            <Image
              source={question.image}
              style={styles.questionImage}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.responseContainer}>
          {Object.entries(RESPONSE_TYPES).map(([key, type]) => (
            <ResponseButton
              key={key}
              type={type}
              selected={responses[question.id] === type.value}
              onPress={() => handleResponse(question.id, type.value)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 0 && styles.disabled]}
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <Icon name="chevron-left" size={24} color="#FFFFFF" />
          <Text style={styles.navButtonText}>{t('common.previous')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            !responses[question.id] && styles.disabled,
          ]}
          onPress={handleNext}
          disabled={!responses[question.id]}
        >
          <Text style={styles.navButtonText}>
            {currentQuestion === questions.length - 1
              ? t('common.finish')
              : t('common.next')}
          </Text>
          <Icon name="chevron-right" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  progressContainer: {
    padding: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  questionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  responseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  responseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
    justifyContent: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 5,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default QuestionnaireDetailScreen;
