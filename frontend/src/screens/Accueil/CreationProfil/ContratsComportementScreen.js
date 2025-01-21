import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';

const ContratsComportementScreen = ({ navigation, route }) => {
  const { statut, nom, prenom } = route.params;
  const [selectedContrats, setSelectedContrats] = useState([]);

  const contrats = [
    { id: 1, title: 'Respect des règles', description: 'Suivre les règles établies' },
    { id: 2, title: 'Communication', description: 'Communiquer de manière respectueuse' },
    { id: 3, title: 'Participation', description: 'Participer activement aux activités' },
    { id: 4, title: 'Collaboration', description: 'Travailler en équipe' },
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
      <Header title="Contrats de comportement" />
      <ScrollView style={styles.content}>
        <Text style={styles.description}>
          Sélectionnez les contrats de comportement que vous souhaitez suivre :
        </Text>
        
        {contrats.map(contrat => (
          <TouchableOpacity
            key={contrat.id}
            style={[
              styles.contratCard,
              selectedContrats.includes(contrat.id) && styles.selectedCard
            ]}
            onPress={() => toggleContrat(contrat.id)}
          >
            <Text style={styles.contratTitle}>{contrat.title}</Text>
            <Text style={styles.contratDescription}>{contrat.description}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={[
            styles.submitButton,
            selectedContrats.length === 0 && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={selectedContrats.length === 0}
        >
          <Text style={styles.submitButtonText}>Continuer</Text>
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
  description: {
    ...typography.body,
    marginBottom: 20,
  },
  contratCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: colors.lightGray,
  },
  contratTitle: {
    ...typography.h2,
    marginBottom: 8,
  },
  contratDescription: {
    ...typography.body,
    color: '#666',
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: colors.lightGray,
  },
  submitButtonText: {
    ...typography.body,
    color: colors.background,
  },
});

export default ContratsComportementScreen;
