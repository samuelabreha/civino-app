import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';
import PDFDownloader from '../../components/PDFDownloader';

const ListeDocumentsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState([
    {
      id: '1',
      title: 'Rapport mensuel - Janvier 2025',
      type: 'PDF',
      date: '2025-01-15',
      size: '2.4 MB',
    },
    {
      id: '2',
      title: 'Contrat de comportement',
      type: 'PDF',
      date: '2025-01-10',
      size: '1.1 MB',
    },
    // Ajoutez plus de documents ici
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implémenter la logique de recherche
  };

  const handleDocumentPress = async (document) => {
    try {
      await PDFDownloader.viewDocument(document.id);
    } catch (error) {
      console.error('Erreur lors de l\'ouverture du document:', error);
    }
  };

  const handleAddDocument = () => {
    navigation.navigate('Documents/ChargerDocumentScreen');
  };

  const renderDocumentItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.documentCard}
      onPress={() => handleDocumentPress(item)}
    >
      <View style={styles.documentInfo}>
        <Text style={styles.documentTitle}>{item.title}</Text>
        <Text style={styles.documentMeta}>
          {item.type} • {item.size} • {item.date}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.downloadButton}
        onPress={() => PDFDownloader.downloadDocument(item.id)}
      >
        <Text style={styles.downloadText}>Télécharger</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Documents" />
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un document..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filtres :</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Tous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButton, styles.filterButtonInactive]}>
              <Text style={styles.filterButtonTextInactive}>PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButton, styles.filterButtonInactive]}>
              <Text style={styles.filterButtonTextInactive}>Images</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={documents}
          renderItem={renderDocumentItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.documentsList}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddDocument}
        >
          <Text style={styles.addButtonText}>Ajouter un document</Text>
        </TouchableOpacity>
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
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    ...typography.body,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterTitle: {
    ...typography.caption,
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  filterButtonInactive: {
    backgroundColor: colors.lightGray,
  },
  filterButtonText: {
    ...typography.caption,
    color: colors.white,
  },
  filterButtonTextInactive: {
    ...typography.caption,
    color: colors.gray,
  },
  documentsList: {
    paddingBottom: 80,
  },
  documentCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  documentInfo: {
    flex: 1,
    marginRight: 16,
  },
  documentTitle: {
    ...typography.body,
    marginBottom: 4,
  },
  documentMeta: {
    ...typography.caption,
    color: colors.gray,
  },
  downloadButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  downloadText: {
    ...typography.caption,
    color: colors.white,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    ...typography.body,
    color: colors.white,
  },
});

export default ListeDocumentsScreen;
