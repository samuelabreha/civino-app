import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'rn-fetch-blob';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const REPORT_TYPES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
};

const CONTEXTS = {
  SCHOOL: 'school',
  COMMUNITY: 'community',
  HOME: 'home',
};

const ProgressReportCalendar = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedReportType, setSelectedReportType] = useState(REPORT_TYPES.DAILY);
  const [selectedContext, setSelectedContext] = useState(CONTEXTS.SCHOOL);
  const [isLoading, setIsLoading] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Fonction pour générer les marqueurs du calendrier
  const getMarkedDates = useCallback(() => {
    // Simulation des dates avec des rapports disponibles
    const markedDates = {};
    if (selectedDate) {
      markedDates[selectedDate] = {
        selected: true,
        marked: true,
        selectedColor: '#2196F3',
      };
    }
    return markedDates;
  }, [selectedDate]);

  // Fonction pour télécharger le rapport
  const downloadReport = async () => {
    try {
      setIsLoading(true);
      // Simuler le téléchargement (à remplacer par l'appel API réel)
      const { dirs } = RNFetchBlob.fs;
      const fileName = `rapport_${selectedContext}_${format(new Date(selectedDate), 'dd-MM-yyyy', { locale: fr })}.pdf`;
      
      // TODO: Remplacer par l'URL réelle de l'API
      const response = await RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: fileName,
          description: 'Téléchargement du rapport en cours...',
          mime: 'application/pdf',
          path: `${dirs.DownloadDir}/${fileName}`,
        },
      }).fetch('GET', 'URL_API_RAPPORT');

      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  const renderReportTypeSelector = () => (
    <View style={styles.selectorContainer}>
      {Object.values(REPORT_TYPES).map((type) => (
        <TouchableOpacity
          key={type}
          style={[
            styles.selectorButton,
            selectedReportType === type && styles.selectorButtonActive,
          ]}
          onPress={() => setSelectedReportType(type)}
        >
          <Text style={[
            styles.selectorButtonText,
            selectedReportType === type && styles.selectorButtonTextActive,
          ]}>
            {t(`reports.types.${type}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderContextSelector = () => (
    <View style={styles.selectorContainer}>
      {Object.values(CONTEXTS).map((context) => (
        <TouchableOpacity
          key={context}
          style={[
            styles.selectorButton,
            selectedContext === context && styles.selectorButtonActive,
          ]}
          onPress={() => setSelectedContext(context)}
        >
          <Text style={[
            styles.selectorButtonText,
            selectedContext === context && styles.selectorButtonTextActive,
          ]}>
            {t(`contexts.${context}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderPreviewModal = () => (
    <Modal
      visible={previewModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setPreviewModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {t('reports.preview.title')}
          </Text>
          <ScrollView style={styles.previewContent}>
            {/* Contenu de la prévisualisation */}
            <Text style={styles.previewText}>
              {t('reports.preview.date')}: {format(new Date(selectedDate), 'dd MMMM yyyy', { locale: fr })}
            </Text>
            <Text style={styles.previewText}>
              {t('reports.preview.type')}: {t(`reports.types.${selectedReportType}`)}
            </Text>
            <Text style={styles.previewText}>
              {t('reports.preview.context')}: {t(`contexts.${selectedContext}`)}
            </Text>
          </ScrollView>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setPreviewModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>{t('common.close')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonPrimary]}
              onPress={downloadReport}
            >
              <Text style={[styles.modalButtonText, styles.modalButtonTextPrimary]}>
                {t('reports.download')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {renderReportTypeSelector()}
      {renderContextSelector()}
      <Calendar
        markedDates={getMarkedDates()}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setPreviewModalVisible(true);
        }}
        theme={{
          selectedDayBackgroundColor: '#2196F3',
          todayTextColor: '#2196F3',
          arrowColor: '#2196F3',
        }}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
        </View>
      )}
      {renderPreviewModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  selectorContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
  },
  selectorButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    minWidth: 100,
    alignItems: 'center',
  },
  selectorButtonActive: {
    backgroundColor: '#2196F3',
  },
  selectorButtonText: {
    color: '#666666',
  },
  selectorButtonTextActive: {
    color: '#FFFFFF',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  previewContent: {
    maxHeight: 300,
  },
  previewText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  modalButtonPrimary: {
    backgroundColor: '#2196F3',
  },
  modalButtonText: {
    color: '#666666',
  },
  modalButtonTextPrimary: {
    color: '#FFFFFF',
  },
});

export default ProgressReportCalendar;
