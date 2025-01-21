import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/globalStyles';
import LoginManager from '../../components/LoginManager';
import Header from '../../components/Header';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (email, password) => {
    // Logique de connexion à implémenter
    navigation.replace('MainApp');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Header title="Connexion" showBack={false} />
      <LoginManager
        onLogin={handleLogin}
        onRegister={handleRegister}
        onForgotPassword={handleForgotPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default LoginScreen;
