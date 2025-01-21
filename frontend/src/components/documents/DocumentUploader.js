import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as DocumentPicker from 'react-native-document-picker';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';

const DocumentUploader = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(result);
      if (onFileSelect) {
        onFileSelect(result);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // L'utilisateur a annulé
      } else {
        console.error('Erreur lors de la sélection du document:', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Image source={icons.general.upload} style={styles.icon} />
        <Text style={styles.uploadText}>Sélectionner un document</Text>
      </TouchableOpacity>

      {selectedFile && (
        <View style={styles.fileInfo}>
          <Image source={icons.general.documents} style={styles.fileIcon} />
          <Text style={styles.fileName}>{selectedFile.name}</Text>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => setSelectedFile(null)}
          >
            <Image source={icons.general.trash} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#2196F3',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#2196F3',
  },
  uploadText: {
    ...typography.button,
    color: '#2196F3',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  fileIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  fileName: {
    ...typography.body1,
    flex: 1,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#F44336',
  },
});

export default DocumentUploader;
