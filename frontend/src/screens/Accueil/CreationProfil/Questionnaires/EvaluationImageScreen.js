import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors, typography } from '../../../../styles/globalStyles';
import Header from '../../../../components/Header';
import AIComponent from '../../../../components/AIComponent';

const EvaluationImageScreen = ({ navigation, route }) => {
  const { statut, nom, prenom, contrats } = route.params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const images = [
    { id: 1, source: require('../../../../assets/images/mood1.png'), mood: 'Très content' },
    { id: 2, source: require('../../../../assets/images/mood2.png'), mood: 'Content' },
    { id: 3, source: require('../../../../assets/images/mood3.png'), mood: 'Neutre' },
    { id: 4, source: require('../../../../assets/images/mood4.png'), mood: 'Mécontent' },
    { id: 5, source: require('../../../../assets/images/mood5.png'), mood: 'Très mécontent' },
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    // Analyse IA de l'image sélectionnée
    if (image) {
      setAnalysis({
        mood: image.mood,
        confidence: 0.95,
      });
    }
  };

  const handleNext = () => {
    navigation.navigate('Ecole', {
      statut,
      nom,
      prenom,
      contrats,
      evaluation: {
        image: selectedImage?.id,
        mood: selectedImage?.mood,
        analysis,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Évaluation par image" />
      <ScrollView style={styles.content}>
        <Text style={styles.instruction}>
          Sélectionnez l'image qui représente le mieux votre humeur :
        </Text>

        <View style={styles.imagesContainer}>
          {images.map((image) => (
            <TouchableOpacity
              key={image.id}
              style={[
                styles.imageWrapper,
                selectedImage?.id === image.id && styles.selectedImage,
              ]}
              onPress={() => handleImageSelect(image)}
            >
              <Image source={image.source} style={styles.image} />
              <Text style={styles.moodText}>{image.mood}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedImage && (
          <View style={styles.analysisContainer}>
            <AIComponent
              data={selectedImage}
              onAnalysisComplete={(result) => setAnalysis(result)}
            />
          </View>
        )}

        <TouchableOpacity
          style={[styles.button, !selectedImage && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!selectedImage}
        >
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
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
  instruction: {
    ...typography.body,
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageWrapper: {
    width: '45%',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  selectedImage: {
    borderColor: colors.primary,
    backgroundColor: colors.lightGray,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  moodText: {
    ...typography.caption,
    marginTop: 8,
    textAlign: 'center',
  },
  analysisContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: colors.lightGray,
  },
  buttonText: {
    ...typography.body,
    color: colors.background,
  },
});

export default EvaluationImageScreen;
