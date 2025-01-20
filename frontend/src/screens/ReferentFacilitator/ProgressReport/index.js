import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from '../../../components/Calendar';
import { Dropdown } from '../../../components/Dropdown';
import { Button } from '../../../components/Button';
import { PDFDownloader } from '../../../components/PDFDownloader';
import { ProgressSummary } from '../../../components/progress/ProgressSummary';
import { api } from '../../../services/api';

const ProgressReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportType, setReportType] = useState('daily');
  const [reportData, setReportData] = useState(null);

  const reportTypes = [
    { label: 'Daily Report', value: 'daily' },
    { label: 'Weekly Report', value: 'weekly' },
    { label: 'Monthly Report', value: 'monthly' },
  ];

  useEffect(() => {
    fetchReportData();
  }, [selectedDate, reportType]);

  const fetchReportData = async () => {
    try {
      const response = await api.get('/progress/report', {
        params: {
          date: selectedDate.toISOString(),
          type: reportType,
        },
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReportTypeChange = (value) => {
    setReportType(value);
  };

  const handleDownloadReport = async () => {
    try {
      const response = await api.get('/progress/report/download', {
        params: {
          date: selectedDate.toISOString(),
          type: reportType,
        },
        responseType: 'blob',
      });
      PDFDownloader.download(response.data, `progress_report_${reportType}_${selectedDate.toISOString()}.pdf`);
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
          items={reportTypes}
          onValueChange={handleReportTypeChange}
          value={reportType}
          placeholder="Select report type"
        />
      </View>

      {reportData && (
        <View style={styles.summaryContainer}>
          <ProgressSummary
            data={reportData}
            type={reportType}
          />
        </View>
      )}

      <Button
        title="Download Report (PDF)"
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
  summaryContainer: {
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
  downloadButton: {
    margin: 10,
    backgroundColor: '#4CAF50',
  },
});

export default ProgressReport;
