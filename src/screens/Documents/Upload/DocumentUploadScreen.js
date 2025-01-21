import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as DocumentPicker from 'expo-document-picker';

const DocumentUploadScreen = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true,
      });

      if (result.type === 'success') {
        setSelectedFiles([...selectedFiles, result]);
      }
    } catch (err) {
      console.error('Erreur lors de la sélection du fichier:', err);
    }
  };

  const handleUpload = () => {
    // Logique pour télécharger les fichiers
  };

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="cloud-upload" size={40} color="#2196F3" />
        <Text style={styles.title}>Charger des Documents</Text>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePicker}>
        <Icon name="add" size={24} color="#2196F3" />
        <Text style={styles.uploadButtonText}>Sélectionner des fichiers</Text>
      </TouchableOpacity>

      <View style={styles.filesContainer}>
        <Text style={styles.sectionTitle}>
          Fichiers Sélectionnés ({selectedFiles.length})
        </Text>
        {selectedFiles.map((file, index) => (
          <View key={index} style={styles.fileItem}>
            <Icon name="insert-drive-file" size={24} color="#757575" />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{file.name}</Text>
              <Text style={styles.fileSize}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFile(index)}
            >
              <Icon name="close" size={20} color="#FF5252" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Formats Supportés</Text>
        <Text style={styles.infoText}>
          • PDF{'\n'}
          • Word (.doc, .docx){'\n'}
          • Excel (.xls, .xlsx){'\n'}
          • Images (.jpg, .png)
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.submitButton, selectedFiles.length === 0 && styles.buttonDisabled]}
        onPress={handleUpload}
        disabled={selectedFiles.length === 0}
      >
        <Icon name="cloud-upload" size={24} color="#FFFFFF" />
        <Text style={styles.submitButtonText}>Télécharger les fichiers</Text>
      </TouchableOpacity>
    </ScrollView>
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#2196F3',
    marginLeft: 10,
  },
  filesContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  fileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  fileName: {
    fontSize: 16,
    color: '#333',
  },
  fileSize: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  removeButton: {
    padding: 5,
  },
  infoContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  buttonDisabled: {
    backgroundColor: '#BDBDBD',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DocumentUploadScreen;
