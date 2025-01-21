import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from '../../../components/Calendar';
import { Dropdown } from '../../../components/Dropdown';
import { Button } from '../../../components/Button';
import { PDFDownloader } from '../../../components/PDFDownloader';
import { ImageEvaluation } from '../../../components/questionnaire/ImageEvaluation';
import { api } from '../../../services/api';

const Questionnaire = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('school');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const locations = [
    { label: 'School', value: 'school' },
    { label: 'Community Center', value: 'community' },
    { label: 'Home', value: 'home' },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  const handleDownloadReport = async () => {
    try {
      const response = await api.get('/questionnaire/report', {
        params: {
          date: selectedDate.toISOString(),
          location: selectedLocation,
        },
        responseType: 'blob',
      });

      PDFDownloader.download(response.data, `questionnaire_${selectedLocation}_${selectedDate.toISOString()}.pdf`);
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          items={locations}
          onValueChange={handleLocationChange}
          value={selectedLocation}
          placeholder="Select location"
        />
      </View>

      <View style={styles.navigationButtons}>
        <Button
          title="Previous Question"
          onPress={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        />
        <Button
          title="Next Question"
          onPress={handleNextQuestion}
        />
      </View>

      <Button
        title="Download Progress Report (PDF)"
        onPress={handleDownloadReport}
        style={styles.downloadButton}
      />

      <Button
        title="Go to Image Evaluation"
        onPress={() => navigation.navigate('ImageEvaluation')}
        style={styles.evaluationButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  downloadButton: {
    margin: 10,
    backgroundColor: '#4CAF50',
  },
  evaluationButton: {
    margin: 10,
    backgroundColor: '#2196F3',
  },
});

export default Questionnaire;
