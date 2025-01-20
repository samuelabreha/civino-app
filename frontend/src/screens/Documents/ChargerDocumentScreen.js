import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';
import PDFDownloader from '../../components/PDFDownloader';

const ChargerDocumentScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = async () => {
    try {
      const file = await PDFDownloader.pickDocument();
      setSelectedFile(file);
    } catch (error) {
      console.error('Erreur lors de la sélection du fichier:', error);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) {
      // Afficher une erreur
      return;
    }

    try {
      await PDFDownloader.uploadDocument({
        file: selectedFile,
        title,
        description,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Charger un document" />
      <View style={styles.content}>
        <View style={styles.formSection}>
          <Text style={styles.label}>Titre du document</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Entrez le titre..."
          />

          <Text style={styles.label}>Description (optionnelle)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Entrez une description..."
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity 
            style={styles.fileButton}
            onPress={handleSelectFile}
          >
            <Text style={styles.fileButtonText}>
              {selectedFile ? 'Changer le fichier' : 'Sélectionner un fichier'}
            </Text>
          </TouchableOpacity>

          {selectedFile && (
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{selectedFile.name}</Text>
              <Text style={styles.fileSize}>{selectedFile.size}</Text>
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.button, 
              styles.uploadButton,
              (!selectedFile || !title.trim()) && styles.buttonDisabled
            ]}
            onPress={handleUpload}
            disabled={!selectedFile || !title.trim()}
          >
            <Text style={styles.uploadButtonText}>Charger</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formSection: {
    flex: 1,
  },
  label: {
    ...typography.caption,
    marginBottom: 8,
    color: colors.gray,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    ...typography.body,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  fileButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  fileButtonText: {
    ...typography.body,
    color: colors.white,
  },
  fileInfo: {
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  fileName: {
    ...typography.body,
    marginBottom: 4,
  },
  fileSize: {
    ...typography.caption,
    color: colors.gray,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.lightGray,
    marginRight: 8,
  },
  cancelButtonText: {
    ...typography.body,
    color: colors.gray,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
  uploadButtonText: {
    ...typography.body,
    color: colors.white,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default ChargerDocumentScreen;
