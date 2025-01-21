import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

const Button = ({
  onPress,
  title,
  variant = 'contained',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  ...props
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyles}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'contained' ? theme.colors.background.paper : theme.colors.primary.main}
          size={size === 'small' ? 'small' : 'small'}
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius.md,
    ...theme.shadows.sm,
  },
  
  // Variants
  contained: {
    backgroundColor: theme.colors.primary.main,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
  },
  text: {
    backgroundColor: 'transparent',
  },

  // Sizes
  small: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    minWidth: 64,
  },
  medium: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    minWidth: 88,
  },
  large: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    minWidth: 112,
  },

  // Text styles
  text: {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: theme.typography.sizes.button,
    fontWeight: theme.typography.fontWeights.medium,
    textAlign: 'center',
  },
  containedText: {
    color: theme.colors.primary.contrast,
  },
  outlinedText: {
    color: theme.colors.primary.main,
  },
  textText: {
    color: theme.colors.primary.main,
  },

  // Size-specific text styles
  smallText: {
    fontSize: theme.typography.sizes.caption,
  },
  mediumText: {
    fontSize: theme.typography.sizes.button,
  },
  largeText: {
    fontSize: theme.typography.sizes.h6,
  },

  // States
  disabled: {
    backgroundColor: theme.colors.grey[300],
    borderColor: theme.colors.grey[300],
    ...theme.shadows.none,
  },
  disabledText: {
    color: theme.colors.text.disabled,
  },
  fullWidth: {
    width: '100%',
  },
});

export default Button;
