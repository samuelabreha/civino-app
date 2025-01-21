import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import AIComponent from '../../../components/AIComponent';
import PDFDownloader from '../../../components/PDFDownloader';

const RapportProgressionScreen = ({ navigation, route }) => {
  const { statut, nom, prenom, contrats, evaluation } = route.params;
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyzeData();
  }, []);

  const analyzeData = async () => {
    try {
      // Utilisation du composant AI pour analyser les données
      const result = await AIComponent.analyzeProfileData({
        statut,
        nom,
        prenom,
        contrats,
        evaluation,
      });

      setAnalysis(result);
    } catch (error) {
      console.error('Erreur lors de l'analyse:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await PDFDownloader.generateAndDownload({
        fileName: `rapport_${nom}_${prenom}.pdf`,
        data: {
          userInfo: { statut, nom, prenom },
          contrats,
          evaluation,
          analysis,
        },
      });
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  const handleFinish = () => {
    // Navigation vers l'écran approprié selon le statut
    const targetScreen = {
      Enfant: 'EnfantProfil',
      Enseignant: 'EnseignantProfil',
      'Moniteur FINC': 'MoniteurFincProfil',
      Parent: 'ParentsProfil',
      Administrateur: 'AdministrateurProfil',
      'Animatrice Référente': 'AnimatriceReferenteProfil',
    }[statut];

    navigation.navigate(targetScreen, {
      userData: {
        statut,
        nom,
        prenom,
        contrats,
        evaluation,
        analysis,
      },
    });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Header title="Génération du rapport" />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Analyse des données en cours...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Rapport de progression" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          <Text style={styles.text}>Nom: {nom}</Text>
          <Text style={styles.text}>Prénom: {prenom}</Text>
          <Text style={styles.text}>Statut: {statut}</Text>
        </View>

        {contrats && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contrats de comportement</Text>
            {contrats.map((contratId, index) => (
              <Text key={index} style={styles.text}>
                • Contrat {contratId}
              </Text>
            ))}
          </View>
        )}

        {analysis && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Analyse</Text>
            <Text style={styles.text}>{analysis.summary}</Text>
            
            {analysis.recommendations && (
              <>
                <Text style={styles.subsectionTitle}>Recommandations</Text>
                {analysis.recommendations.map((rec, index) => (
                  <Text key={index} style={styles.text}>• {rec}</Text>
                ))}
              </>
            )}
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleDownloadPDF}>
            <Text style={styles.buttonText}>Télécharger le rapport PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]} 
            onPress={handleFinish}
          >
            <Text style={styles.buttonText}>Terminer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...typography.body,
    color: colors.primary,
  },
  section: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: 16,
    color: colors.primary,
  },
  subsectionTitle: {
    ...typography.h3,
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    ...typography.body,
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    ...typography.body,
    color: colors.background,
  },
});

export default RapportProgressionScreen;
