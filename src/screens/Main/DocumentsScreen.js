import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { firebaseService } from '../../services/firebase.service';

const DocumentItem = ({ document, onShare, onDelete }) => {
  const { t } = useTranslation();

  const getFileIcon = (type) => {
    switch (type) {
      case 'application/pdf':
        return 'file-pdf-box';
      case 'image/jpeg':
      case 'image/png':
        return 'file-image';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'file-word';
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'file-excel';
      default:
        return 'file-document';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <View style={styles.documentItem}>
      <View style={styles.documentIcon}>
        <Icon name={getFileIcon(document.type)} size={32} color="#2196F3" />
      </View>
      
      <View style={styles.documentInfo}>
        <Text style={styles.documentName} numberOfLines={1}>
          {document.name}
        </Text>
        <Text style={styles.documentMeta}>
          {formatFileSize(document.size)} • {new Date(document.createdAt).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.documentActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onShare(document)}
        >
          <Icon name="share-variant" size={24} color="#2196F3" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onDelete(document)}
        >
          <Icon name="delete" size={24} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DocumentsScreen = () => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState('all'); // all, images, documents

  useEffect(() => {
    fetchDocuments();
  }, [filter]);

  const fetchDocuments = async () => {
    try {
      const data = await firebaseService.getDocuments({
        userId: user.uid,
        type: filter !== 'all' ? filter : undefined,
      });
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setUploading(true);

        // Check file size
        const fileInfo = await FileSystem.getInfoAsync(result.uri);
        if (fileInfo.size > 10 * 1024 * 1024) { // 10MB limit
          Alert.alert(
            t('common.error'),
            t('documents.errorFileSize'),
            [{ text: t('common.ok') }]
          );
          return;
        }

        // Upload to Firebase Storage
        const downloadUrl = await firebaseService.uploadDocument(result.uri, {
          name: result.name,
          type: result.mimeType,
          size: fileInfo.size,
          userId: user.uid,
        });

        // Create document record
        await firebaseService.createDocument({
          name: result.name,
          type: result.mimeType,
          size: fileInfo.size,
          url: downloadUrl,
          userId: user.uid,
          createdAt: new Date().toISOString(),
        });

        await fetchDocuments();
        Alert.alert(
          t('common.success'),
          t('documents.uploadSuccess'),
          [{ text: t('common.ok') }]
        );
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      Alert.alert(
        t('common.error'),
        t('documents.uploadError'),
        [{ text: t('common.ok') }]
      );
    } finally {
      setUploading(false);
    }
  };

  const handleShare = async (document) => {
    try {
      // Download file to cache
      const localUri = `${FileSystem.cacheDirectory}${document.name}`;
      await FileSystem.downloadAsync(document.url, localUri);

      if (Platform.OS === 'ios') {
        await Sharing.shareAsync(localUri);
      } else {
        await Sharing.shareAsync(localUri, {
          mimeType: document.type,
          dialogTitle: t('documents.shareTitle'),
        });
      }
    } catch (error) {
      console.error('Error sharing document:', error);
      Alert.alert(
        t('common.error'),
        t('documents.shareError'),
        [{ text: t('common.ok') }]
      );
    }
  };

  const handleDelete = async (document) => {
    Alert.alert(
      t('common.confirm'),
      t('documents.deleteConfirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: async () => {
            try {
              await firebaseService.deleteDocument(document.id);
              await fetchDocuments();
            } catch (error) {
              console.error('Error deleting document:', error);
              Alert.alert(
                t('common.error'),
                t('documents.deleteError'),
                [{ text: t('common.ok') }]
              );
            }
          },
        },
      ]
    );
  };

  const renderFilterButton = (value, label, icon) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        filter === value && styles.filterButtonActive,
      ]}
      onPress={() => setFilter(value)}
    >
      <Icon
        name={icon}
        size={20}
        color={filter === value ? '#FFFFFF' : '#666'}
      />
      <Text
        style={[
          styles.filterButtonText,
          filter === value && styles.filterButtonTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {renderFilterButton('all', t('documents.filters.all'), 'file-multiple')}
        {renderFilterButton('images', t('documents.filters.images'), 'image')}
        {renderFilterButton('documents', t('documents.filters.documents'), 'file-document')}
      </View>

      <FlatList
        data={documents}
        renderItem={({ item }) => (
          <DocumentItem
            document={item}
            onShare={handleShare}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="file-document-off" size={48} color="#9E9E9E" />
            <Text style={styles.emptyText}>
              {t('documents.noDocuments')}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.uploadButton, uploading && styles.uploadButtonDisabled]}
        onPress={handleUpload}
        disabled={uploading}
      >
        {uploading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <Icon name="upload" size={24} color="#FFFFFF" />
            <Text style={styles.uploadButtonText}>
              {t('documents.upload')}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  filterButtonActive: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 4,
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  listContainer: {
    padding: 10,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  documentIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  documentInfo: {
    flex: 1,
    marginRight: 12,
  },
  documentName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  documentMeta: {
    fontSize: 12,
    color: '#666',
  },
  documentActions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  uploadButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 28,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  uploadButtonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default DocumentsScreen;
