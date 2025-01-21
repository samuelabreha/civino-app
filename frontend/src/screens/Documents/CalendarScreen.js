import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';
import PDFDownloader from '../../components/PDFDownloader';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const documents = {
    '2025-01-20': [
      { 
        title: 'Rapport mensuel',
        type: 'pdf',
        size: '2.3 MB',
        lastModified: '2025-01-20'
      },
      {
        title: 'Évaluation comportementale',
        type: 'pdf',
        size: '1.1 MB',
        lastModified: '2025-01-20'
      }
    ],
    '2025-01-21': [
      {
        title: 'Compte-rendu réunion',
        type: 'pdf',
        size: '0.8 MB',
        lastModified: '2025-01-21'
      }
    ]
  };

  const getDocumentTypeIcon = (type) => {
    const icons = {
      pdf: '📄',
      doc: '📝',
      xls: '📊',
      img: '🖼️'
    };
    return icons[type] || '📎';
  };

  const markedDates = Object.keys(documents).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: '#2196F3',
      selected: date === selectedDate
    };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Header title="Calendrier des documents" />
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
      />
      <ScrollView style={styles.documentsContainer}>
        {selectedDate && documents[selectedDate] ? (
          <>
            <Text style={styles.dateTitle}>
              Documents du {new Date(selectedDate).toLocaleDateString('fr-FR')}
            </Text>
            {documents[selectedDate].map((document, index) => (
              <TouchableOpacity
                key={index}
                style={styles.documentCard}
                onPress={() => PDFDownloader.downloadDocument(document)}
              >
                <Text style={styles.documentIcon}>
                  {getDocumentTypeIcon(document.type)}
                </Text>
                <View style={styles.documentInfo}>
                  <Text style={styles.documentTitle}>{document.title}</Text>
                  <Text style={styles.documentDetails}>
                    {document.size} • Modifié le {new Date(document.lastModified).toLocaleDateString('fr-FR')}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text style={styles.noDocuments}>
            Aucun document pour cette date
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  documentsContainer: {
    flex: 1,
    padding: 15,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  documentCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  documentIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  documentDetails: {
    fontSize: 12,
    color: '#666',
  },
  noDocuments: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CalendarScreen;
