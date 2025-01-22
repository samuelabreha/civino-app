import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';

const CalendarScreen = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  const questionnaires = [
    { id: 'ecole', title: 'École' },
    { id: 'maison', title: 'Maison' },
    { id: 'maisonQuartier', title: 'Maison de Quartier' }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleQuestionnaireSelect = (type) => {
    setSelectedType(type);
    navigation.navigate('Questionnaire', {
      date: selectedDate,
      type: type
    });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.calendarCard}>
        <Typography variant="h2" style={styles.title}>
          Sélectionnez une date
        </Typography>
        
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: theme.colors.primary.main
            }
          }}
          theme={{
            calendarBackground: theme.colors.background.default,
            selectedDayBackgroundColor: theme.colors.primary.main,
            selectedDayTextColor: theme.colors.primary.contrastText,
            todayTextColor: theme.colors.primary.main,
            dayTextColor: theme.colors.text.primary,
            textDisabledColor: theme.colors.text.disabled,
            monthTextColor: theme.colors.text.primary,
            textMonthFontFamily: theme.fonts.semiBold,
            textDayFontFamily: theme.fonts.regular,
            textDayHeaderFontFamily: theme.fonts.medium,
          }}
        />
      </Card>

      {selectedDate && (
        <Card style={styles.questionnairesCard}>
          <Typography variant="subtitle1" style={styles.subtitle}>
            Sélectionnez un questionnaire
          </Typography>
          
          <View style={styles.buttonContainer}>
            {questionnaires.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                style={styles.button}
                onPress={() => handleQuestionnaireSelect(item.id)}
              >
                {item.title}
              </Button>
            ))}
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  calendarCard: {
    marginBottom: theme.spacing.md,
  },
  questionnairesCard: {
    padding: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing.md,
  },
  buttonContainer: {
    gap: theme.spacing.sm,
  },
  button: {
    marginBottom: theme.spacing.sm,
  },
});

export default CalendarScreen;
