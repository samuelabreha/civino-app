import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StorageScreen = () => {
  const { t } = useTranslation();
  const [storageInfo, setStorageInfo] = useState({
    total: 32, // GB
    used: 18.5, // GB
    categories: {
      photos: 8.2,
      documents: 5.7,
      cache: 2.1,
      other: 2.5,
    },
  });

  const handleClearCache = () => {
    Alert.alert(
      t('settings.storage.clearCache'),
      t('settings.storage.clearCacheConfirm'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.clear'),
          onPress: () => {
            // Clear cache logic here
            setStorageInfo({
              ...storageInfo,
              used: storageInfo.used - storageInfo.categories.cache,
              categories: {
                ...storageInfo.categories,
                cache: 0,
              },
            });
          },
          style: 'destructive',
        },
      ]
    );
  };

  const calculatePercentage = (value) => {
    return (value / storageInfo.total) * 100;
  };

  const formatSize = (size) => {
    if (size >= 1) {
      return `${size.toFixed(1)} GB`;
    }
    return `${(size * 1024).toFixed(0)} MB`;
  };

  const renderStorageBar = () => {
    const categories = [
      { id: 'photos', color: '#2196F3', icon: 'image' },
      { id: 'documents', color: '#4CAF50', icon: 'file-document' },
      { id: 'cache', color: '#FFC107', icon: 'cached' },
      { id: 'other', color: '#9E9E9E', icon: 'folder' },
    ];

    return (
      <View style={styles.storageBarContainer}>
        <View style={styles.storageBar}>
          {categories.map((category) => (
            <View
              key={category.id}
              style={[
                styles.storageBarSegment,
                {
                  backgroundColor: category.color,
                  width: `${calculatePercentage(
                    storageInfo.categories[category.id]
                  )}%`,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.storageLabels}>
          {categories.map((category) => (
            <View key={category.id} style={styles.storageLabelItem}>
              <View
                style={[styles.colorIndicator, { backgroundColor: category.color }]}
              />
              <Text style={styles.storageLabelText}>
                {t(`settings.storage.${category.id}`)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.storageInfo}>
          <Text style={styles.usedStorage}>
            {formatSize(storageInfo.used)}{' '}
            <Text style={styles.totalStorage}>
              / {formatSize(storageInfo.total)}
            </Text>
          </Text>
          <Text style={styles.storageDescription}>
            {t('settings.storage.used')}
          </Text>
        </View>
        {renderStorageBar()}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.storage.details')}</Text>

        {Object.entries(storageInfo.categories).map(([category, size]) => (
          <View key={category} style={styles.categoryItem}>
            <View style={styles.categoryInfo}>
              <Icon
                name={
                  category === 'photos'
                    ? 'image'
                    : category === 'documents'
                    ? 'file-document'
                    : category === 'cache'
                    ? 'cached'
                    : 'folder'
                }
                size={24}
                color="#666"
              />
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>
                  {t(`settings.storage.${category}`)}
                </Text>
                <Text style={styles.categorySize}>{formatSize(size)}</Text>
              </View>
            </View>
            {category === 'cache' && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClearCache}
              >
                <Text style={styles.clearButtonText}>
                  {t('settings.storage.clear')}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.storage.management')}</Text>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cloud-download" size={24} color="#666" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>
              {t('settings.storage.offlineFiles')}
            </Text>
            <Text style={styles.actionDescription}>
              {t('settings.storage.offlineFilesDescription')}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="broom" size={24} color="#666" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>
              {t('settings.storage.cleanup')}
            </Text>
            <Text style={styles.actionDescription}>
              {t('settings.storage.cleanupDescription')}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="archive" size={24} color="#666" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>
              {t('settings.storage.archive')}
            </Text>
            <Text style={styles.actionDescription}>
              {t('settings.storage.archiveDescription')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  storageInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  usedStorage: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
  },
  totalStorage: {
    fontSize: 24,
    color: '#666',
  },
  storageDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  storageBarContainer: {
    marginTop: 10,
  },
  storageBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  storageBarSegment: {
    height: '100%',
  },
  storageLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  storageLabelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 5,
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  storageLabelText: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryTextContainer: {
    marginLeft: 15,
  },
  categoryTitle: {
    fontSize: 16,
    color: '#333',
  },
  categorySize: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  clearButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 14,
    color: '#666',
  },
  actionButton: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  actionTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    color: '#333',
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default StorageScreen;
