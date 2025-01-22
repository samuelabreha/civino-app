import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [selectedContext, setSelectedContext] = useState('all');

  const contexts = [
    { id: 'all', label: 'Tous les contextes', icon: 'dashboard' },
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const documents = {
    '2024-09-04': [
      {
        id: '1',
        title: 'Rapport d\'observation quotidien',
        type: 'daily_report',
        context: 'school',
        time: '16:30'
      },
      {
        id: '2',
        title: 'Évaluation comportementale',
        type: 'evaluation',
        context: 'center',
        time: '17:45'
      }
    ],
    '2024-09-11': [
      {
        id: '3',
        title: 'Rapport hebdomadaire',
        type: 'weekly_report',
        context: 'all',
        time: '18:00'
      }
    ]
  };

  const getMarkedDates = () => {
    const marked = {};
    Object.keys(documents).forEach(date => {
      marked[date] = {
        marked: true,
        dotColor: '#2196F3'
      };
      if (date === selectedDate) {
        marked[date] = {
          ...marked[date],
          selected: true,
          selectedColor: '#2196F3'
        };
      }
    });
    return marked;
  };

  const filteredDocuments = selectedDate && documents[selectedDate]
    ? documents[selectedDate].filter(doc =>
        selectedContext === 'all' || doc.context === selectedContext
      )
    : [];

  const renderContextSelector = () => (
    <View style={styles.contextSelector}>
      {contexts.map(context => (
        <TouchableOpacity
          key={context.id}
          style={[
            styles.contextButton,
            selectedContext === context.id && styles.contextButtonActive
          ]}
          onPress={() => setSelectedContext(context.id)}
        >
          <Icon
            name={context.icon}
            size={24}
            color={selectedContext === context.id ? '#FFFFFF' : '#2196F3'}
          />
          <Text
            style={[
              styles.contextButtonText,
              selectedContext === context.id && styles.contextButtonTextActive
            ]}
          >
            {context.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderDocumentItem = ({ item }) => (
    <TouchableOpacity
      style={styles.documentItem}
      onPress={() => setShowDocumentModal(true)}
    >
      <View style={styles.documentIcon}>
        <Icon
          name={
            item.type === 'daily_report'
              ? 'description'
              : item.type === 'weekly_report'
              ? 'assessment'
              : 'analytics'
          }
          size={24}
          color="#2196F3"
        />
      </View>
      <View style={styles.documentInfo}>
        <Text style={styles.documentTitle}>{item.title}</Text>
        <Text style={styles.documentTime}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="file-download" size={24} color="#2196F3" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="event" size={40} color="#2196F3" />
        <Text style={styles.title}>Calendrier des Documents</Text>
      </View>

      <Calendar
        style={styles.calendar}
        markedDates={getMarkedDates()}
        onDayPress={day => setSelectedDate(day.dateString)}
        theme={{
          selectedDayBackgroundColor: '#2196F3',
          todayTextColor: '#2196F3',
          arrowColor: '#2196F3',
        }}
      />

      {renderContextSelector()}

      <View style={styles.documentsContainer}>
        <Text style={styles.documentsTitle}>
          Documents disponibles
          {selectedDate && ` pour le ${selectedDate}`}
        </Text>
        {selectedDate ? (
          <FlatList
            data={filteredDocuments}
            renderItem={renderDocumentItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.documentsList}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Aucun document disponible pour cette date
              </Text>
            }
          />
        ) : (
          <Text style={styles.selectDateText}>
            Sélectionnez une date pour voir les documents disponibles
          </Text>
        )}
      </View>

      <Modal
        visible={showDocumentModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDocumentModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Options du Document</Text>
              <TouchableOpacity
                onPress={() => setShowDocumentModal(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="visibility" size={24} color="#2196F3" />
              <Text style={styles.modalOptionText}>Voir le Document</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="file-download" size={24} color="#2196F3" />
              <Text style={styles.modalOptionText}>Télécharger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="share" size={24} color="#2196F3" />
              <Text style={styles.modalOptionText}>Partager</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
  calendar: {
    marginBottom: 10,
  },
  contextSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    margin: 5,
  },
  contextButtonActive: {
    backgroundColor: '#2196F3',
  },
  contextButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  contextButtonTextActive: {
    color: '#FFFFFF',
  },
  documentsContainer: {
    flex: 1,
    padding: 15,
  },
  documentsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  documentsList: {
    flexGrow: 1,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  documentTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  documentTime: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  downloadButton: {
    padding: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#757575',
    marginTop: 20,
  },
  selectDateText: {
    textAlign: 'center',
    color: '#757575',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});

export default CalendarScreen;
