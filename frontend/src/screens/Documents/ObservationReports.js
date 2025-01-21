import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Calendar } from '../../components/Calendar';
import { Dropdown } from '../../components/Dropdown';
import { PDFDownloader } from '../../components/PDFDownloader';
import { api } from '../../services/api';

const ObservationReports = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('school');
  const [observations, setObservations] = useState(null);

  const locations = [
    { label: 'École', value: 'school' },
    { label: 'Maison de quartier', value: 'community' },
    { label: 'Maison', value: 'home' },
  ];

  useEffect(() => {
    fetchObservations();
  }, [selectedDate, selectedLocation]);

  const fetchObservations = async () => {
    try {
      const response = await api.get('/observations', {
        params: {
          date: selectedDate.toISOString(),
          location: selectedLocation,
        },
      });
      setObservations(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des observations:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await api.get('/observations/download', {
        params: {
          date: selectedDate.toISOString(),
          location: selectedLocation,
        },
        responseType: 'blob',
      });

      PDFDownloader.download(response.data, `observations_${selectedLocation}_${selectedDate.toISOString()}.pdf`);
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
          items={locations}
          onValueChange={handleLocationChange}
          value={selectedLocation}
          placeholder="Sélectionner le lieu"
        />
      </View>

      {observations && (
        <View style={styles.observationsContainer}>
          <Text style={styles.sectionTitle}>Points à travailler</Text>
          {observations.improvements.map((item, index) => (
            <Text key={index} style={styles.observationItem}>• {item}</Text>
          ))}

          <Text style={styles.sectionTitle}>Observations hebdomadaires</Text>
          {observations.weeklyObservations.map((item, index) => (
            <Text key={index} style={styles.observationItem}>• {item}</Text>
          ))}

          <Text style={styles.sectionTitle}>Observations mensuelles</Text>
          {observations.monthlyObservations.map((item, index) => (
            <Text key={index} style={styles.observationItem}>• {item}</Text>
          ))}

          <Text style={styles.sectionTitle}>Résumé mensuel</Text>
          <Text style={styles.summary}>{observations.monthlySummary}</Text>
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
  observationsContainer: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2196F3',
    marginTop: 15,
    marginBottom: 10,
  },
  observationItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
  summary: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginTop: 5,
  },
  downloadButton: {
    margin: 10,
  },
});

export default ObservationReports;
