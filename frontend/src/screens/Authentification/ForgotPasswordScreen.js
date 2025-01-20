import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleResetPassword = async () => {
    try {
      // Logique de réinitialisation du mot de passe à implémenter
      setIsError(false);
      setMessage('Un email de réinitialisation a été envoyé');
      setTimeout(() => navigation.goBack(), 2000);
    } catch (err) {
      setIsError(true);
      setMessage(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Mot de passe oublié" />
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Entrez votre adresse email pour recevoir les instructions de réinitialisation
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {message ? (
          <Text style={[styles.message, isError && styles.errorMessage]}>
            {message}
          </Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
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
  instructions: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: 24,
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
  message: {
    ...typography.caption,
    color: colors.success,
    marginBottom: 16,
    textAlign: 'center',
  },
  errorMessage: {
    color: colors.error,
  },
});

export default ForgotPasswordScreen;
