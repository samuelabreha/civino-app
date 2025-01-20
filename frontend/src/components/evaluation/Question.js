import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const RESPONSE_OPTIONS = {
  VERT: {
    value: 'vert',
    color: '#4CAF50',
    icon: 'checkbox-marked-circle',
    label: 'Très bien',
    points: 3,
  },
  ORANGE: {
    value: 'orange',
    color: '#FF9800',
    icon: 'alert-circle',
    label: 'En progression',
    points: 2,
  },
  ROUGE: {
    value: 'rouge',
    color: '#f44336',
    icon: 'close-circle',
    label: 'À améliorer',
    points: 1,
  },
};

const Question = ({
  question,
  type,
  selectedAnswer,
  onAnswer,
  imageUrl,
  animatedValue = new Animated.Value(1),
}) => {
  const handleAnswer = (answer) => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onAnswer(answer);
  };

  const ResponseButton = ({ option }) => (
    <TouchableOpacity
      style={[
        styles.responseButton,
        selectedAnswer === option.value && {
          backgroundColor: option.color,
          borderColor: option.color,
        },
      ]}
      onPress={() => handleAnswer(option.value)}
    >
      <Icon
        name={option.icon}
        size={24}
        color={selectedAnswer === option.value ? '#fff' : option.color}
      />
      <Text
        style={[
          styles.responseText,
          selectedAnswer === option.value && styles.selectedResponseText,
        ]}
      >
        {option.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: animatedValue }],
        },
      ]}
    >
      {type === 'image' && imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}

      <Text style={styles.question}>{question}</Text>

      <View style={styles.responseContainer}>
        {Object.values(RESPONSE_OPTIONS).map((option) => (
          <ResponseButton key={option.value} option={option} />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: width - 80,
    height: (width - 80) * 0.75,
    borderRadius: 10,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  responseContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  responseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    marginBottom: 10,
  },
  responseText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  selectedResponseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Question;
