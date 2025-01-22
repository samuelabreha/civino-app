import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Typography } from './Typography';
import { theme } from '../../theme';

const LoadingState = ({ message = 'Chargement...' }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary.main} />
    <Typography variant="body2" style={styles.message}>
      {message}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.default,
  },
  message: {
    marginTop: theme.spacing.md,
    color: theme.colors.text.secondary,
  },
});

export default LoadingState;
