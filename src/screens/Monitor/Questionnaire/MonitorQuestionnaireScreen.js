import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const MonitorQuestionnaireScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedContext, setSelectedContext] = useState('school');

  const contexts = [
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleContinue = () => {
    navigation.navigate('QuestionnaireDetail', {
      date: selectedDate,
      context: selectedContext,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="question-answer" size={40} color="#2196F3" />
        <Text style={styles.title}>Questionnaire Moniteur FINC</Text>
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

      <View style={styles.contextContainer}>
        <Text style={styles.sectionTitle}>Sélectionner le Contexte</Text>
        <View style={styles.contextList}>
          {contexts.map((context) => (
            <TouchableOpacity
              key={context.id}
              style={[
                styles.contextCard,
                selectedContext === context.id && styles.contextCardSelected,
              ]}
              onPress={() => setSelectedContext(context.id)}
            >
              <Icon
                name={context.icon}
                size={32}
                color={selectedContext === context.id ? '#FFFFFF' : '#2196F3'}
              />
              <Text
                style={[
                  styles.contextLabel,
                  selectedContext === context.id && styles.contextLabelSelected,
                ]}
              >
                {context.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Instructions</Text>
        <Text style={styles.infoText}>
          1. Choisissez une date dans le calendrier{'\n'}
          2. Sélectionnez le contexte approprié{'\n'}
          3. Remplissez le questionnaire{'\n'}
          4. Vous pourrez télécharger le rapport à la fin
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          (!selectedDate || !selectedContext) && styles.buttonDisabled,
        ]}
        onPress={handleContinue}
        disabled={!selectedDate || !selectedContext}
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
  contextContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contextList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contextCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
    minWidth: 100,
  },
  contextCardSelected: {
    backgroundColor: '#2196F3',
  },
  contextLabel: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 5,
    textAlign: 'center',
  },
  contextLabelSelected: {
    color: '#FFFFFF',
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

export default MonitorQuestionnaireScreen;
