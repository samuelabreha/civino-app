import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateSelectionScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState('school');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleContinue = () => {
    navigation.navigate('QuestionnaireDetail', {
      date: selectedDate,
      type: selectedQuestionnaire,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendarContainer}>
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

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Type de Questionnaire</Text>
        <Picker
          selectedValue={selectedQuestionnaire}
          onValueChange={(value) => setSelectedQuestionnaire(value)}
          style={styles.picker}
        >
          <Picker.Item label="École" value="school" />
          <Picker.Item label="Maison de quartier" value="center" />
          <Picker.Item label="Maison" value="home" />
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedDate && styles.buttonDisabled]}
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
  pickerContainer: {
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
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  button: {
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

export default DateSelectionScreen;
