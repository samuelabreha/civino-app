import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pdf from 'react-native-pdf';

const DocumentViewerScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { documentId } = route.params;
  const [isFullScreen, setIsFullScreen] = useState(false);

  const document = {
    id: documentId,
    title: t('documents.sampleDoc'),
    type: 'contract',
    date: '2025-01-20',
    author: 'John Doe',
    size: '2.5 MB',
    status: 'active',
    url: 'https://example.com/document.pdf',
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: t('documents.shareMessage'),
        url: document.url,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    // Implement document download functionality
  };

  const handlePrint = () => {
    // Implement document printing functionality
  };

  const renderToolbar = () => (
    <View style={styles.toolbar}>
      <TouchableOpacity
        style={styles.toolbarButton}
        onPress={() => setIsFullScreen(!isFullScreen)}
      >
        <Icon
          name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
          size={24}
          color="#666"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toolbarButton} onPress={handleShare}>
        <Icon name="share-variant" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toolbarButton} onPress={handleDownload}>
        <Icon name="download" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toolbarButton} onPress={handlePrint}>
        <Icon name="printer" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {!isFullScreen && (
        <View style={styles.header}>
          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>{document.title}</Text>
            <Text style={styles.documentMeta}>
              {document.type} • {document.size}
            </Text>
          </View>
          {renderToolbar()}
        </View>
      )}

      <View style={styles.content}>
        <Pdf
          source={{ uri: document.url }}
          style={styles.pdf}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
        />
      </View>

      {!isFullScreen && (
        <View style={styles.footer}>
          <View style={styles.metadataContainer}>
            <View style={styles.metadataItem}>
              <Icon name="account" size={20} color="#666" />
              <Text style={styles.metadataText}>{document.author}</Text>
            </View>
            <View style={styles.metadataItem}>
              <Icon name="calendar" size={20} color="#666" />
              <Text style={styles.metadataText}>{document.date}</Text>
            </View>
            <View style={styles.metadataItem}>
              <View
                style={[
                  styles.statusDot,
                  {
                    backgroundColor:
                      document.status === 'active' ? '#4CAF50' : '#FF9800',
                  },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  {
                    color: document.status === 'active' ? '#4CAF50' : '#FF9800',
                  },
                ]}
              >
                {document.status}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  documentInfo: {
    marginBottom: 15,
  },
  documentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  documentMeta: {
    fontSize: 14,
    color: '#666',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toolbarButton: {
    padding: 10,
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metadataText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DocumentViewerScreen;
