import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from '../../../components/Calendar';
import { Dropdown } from '../../../components/Dropdown';
import { Button } from '../../../components/Button';
import { PDFDownloader } from '../../../components/PDFDownloader';
import { QuestionnaireForm } from '../../../components/questionnaire/QuestionnaireForm';
import { api } from '../../../services/api';

const Questionnaire = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('school');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  const locations = [
    { label: 'School', value: 'school' },
    { label: 'Community Center', value: 'community' },
    { label: 'Home', value: 'home' },
  ];

  useEffect(() => {
    fetchQuestions();
  }, [selectedLocation]);

  const fetchQuestions = async () => {
    try {
      const response = await api.get('/questionnaire/questions', {
        params: { location: selectedLocation }
      });
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAnswerSubmit = async (answer) => {
    try {
      await api.post('/questionnaire/answers', {
        date: selectedDate.toISOString(),
        location: selectedLocation,
        questionIndex: currentQuestionIndex,
        answer,
      });
      handleNextQuestion();
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
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

      {questions.length > 0 && (
        <View style={styles.questionnaireContainer}>
          <QuestionnaireForm
            question={questions[currentQuestionIndex]}
            onSubmit={handleAnswerSubmit}
          />
        </View>
      )}

      <View style={styles.navigationContainer}>
        <Button
          title="Previous"
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          style={styles.navigationButton}
        />
        <Button
          title="Next"
          onPress={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
          style={styles.navigationButton}
        />
      </View>

      <Button
        title="Download Progress Report (PDF)"
        onPress={handleDownloadReport}
        style={styles.downloadButton}
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
  questionnaireContainer: {
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
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  navigationButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  downloadButton: {
    margin: 10,
    backgroundColor: '#4CAF50',
  },
});

export default Questionnaire;
