import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'react-native-image-picker';

const FileUploader = ({ onUpload, type = 'all', maxSize = 10 }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleFilePick = async () => {
    try {
      if (type === 'image') {
        const options = {
          mediaType: 'photo',
          quality: 1,
        };

        const result = await ImagePicker.launchImageLibrary(options);
        if (!result.didCancel && result.assets?.[0]) {
          const file = result.assets[0];
          if (file.fileSize > maxSize * 1024 * 1024) {
            alert(`La taille du fichier ne doit pas dépasser ${maxSize}MB`);
            return;
          }
          setSelectedFile(file);
        }
      } else {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });

        const file = result[0];
        if (file.size > maxSize * 1024 * 1024) {
          alert(`La taille du fichier ne doit pas dépasser ${maxSize}MB`);
          return;
        }
        setSelectedFile(file);
      }
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        alert('Une erreur est survenue lors de la sélection du fichier');
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', {
        uri: selectedFile.uri,
        type: selectedFile.type,
        name: selectedFile.name || 'file',
      });
      formData.append('description', description);
      formData.append('tags', tags);

      await onUpload(formData);
      
      // Reset form
      setSelectedFile(null);
      setDescription('');
      setTags('');
    } catch (error) {
      alert('Une erreur est survenue lors du téléchargement');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropZone}
        onPress={handleFilePick}
        disabled={uploading}
      >
        <Icon
          name={type === 'image' ? 'image-plus' : 'file-upload'}
          size={40}
          color="#2196F3"
        />
        <Text style={styles.dropZoneText}>
          {selectedFile
            ? selectedFile.name
            : `Cliquez pour sélectionner un ${
                type === 'image' ? 'image' : 'fichier'
              }`}
        </Text>
        <Text style={styles.maxSize}>
          Taille maximum: {maxSize}MB
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Description (optionnel)"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
        disabled={uploading}
      />

      <TextInput
        style={styles.input}
        placeholder="Tags (séparés par des virgules)"
        value={tags}
        onChangeText={setTags}
        disabled={uploading}
      />

      <TouchableOpacity
        style={[
          styles.uploadButton,
          (!selectedFile || uploading) && styles.uploadButtonDisabled,
        ]}
        onPress={handleUpload}
        disabled={!selectedFile || uploading}
      >
        {uploading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Icon name="cloud-upload" size={24} color="#fff" />
            <Text style={styles.uploadButtonText}>Télécharger</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dropZone: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f2fd',
    marginBottom: 20,
  },
  dropZoneText: {
    fontSize: 16,
    color: '#2196F3',
    textAlign: 'center',
    marginTop: 10,
  },
  maxSize: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  uploadButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default FileUploader;
