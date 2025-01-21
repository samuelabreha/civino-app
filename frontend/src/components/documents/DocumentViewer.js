import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pdf from 'react-native-pdf';
import ImageViewer from 'react-native-image-zoom-viewer';
import WebView from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const DocumentViewer = ({
  uri,
  type,
  fileName,
  onClose,
  onShare,
  onDownload,
  loading = false,
}) => {
  const [error, setError] = useState(null);

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
          <Text style={styles.loadingText}>Chargement du document...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Icon name="alert-circle" size={50} color="#f44336" />
          <Text style={styles.errorText}>
            Une erreur est survenue lors du chargement du document
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => setError(null)}
          >
            <Text style={styles.retryButtonText}>Réessayer</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (type.toLowerCase()) {
      case 'pdf':
        return (
          <Pdf
            source={{ uri }}
            style={styles.pdf}
            onError={(error) => setError(error)}
            onLoadComplete={(numberOfPages) => {
              console.log(`Loaded ${numberOfPages} pages`);
            }}
          />
        );

      case 'jpg':
      case 'jpeg':
      case 'png':
        return (
          <ImageViewer
            imageUrls={[{ url: uri }]}
            enableSwipeDown
            onSwipeDown={onClose}
            backgroundColor="#fff"
            renderIndicator={() => null}
          />
        );

      case 'doc':
      case 'docx':
      case 'xls':
      case 'xlsx':
      case 'ppt':
      case 'pptx':
        return (
          <WebView
            source={{
              uri: `https://docs.google.com/viewer?url=${encodeURIComponent(
                uri
              )}&embedded=true`,
            }}
            style={styles.webview}
            onError={() => setError('Error loading document')}
            startInLoadingState
            renderLoading={() => (
              <ActivityIndicator
                style={styles.webviewLoader}
                size="large"
                color="#2196F3"
              />
            )}
          />
        );

      default:
        return (
          <View style={styles.unsupportedContainer}>
            <Icon name="file-question" size={50} color="#FF9800" />
            <Text style={styles.unsupportedText}>
              Type de fichier non pris en charge
            </Text>
          </View>
        );
    }
  };

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.fileName} numberOfLines={1}>
            {fileName}
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={onShare}>
              <Icon name="share-variant" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onDownload}>
              <Icon name="download" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>{renderContent()}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  closeButton: {
    padding: 5,
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 5,
    marginLeft: 15,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: '#f44336',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  pdf: {
    flex: 1,
    width,
  },
  webview: {
    flex: 1,
  },
  webviewLoader: {
    position: 'absolute',
    top: height / 2 - 20,
    left: width / 2 - 20,
  },
  unsupportedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  unsupportedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF9800',
    textAlign: 'center',
  },
});

export default DocumentViewer;
