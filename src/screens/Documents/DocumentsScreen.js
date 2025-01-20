import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

const DocumentItem = ({ document, onPress, onDelete }) => (
  <TouchableOpacity style={styles.documentItem} onPress={onPress}>
    <View style={styles.documentIcon}>
      <Icon
        name={document.type === 'pdf' ? 'file-pdf-box' : 'file-document'}
        size={30}
        color="#2196F3"
      />
    </View>
    <View style={styles.documentInfo}>
      <Text style={styles.documentName}>{document.name}</Text>
      <Text style={styles.documentDate}>{document.date}</Text>
    </View>
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Icon name="delete" size={24} color="#F44336" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const DocumentsScreen = () => {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDocumentPick = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc],
        allowMultiSelection: true,
      });

      // Traiter les documents sélectionnés
      const newDocuments = results.map((result) => ({
        id: Math.random().toString(),
        name: result.name,
        type: result.type.split('/')[1],
        uri: result.uri,
        date: new Date().toLocaleDateString(),
      }));

      setDocuments([...documents, ...newDocuments]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // L'utilisateur a annulé
      } else {
        Alert.alert('Erreur', 'Une erreur est survenue lors de la sélection du document');
      }
    }
  };

  const handleDocumentPress = async (document) => {
    try {
      // Ouvrir le document
      // Implémenter la logique d'ouverture du document
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'ouvrir le document");
    }
  };

  const handleDocumentDelete = (documentId) => {
    Alert.alert(
      t('documents.deleteConfirmTitle'),
      t('documents.deleteConfirmMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: () => {
            setDocuments(documents.filter((doc) => doc.id !== documentId));
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('documents.title')}</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleDocumentPick}
        >
          <Icon name="upload" size={24} color="#FFFFFF" />
          <Text style={styles.uploadButtonText}>
            {t('documents.upload')}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={documents}
        renderItem={({ item }) => (
          <DocumentItem
            document={item}
            onPress={() => handleDocumentPress(item)}
            onDelete={() => handleDocumentDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.documentsList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="file-document-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyText}>
              {t('documents.noDocuments')}
            </Text>
          </View>
        )}
      />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontWeight: '600',
  },
  documentsList: {
    padding: 15,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  documentIcon: {
    marginRight: 15,
  },
  documentInfo: {
    flex: 1,
  },
  documentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default DocumentsScreen;
