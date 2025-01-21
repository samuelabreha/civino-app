import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { colors, typography } from '../styles/globalStyles';

const PDFDownloader = ({ url, fileName }) => {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const downloadPDF = async () => {
    try {
      setDownloading(true);
      setError(null);

      const { config, fs } = RNFetchBlob;
      const documentsPath = fs.dirs.DocumentDir;
      const path = `${documentsPath}/${fileName || 'document.pdf'}`;

      const response = await config({
        fileCache: true,
        path,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path,
          description: 'Téléchargement du document',
          mime: 'application/pdf',
        },
      }).fetch('GET', url);

      setDownloading(false);
      return response;
    } catch (err) {
      setError('Erreur lors du téléchargement');
      setDownloading(false);
      console.error('Erreur de téléchargement:', err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, downloading && styles.buttonDisabled]}
        onPress={downloadPDF}
        disabled={downloading}
      >
        {downloading ? (
          <ActivityIndicator color={colors.background} />
        ) : (
          <Text style={styles.buttonText}>
            Télécharger le PDF
          </Text>
        )}
      </TouchableOpacity>
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.lightGray,
  },
  buttonText: {
    ...typography.body,
    color: colors.background,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: 8,
  },
});

export default PDFDownloader;
