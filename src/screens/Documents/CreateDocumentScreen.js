import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';

const CreateDocumentScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const documentTypes = [
    {
      id: 'contract',
      title: t('documents.typeContract'),
      icon: 'file-document',
      color: '#2196F3',
    },
    {
      id: 'report',
      title: t('documents.typeReport'),
      icon: 'chart-box',
      color: '#4CAF50',
    },
    {
      id: 'evaluation',
      title: t('documents.typeEvaluation'),
      icon: 'clipboard-check',
      color: '#FF9800',
    },
    {
      id: 'observation',
      title: t('documents.typeObservation'),
      icon: 'eye',
      color: '#9C27B0',
    },
  ];

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.error(err);
      }
    }
  };

  const handleCreate = () => {
    // Implement document creation logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('documents.basicInfo')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('documents.titlePlaceholder')}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder={t('documents.descriptionPlaceholder')}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('documents.selectType')}</Text>
          <View style={styles.typeGrid}>
            {documentTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeCard,
                  selectedType === type.id && styles.selectedType,
                ]}
                onPress={() => setSelectedType(type.id)}
              >
                <View
                  style={[styles.typeIcon, { backgroundColor: type.color }]}
                >
                  <Icon name={type.icon} size={24} color="#FFFFFF" />
                </View>
                <Text
                  style={[
                    styles.typeTitle,
                    selectedType === type.id && styles.selectedTypeText,
                  ]}
                >
                  {type.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('documents.uploadFile')}</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFilePick}
          >
            <Icon name="upload" size={24} color="#2196F3" />
            <Text style={styles.uploadButtonText}>
              {selectedFile
                ? selectedFile.name
                : t('documents.selectFilePlaceholder')}
            </Text>
          </TouchableOpacity>
          {selectedFile && (
            <View style={styles.fileInfo}>
              <Icon name="file-pdf-box" size={20} color="#666" />
              <Text style={styles.fileInfoText}>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.createButton,
            (!title || !selectedType || !selectedFile) &&
              styles.disabledCreateButton,
          ]}
          onPress={handleCreate}
          disabled={!title || !selectedType || !selectedFile}
        >
          <Text style={styles.createButtonText}>{t('common.create')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  typeCard: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedType: {
    backgroundColor: '#E3F2FD',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  typeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
  selectedTypeText: {
    color: '#2196F3',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#2196F3',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#2196F3',
    marginLeft: 10,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  fileInfoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  createButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  disabledCreateButton: {
    backgroundColor: '#E0E0E0',
  },
});

export default CreateDocumentScreen;
