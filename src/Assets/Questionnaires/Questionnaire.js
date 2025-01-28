import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import questionsEcole from './data/questionnaire_ecole.json';
import questionsMaison from './data/questionnaire_maison.json';
import questionsMaisonQuartier from './data/questionnaire_maison_quartier.json';

const Questionnaire = ({ type }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    switch (type) {
      case 'ecole':
        setQuestions(questionsEcole);
        break;
      case 'maison':
        setQuestions(questionsMaison);
        break;
      case 'maison_quartier':
        setQuestions(questionsMaisonQuartier);
        break;
      default:
        setQuestions([]);
    }
  }, [type]);

  return (
    <FlatList
      data={questions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={require(`./assets/${item.image}`)} style={styles.image} />
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 14,
    color: '#666',
  },
});

export default Questionnaire;
