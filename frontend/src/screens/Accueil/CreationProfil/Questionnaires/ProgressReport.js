import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from '../../../../components/Calendar';
import { Dropdown } from '../../../../components/Dropdown';
import { PDFDownloader } from '../../../../components/PDFDownloader';
import { BehaviorChart } from '../../../../components/statistics/BehaviorChart';
import { api } from '../../../../services/api';

const ProgressReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportType, setReportType] = useState('daily');
  const [reportData, setReportData] = useState(null);

  const reportTypes = [
    { label: 'Rapport quotidien', value: 'daily' },
    { label: 'Rapport hebdomadaire', value: 'weekly' },
    { label: 'Rapport mensuel', value: 'monthly' },
  ];

  useEffect(() => {
    fetchReportData();
  }, [selectedDate, reportType]);

  const fetchReportData = async () => {
    try {
      const response = await api.get('/reports', {
        params: {
          date: selectedDate.toISOString(),
          type: reportType,
        },
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du rapport:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReportTypeChange = (value) => {
    setReportType(value);
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await api.get('/reports/download', {
        params: {
          date: selectedDate.toISOString(),
          type: reportType,
        },
        responseType: 'blob',
      });

      // Utiliser le composant PDFDownloader pour télécharger le fichier
      PDFDownloader.download(response.data, `rapport_${reportType}_${selectedDate.toISOString()}.pdf`);
    } catch (error) {
      console.error('Erreur lors du téléchargement du PDF:', error);
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
          placeholder="Sélectionner le type de rapport"
        />
      </View>

      {reportData && (
        <View style={styles.chartContainer}>
          <BehaviorChart
            data={reportData.chartData}
            period={reportType}
          />
        </View>
      )}

      <PDFDownloader
        onDownload={handleDownloadPDF}
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
  chartContainer: {
    margin: 10,
  },
  downloadButton: {
    margin: 10,
  },
});

export default ProgressReport;
