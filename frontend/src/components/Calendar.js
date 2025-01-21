import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { colors } from '../styles/globalStyles';

const Calendar = ({ 
  onDayPress, 
  markedDates, 
  minDate, 
  maxDate,
  current 
}) => {
  const [selected, setSelected] = useState('');

  const handleDayPress = (day) => {
    setSelected(day.dateString);
    if (onDayPress) {
      onDayPress(day);
    }
  };

  const theme = {
    backgroundColor: colors.background,
    calendarBackground: colors.background,
    textSectionTitleColor: colors.text,
    selectedDayBackgroundColor: colors.primary,
    selectedDayTextColor: colors.background,
    todayTextColor: colors.primary,
    dayTextColor: colors.text,
    textDisabledColor: colors.lightGray,
    dotColor: colors.primary,
    selectedDotColor: colors.background,
    arrowColor: colors.primary,
    monthTextColor: colors.text,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 14
  };

  return (
    <View style={styles.container}>
      <RNCalendar
        onDayPress={handleDayPress}
        markedDates={{
          ...markedDates,
          [selected]: {
            selected: true,
            selectedColor: colors.primary,
            ...markedDates?.[selected],
          },
        }}
        minDate={minDate}
        maxDate={maxDate}
        current={current}
        theme={theme}
        enableSwipeMonths={true}
        hideExtraDays={true}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
  },
  calendar: {
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
});

export default Calendar;
