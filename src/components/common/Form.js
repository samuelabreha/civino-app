import React from 'react';
import { View, StyleSheet } from 'react-native';
import { sharedStyles } from '../../theme/sharedStyles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/colors';

export const Form = ({ children, style }) => {
  return (
    <LinearGradient
      colors={colors.background.gradient.primary}
      style={[styles.container, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 24,
  },
  content: {
    padding: 20,
    ...sharedStyles.form,
  },
});
