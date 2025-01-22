import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Typography, Card } from '../../../components/common';
import Header from '../../../components/Header';
import { theme } from '../../../theme';
import Icon from '../../../components/common/Icon';

const ContratCard = ({ title, description, selected, onPress }) => (
  <Card
    style={[
      styles.contratCard,
      selected && styles.selectedCard
    ]}
    onPress={onPress}
  >
    <View style={styles.contratHeader}>
      <Typography variant="h3" style={styles.contratTitle}>
        {title}
      </Typography>
      {selected && (
        <Icon 
          name="check-circle" 
          size={24} 
          color={theme.colors.primary.main}
        />
      )}
    </View>
    <Typography variant="body2" style={styles.contratDescription}>
      {description}
    </Typography>
  </Card>
);

const ContratsComportementScreen = ({ navigation, route }) => {
  const { statut, nom, prenom } = route.params;
  const [selectedContrats, setSelectedContrats] = useState([]);

  const contrats = [
    { 
      id: 1, 
      title: 'Respect des règles', 
      description: 'Je m'engage à suivre les règles établies et à respecter les consignes données.'
    },
    { 
      id: 2, 
      title: 'Communication positive', 
      description: 'Je m'engage à communiquer de manière respectueuse avec les autres.'
    },
    { 
      id: 3, 
      title: 'Participation active', 
      description: 'Je m'engage à participer activement aux activités proposées.'
    },
    { 
      id: 4, 
      title: 'Collaboration', 
      description: 'Je m'engage à travailler en équipe et à aider les autres.'
    },
  ];

  const toggleContrat = (id) => {
    setSelectedContrats(prev => 
      prev.includes(id)
        ? prev.filter(contratId => contratId !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    navigation.navigate('Questionnaires/EvaluationImage', {
      statut,
      nom,
      prenom,
      contrats: selectedContrats,
    });
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Contrats de comportement"
        subtitle="Sélectionnez les contrats que vous souhaitez suivre"
      />
      
      <ScrollView style={styles.content}>
        <Typography variant="body1" style={styles.description}>
          Ces contrats vous aideront à suivre et améliorer votre comportement dans différents contextes.
        </Typography>
        
        {contrats.map(contrat => (
          <ContratCard
            key={contrat.id}
            title={contrat.title}
            description={contrat.description}
            selected={selectedContrats.includes(contrat.id)}
            onPress={() => toggleContrat(contrat.id)}
          />
        ))}

        <Button
          variant="primary"
          size="large"
          fullWidth
          style={styles.submitButton}
          disabled={selectedContrats.length === 0}
          onPress={handleSubmit}
        >
          Continuer
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.default,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  description: {
    marginBottom: theme.spacing.xl,
    color: theme.colors.text.secondary,
  },
  contratCard: {
    marginBottom: theme.spacing.md,
  },
  selectedCard: {
    borderColor: theme.colors.primary.main,
    backgroundColor: theme.colors.background.light,
  },
  contratHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  contratTitle: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  contratDescription: {
    color: theme.colors.text.secondary,
  },
  submitButton: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
});

export default ContratsComportementScreen;
