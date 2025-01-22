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

const DocumentsHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const documentCategories = [
    {
      id: 'contracts',
      title: t('documents.contracts'),
      icon: 'file-document',
      color: '#2196F3',
      count: 12,
    },
    {
      id: 'reports',
      title: t('documents.reports'),
      icon: 'chart-box',
      color: '#4CAF50',
      count: 8,
    },
    {
      id: 'evaluations',
      title: t('documents.evaluations'),
      icon: 'clipboard-check',
      color: '#FF9800',
      count: 15,
    },
    {
      id: 'observations',
      title: t('documents.observations'),
      icon: 'eye',
      color: '#9C27B0',
      count: 20,
    },
  ];

  const recentDocuments = [
    {
      id: 1,
      title: t('documents.recentDoc1'),
      type: 'contract',
      date: '2025-01-20',
      icon: 'file-document',
      color: '#2196F3',
    },
    {
      id: 2,
      title: t('documents.recentDoc2'),
      type: 'report',
      date: '2025-01-19',
      icon: 'chart-box',
      color: '#4CAF50',
    },
    {
      id: 3,
      title: t('documents.recentDoc3'),
      type: 'evaluation',
      date: '2025-01-18',
      icon: 'clipboard-check',
      color: '#FF9800',
    },
  ];

  const handleCategoryPress = (categoryId) => {
    navigation.navigate('DocumentsList', { category: categoryId });
  };

  const handleDocumentPress = (document) => {
    navigation.navigate('DocumentViewer', { documentId: document.id });
  };

  const handleCreateDocument = () => {
    navigation.navigate('CreateDocument');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={t('documents.searchPlaceholder')}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateDocument}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>{t('documents.categories')}</Text>
          <View style={styles.categoriesGrid}>
            {documentCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category.id)}
              >
                <View
                  style={[
                    styles.categoryIcon,
                    { backgroundColor: category.color },
                  ]}
                >
                  <Icon name={category.icon} size={32} color="#FFFFFF" />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>{category.count}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.recentContainer}>
          <Text style={styles.sectionTitle}>{t('documents.recent')}</Text>
          {recentDocuments.map((document) => (
            <TouchableOpacity
              key={document.id}
              style={styles.documentCard}
              onPress={() => handleDocumentPress(document)}
            >
              <View
                style={[styles.documentIcon, { backgroundColor: document.color }]}
              >
                <Icon name={document.icon} size={24} color="#FFFFFF" />
              </View>
              <View style={styles.documentInfo}>
                <Text style={styles.documentTitle}>{document.title}</Text>
                <Text style={styles.documentDate}>{document.date}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  categoriesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 14,
    color: '#666',
  },
  recentContainer: {
    padding: 20,
  },
  documentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default DocumentsHomeScreen;
