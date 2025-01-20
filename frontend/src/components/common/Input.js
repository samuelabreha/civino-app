import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Input = ({
  label,
  error,
  touched,
  style,
  containerStyle,
  ...props
}) => {
  const hasError = error && touched;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          hasError && styles.inputError,
          style,
        ]}
        placeholderTextColor={theme.colors.text.hint}
        {...props}
      />
      {hasError && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text.primary,
  },
  input: {
    ...theme.common.input,
    backgroundColor: theme.colors.background.default,
    borderColor: theme.colors.border.main,
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular,
  },
  inputError: {
    borderColor: theme.colors.state.error,
  },
  errorText: {
    marginTop: theme.spacing.xs,
    color: theme.colors.state.error,
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.regular,
  },
});

export default Input;
