import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProgressReportScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedReport, setSelectedReport] = useState('daily');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleDownload = () => {
    // Logique pour télécharger le rapport
  };

  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.pickerContainer}>
        <Text style={styles.sectionTitle}>Type de Rapport</Text>
        <Picker
          selectedValue={selectedReport}
          onValueChange={(value) => setSelectedReport(value)}
          style={styles.picker}
        >
          <Picker.Item label="Rapport Quotidien" value="daily" />
          <Picker.Item label="Rapport Hebdomadaire" value="weekly" />
          <Picker.Item label="Rapport Mensuel" value="monthly" />
        </Picker>
      </View>

      <View style={styles.reportPreview}>
        <Text style={styles.sectionTitle}>Aperçu du Rapport</Text>
        {selectedDate ? (
          <View style={styles.previewContent}>
            <Text style={styles.previewText}>
              Rapport {selectedReport === 'daily' ? 'quotidien' : 
                      selectedReport === 'weekly' ? 'hebdomadaire' : 'mensuel'}
            </Text>
            <Text style={styles.previewText}>Date: {selectedDate}</Text>
          </View>
        ) : (
          <Text style={styles.noPreviewText}>
            Sélectionnez une date pour voir l'aperçu
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[styles.downloadButton, !selectedDate && styles.buttonDisabled]}
        onPress={handleDownload}
        disabled={!selectedDate}
      >
        <Icon name="file-download" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Télécharger le Rapport (PDF)</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
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
  picker: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  reportPreview: {
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
  previewContent: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  previewText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  noPreviewText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    padding: 20,
  },
  downloadButton: {
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

export default ProgressReportScreen;
