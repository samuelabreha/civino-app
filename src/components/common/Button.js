import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { sharedStyles } from '../../theme/sharedStyles';
import { colors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({
  onPress,
  title,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.buttonPrimary,
    variant === 'secondary' && styles.buttonSecondary,
    variant === 'outline' && styles.buttonOutline,
    disabled && styles.buttonDisabled,
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'outline' && styles.textOutline,
    textStyle,
  ];

  if (variant === 'gradient') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={styles.gradientWrapper}
      >
        <LinearGradient
          colors={colors.background.gradient.primary}
          style={[styles.button, style]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          {loading ? (
            <ActivityIndicator color={colors.background.paper} />
          ) : (
            <Text style={textStyles}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyles}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? colors.primary.main : colors.background.paper} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    ...sharedStyles.button,
  },
  buttonPrimary: {
    ...sharedStyles.buttonPrimary,
  },
  buttonSecondary: {
    ...sharedStyles.buttonSecondary,
  },
  buttonOutline: {
    ...sharedStyles.buttonOutline,
  },
  buttonDisabled: {
    ...sharedStyles.buttonDisabled,
  },
  text: {
    ...sharedStyles.buttonText,
  },
  textOutline: {
    ...sharedStyles.buttonTextOutline,
  },
});

export default Button;
