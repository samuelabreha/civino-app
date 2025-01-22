import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SchoolMorningScreen = ({ navigation }) => {
  const [selectedEmotions, setSelectedEmotions] = useState([]);

  const emotions = [
    { id: 1, name: 'Très Content', icon: '😄' },
    { id: 2, name: 'Content', icon: '🙂' },
    { id: 3, name: 'Neutre', icon: '😐' },
    { id: 4, name: 'Pas Content', icon: '🙁' },
    { id: 5, name: 'Très Pas Content', icon: '😢' },
  ];

  const toggleEmotion = (emotionId) => {
    if (selectedEmotions.includes(emotionId)) {
      setSelectedEmotions(selectedEmotions.filter(id => id !== emotionId));
    } else {
      setSelectedEmotions([...selectedEmotions, emotionId]);
    }
  };

  const handleSave = () => {
    // Sauvegarder les émotions sélectionnées
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="wb-sunny" size={40} color="#FFC107" />
        <Text style={styles.title}>École - Matin</Text>
      </View>

      <View style={styles.emotionsContainer}>
        {emotions.map((emotion) => (
          <TouchableOpacity
            key={emotion.id}
            style={[
              styles.emotionButton,
              selectedEmotions.includes(emotion.id) && styles.selectedEmotion,
            ]}
            onPress={() => toggleEmotion(emotion.id)}
          >
            <Text style={styles.emotionIcon}>{emotion.icon}</Text>
            <Text style={styles.emotionText}>{emotion.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notes d'Observation</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#2196F3" />
          <Text style={styles.addButtonText}>Ajouter une note</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Icon name="save" size={24} color="#FFFFFF" />
        <Text style={styles.saveButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  emotionsContainer: {
    padding: 20,
  },
  emotionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedEmotion: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
  emotionIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  emotionText: {
    fontSize: 16,
    color: '#333',
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#2196F3',
    marginLeft: 10,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SchoolMorningScreen;
