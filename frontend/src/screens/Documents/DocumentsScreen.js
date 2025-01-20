import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';

const DocumentsScreen = () => {
  const [documents, setDocuments] = useState([
    {
      id: '1',
      name: 'Contrat de comportement - École',
      type: 'contract',
      date: '2025-01-20',
      category: 'school',
    },
    {
      id: '2',
      name: 'Rapport hebdomadaire',
      type: 'report',
      date: '2025-01-19',
      category: 'weekly',
    },
    {
      id: '3',
      name: 'Plan d\'éducation individualisé',
      type: 'iep',
      date: '2025-01-15',
      category: 'education',
    },
  ]);

  const handleUploadDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 
               'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
               'application/vnd.ms-excel',
               'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        const newDocument = {
          id: Date.now().toString(),
          name: result.name,
          type: result.name.split('.').pop(),
          date: new Date().toISOString().split('T')[0],
          uri: result.uri,
        };

        setDocuments(prev => [newDocument, ...prev]);
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  const handleDeleteDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const renderDocumentSection = (title, category) => {
    const filteredDocs = documents.filter(doc => doc.category === category);
    
    return (
      <Card style={styles.sectionCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          {title}
        </Typography>
        
        {filteredDocs.map(doc => (
          <View key={doc.id} style={styles.documentItem}>
            <View style={styles.documentInfo}>
              <Typography variant="subtitle2">{doc.name}</Typography>
              <Typography variant="caption" color="secondary">
                {doc.date}
              </Typography>
            </View>
            
            <View style={styles.documentActions}>
              <Button
                variant="outline"
                size="small"
                style={styles.actionButton}
                onPress={() => {/* TODO: Implémenter le téléchargement */}}
              >
                Télécharger
              </Button>
              <Button
                variant="outline"
                size="small"
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDeleteDocument(doc.id)}
              >
                Supprimer
              </Button>
            </View>
          </View>
        ))}
      </Card>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.uploadCard}>
        <Typography variant="h2" style={styles.title}>
          Documents
        </Typography>
        
        <Button
          onPress={handleUploadDocument}
          style={styles.uploadButton}
        >
          Ajouter un document
        </Button>
      </Card>

      {renderDocumentSection('Contrats de comportement', 'contract')}
      {renderDocumentSection('Rapports d\'observation', 'report')}
      {renderDocumentSection('Plans d\'éducation individualisés', 'iep')}
      {renderDocumentSection('Points à travailler', 'improvement')}

      <Card style={styles.documentationCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Documentation
        </Typography>
        
        <View style={styles.documentationLinks}>
          <Button
            variant="outline"
            style={styles.documentationButton}
            onPress={() => {/* TODO: Ouvrir la documentation */}}
          >
            Guide d'utilisation
          </Button>
          <Button
            variant="outline"
            style={styles.documentationButton}
            onPress={() => {/* TODO: Ouvrir les ressources */}}
          >
            Ressources pédagogiques
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  uploadCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  uploadButton: {
    width: '100%',
  },
  sectionCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.lg,
  },
  documentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  documentInfo: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  documentActions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  actionButton: {
    minWidth: 100,
  },
  deleteButton: {
    borderColor: theme.colors.state.error,
  },
  documentationCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  documentationLinks: {
    gap: theme.spacing.md,
  },
  documentationButton: {
    width: '100%',
  },
});

export default DocumentsScreen;
