import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';

const SaisiePrenomScreen = ({ navigation, route }) => {
  const [prenom, setPrenom] = useState('');
  const [error, setError] = useState('');
  const { statut, nom } = route.params;

  const handleSubmit = () => {
    if (!prenom.trim()) {
      setError('Le prénom est requis');
      return;
    }
    
    const nextScreen = statut === 'Enfant' ? 'ContratsComportement' : 'RapportProgression';
    navigation.navigate(nextScreen, { statut, nom, prenom });
  };

  return (
    <View style={styles.container}>
      <Header title="Saisie du prénom" />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Votre prénom"
          value={prenom}
          onChangeText={(text) => {
            setPrenom(text);
            setError('');
          }}
          autoCapitalize="words"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Suivant</Text>
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
    padding: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.body,
    color: colors.background,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginBottom: 16,
  },
});

export default SaisiePrenomScreen;
