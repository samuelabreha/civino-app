import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { logos } from '../constants/assets';
import { typography } from '../styles/theme';

const LoginManager = ({ onLogin, onRegister, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setError('');
      if (!email || !password) {
        setError('Veuillez remplir tous les champs');
        return;
      }
      await onLogin(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logos.default} style={styles.logo} />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={onRegister}
      >
        <Text style={styles.secondaryButtonText}>Créer un compte</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={onForgotPassword}
      >
        <Text style={styles.secondaryButtonText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    ...typography.body1,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    ...typography.button,
  },
  secondaryButton: {
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#2196F3',
    ...typography.button,
  },
  errorText: {
    ...typography.caption,
    color: '#f00',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default LoginManager;
