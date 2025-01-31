import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QuestionnaireCard = ({ title, description, onPress, icon, color }) => (
  <TouchableOpacity style={[styles.card, { borderColor: color }]} onPress={onPress}>
    <Icon name={icon} size={30} color={color} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
    <Icon name="chevron-right" size={24} color={color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default QuestionnaireCard;
