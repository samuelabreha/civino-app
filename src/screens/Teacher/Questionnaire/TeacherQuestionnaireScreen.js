import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TeacherQuestionnaireScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleContinue = () => {
    navigation.navigate('QuestionnaireDetail', {
      date: selectedDate,
      context: 'school',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="question-answer" size={40} color="#2196F3" />
        <Text style={styles.title}>Questionnaire École</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>Sélectionner une Date</Text>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#2196F3' },
          }}
          theme={{
            todayTextColor: '#2196F3',
            selectedDayBackgroundColor: '#2196F3',
            selectedDayTextColor: '#FFFFFF',
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Instructions</Text>
        <Text style={styles.infoText}>
          1. Choisissez une date dans le calendrier{'\n'}
          2. Le questionnaire concernera uniquement le contexte scolaire{'\n'}
          3. Vous pourrez naviguer entre les questions et télécharger le rapport
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.continueButton, !selectedDate && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!selectedDate}
      >
        <Icon name="navigate-next" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Commencer le Questionnaire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => navigation.navigate('ProgressReport')}
      >
        <Icon name="file-download" size={24} color="#2196F3" />
        <Text style={styles.downloadButtonText}>
          Télécharger un Rapport Précédent
        </Text>
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
  calendarContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  buttonDisabled: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  downloadButtonText: {
    color: '#2196F3',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default TeacherQuestionnaireScreen;
