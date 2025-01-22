import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuestionnaireScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('school');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleContinue = () => {
    navigation.navigate('QuestionnaireDetail', {
      date: selectedDate,
      type: selectedType,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="question-answer" size={40} color="#2196F3" />
        <Text style={styles.title}>Questionnaire</Text>
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

      <View style={styles.typeContainer}>
        <Text style={styles.sectionTitle}>Type de Questionnaire</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(value) => setSelectedType(value)}
          style={styles.picker}
        >
          <Picker.Item label="École" value="school" />
          <Picker.Item label="Maison de quartier" value="center" />
          <Picker.Item label="Maison" value="home" />
        </Picker>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Instructions</Text>
        <Text style={styles.infoText}>
          1. Choisissez une date dans le calendrier{'\n'}
          2. Sélectionnez le type de questionnaire{'\n'}
          3. Appuyez sur Continuer pour commencer
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.continueButton, !selectedDate && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!selectedDate}
      >
        <Icon name="navigate-next" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Continuer</Text>
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
  typeContainer: {
    margin: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  picker: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
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
});

export default QuestionnaireScreen;
