import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const getFileIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return 'file-pdf-box';
    case 'doc':
    case 'docx':
      return 'file-word-box';
    case 'xls':
    case 'xlsx':
      return 'file-excel-box';
    case 'ppt':
    case 'pptx':
      return 'file-powerpoint-box';
    case 'jpg':
    case 'jpeg':
    case 'png':
      return 'file-image-box';
    default:
      return 'file-document-outline';
  }
};

const getFileColor = (type) => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return '#f44336';
    case 'doc':
    case 'docx':
      return '#2196F3';
    case 'xls':
    case 'xlsx':
      return '#4CAF50';
    case 'ppt':
    case 'pptx':
      return '#FF9800';
    case 'jpg':
    case 'jpeg':
    case 'png':
      return '#9C27B0';
    default:
      return '#757575';
  }
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const DocumentCard = ({
  document,
  onPress,
  onDownload,
  onDelete,
  downloading = false,
  showActions = true,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: getFileColor(document.type) },
          ]}
        >
          <Icon
            name={getFileIcon(document.type)}
            size={30}
            color="#fff"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.fileName} numberOfLines={1}>
            {document.name}
          </Text>
          <View style={styles.details}>
            <Text style={styles.fileDetails}>
              {formatFileSize(document.size)} • {document.type.toUpperCase()}
            </Text>
            <Text style={styles.date}>
              {format(new Date(document.date), 'dd MMM yyyy', { locale: fr })}
            </Text>
          </View>
        </View>

        {showActions && (
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onDownload}
              disabled={downloading}
            >
              {downloading ? (
                <ActivityIndicator size="small" color="#2196F3" />
              ) : (
                <Icon name="download" size={24} color="#2196F3" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onDelete}
            >
              <Icon name="delete" size={24} color="#f44336" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {document.description && (
        <Text style={styles.description} numberOfLines={2}>
          {document.description}
        </Text>
      )}

      {document.tags && document.tags.length > 0 && (
        <View style={styles.tags}>
          {document.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileDetails: {
    fontSize: 12,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 5,
    marginLeft: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e3f2fd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#2196F3',
  },
});

export default DocumentCard;
