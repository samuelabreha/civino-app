import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const EVALUATION_TYPES = {
  ECOLE: {
    title: 'École',
    icon: 'school',
    color: '#2196F3',
    questions: 30,
  },
  MAISON: {
    title: 'Maison',
    icon: 'home',
    color: '#4CAF50',
    questions: 9,
  },
  MAISON_QUARTIER: {
    title: 'Maison de quartier',
    icon: 'home-group',
    color: '#FF9800',
    questions: 20,
  },
};

const QuestionnaireCard = ({ type, onPress, progress }) => {
  const questionnaire = EVALUATION_TYPES[type];

  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: questionnaire.color }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: questionnaire.color }]}>
          <Icon name={questionnaire.icon} size={30} color="#fff" />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{questionnaire.title}</Text>
          <Text style={styles.questions}>
            {questionnaire.questions} questions
          </Text>
          {progress && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${progress}%`,
                      backgroundColor: questionnaire.color,
                    },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
          )}
        </View>
        <Icon name="chevron-right" size={24} color="#666" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderWidth: 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  questions: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    width: 35,
  },
});

export default QuestionnaireCard;
