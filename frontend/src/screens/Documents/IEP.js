import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PDFDownloader } from '../../components/PDFDownloader';
import { DocumentUploader } from '../../components/documents/DocumentUploader';
import { api } from '../../services/api';

const IEP = () => {
  const [iepDocuments, setIepDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIEPDocuments();
  }, []);

  const fetchIEPDocuments = async () => {
    try {
      const response = await api.get('/documents/iep');
      setIepDocuments(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des documents IEP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (formData) => {
    try {
      await api.post('/documents/iep/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchIEPDocuments(); // Rafraîchir la liste après l'upload
    } catch (error) {
      console.error('Erreur lors de l\'upload du document:', error);
    }
  };

  const handleDownload = async (documentId) => {
    try {
      const response = await api.get(`/documents/iep/download/${documentId}`, {
        responseType: 'blob',
      });
      
      const document = iepDocuments.find(doc => doc.id === documentId);
      PDFDownloader.download(response.data, document.filename);
    } catch (error) {
      console.error('Erreur lors du téléchargement du document:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Plan d'éducation individualisé (IEP)</Text>
        
        <DocumentUploader
          onUpload={handleUpload}
          category="iep"
          date={new Date().toISOString()}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Documents IEP disponibles</Text>
        
        {loading ? (
          <Text style={styles.loadingText}>Chargement des documents...</Text>
        ) : iepDocuments.length === 0 ? (
          <Text style={styles.emptyText}>Aucun document IEP disponible</Text>
        ) : (
          iepDocuments.map((document) => (
            <TouchableOpacity
              key={document.id}
              style={styles.documentItem}
              onPress={() => handleDownload(document.id)}
            >
              <Text style={styles.documentTitle}>{document.title}</Text>
              <Text style={styles.documentDate}>
                Date: {new Date(document.createdAt).toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  documentItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2196F3',
    marginBottom: 5,
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default IEP;
