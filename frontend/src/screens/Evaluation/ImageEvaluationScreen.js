import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';

const ImageEvaluationScreen = ({ navigation, route }) => {
  const { type, period } = route.params;
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  // TODO: Charger les images depuis les assets en fonction du type et de la période
  const getImageSource = () => {
    switch (type) {
      case 'ecole':
        return period === 'matin' 
          ? require('../../assets/Illustrations/School/morning.png')
          : require('../../assets/Illustrations/School/afternoon.png');
      case 'maison':
        return period === 'matin'
          ? require('../../assets/Illustrations/Home/morning.png')
          : require('../../assets/Illustrations/Home/afternoon.png');
      case 'maisonQuartier':
        return period === 'matin'
          ? require('../../assets/Illustrations/Community Center/morning.png')
          : require('../../assets/Illustrations/Community Center/afternoon.png');
      default:
        return null;
    }
  };

  const handleEvaluation = (evaluation) => {
    setSelectedEvaluation(evaluation);
    // TODO: Sauvegarder l'évaluation
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.imageCard}>
        <Typography variant="h2" style={styles.title}>
          Comment s'est passée ta journée ?
        </Typography>

        <Image
          source={getImageSource()}
          style={styles.image}
          resizeMode="contain"
        />
      </Card>

      <Card style={styles.evaluationCard}>
        <Typography variant="subtitle1" style={styles.subtitle}>
          Choisis une évaluation
        </Typography>

        <View style={styles.evaluationButtons}>
          <Button
            style={[styles.evaluationButton, { backgroundColor: theme.colors.evaluation.rouge }]}
            onPress={() => handleEvaluation('Rouge')}
          >
            Rouge
          </Button>
          
          <Button
            style={[styles.evaluationButton, { backgroundColor: theme.colors.evaluation.orange }]}
            onPress={() => handleEvaluation('Orange')}
          >
            Orange
          </Button>
          
          <Button
            style={[styles.evaluationButton, { backgroundColor: theme.colors.evaluation.vert }]}
            onPress={() => handleEvaluation('Vert')}
          >
            Vert
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
  imageCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: theme.spacing.md,
  },
  evaluationCard: {
    padding: theme.spacing.lg,
  },
  subtitle: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  evaluationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  evaluationButton: {
    flex: 1,
  },
});

export default ImageEvaluationScreen;
