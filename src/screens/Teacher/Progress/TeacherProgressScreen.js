import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const TeacherProgressScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reportType, setReportType] = useState('daily');

  const reportTypes = [
    { id: 'daily', label: 'Rapport Quotidien' },
    { id: 'weekly', label: 'Rapport Hebdomadaire' },
    { id: 'monthly', label: 'Rapport Mensuel' },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleGenerateReport = () => {
    // Logique pour générer le rapport
    navigation.navigate('ProgressReportDetail', {
      date: selectedDate,
      type: reportType,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="assessment" size={40} color="#2196F3" />
        <Text style={styles.title}>Rapport de Progression Scolaire</Text>
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

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Type de Rapport</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={reportType}
            onValueChange={(value) => setReportType(value)}
            style={styles.picker}
          >
            {reportTypes.map(type => (
              <Picker.Item
                key={type.id}
                label={type.label}
                value={type.id}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Catégories Incluses</Text>
        <View style={styles.categoryGrid}>
          <View style={styles.categoryItem}>
            <Icon name="school" size={24} color="#2196F3" />
            <Text style={styles.categoryText}>Comportement en Classe</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="group" size={24} color="#2196F3" />
            <Text style={styles.categoryText}>Interactions Sociales</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="edit" size={24} color="#2196F3" />
            <Text style={styles.categoryText}>Travail Scolaire</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="psychology" size={24} color="#2196F3" />
            <Text style={styles.categoryText}>Concentration</Text>
          </View>
        </View>
      </View>

      <View style={styles.recentReportsContainer}>
        <Text style={styles.sectionTitle}>Rapports Récents</Text>
        <TouchableOpacity style={styles.reportCard}>
          <Icon name="description" size={24} color="#2196F3" />
          <View style={styles.reportInfo}>
            <Text style={styles.reportTitle}>Rapport Hebdomadaire</Text>
            <Text style={styles.reportDate}>15-21 Janvier 2025</Text>
          </View>
          <Icon name="file-download" size={24} color="#2196F3" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.reportCard}>
          <Icon name="description" size={24} color="#2196F3" />
          <View style={styles.reportInfo}>
            <Text style={styles.reportTitle}>Rapport Mensuel</Text>
            <Text style={styles.reportDate}>Décembre 2024</Text>
          </View>
          <Icon name="file-download" size={24} color="#2196F3" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.generateButton,
          (!selectedDate || !reportType) && styles.buttonDisabled
        ]}
        onPress={handleGenerateReport}
        disabled={!selectedDate || !reportType}
      >
        <Icon name="create" size={24} color="#FFFFFF" />
        <Text style={styles.generateButtonText}>
          Générer le Rapport
        </Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Information</Text>
        <Text style={styles.infoText}>
          Le rapport scolaire inclut :{'\n'}
          • Évaluation du comportement en classe{'\n'}
          • Analyse de la participation{'\n'}
          • Progrès dans les apprentissages{'\n'}
          • Recommandations pédagogiques
        </Text>
      </View>
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
  formContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  categoriesContainer: {
    padding: 15,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  recentReportsContainer: {
    padding: 15,
  },
  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reportInfo: {
    flex: 1,
    marginLeft: 15,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  reportDate: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
  generateButton: {
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
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
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
});

export default TeacherProgressScreen;
