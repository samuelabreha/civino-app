import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Button = ({ 
  onPress, 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  fullWidth = false,
  style,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary.main,
          borderColor: theme.colors.secondary.main,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: theme.colors.primary.main,
          borderWidth: 1,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          borderWidth: 0,
        };
      default:
        return {
          backgroundColor: theme.colors.primary.main,
          borderColor: theme.colors.primary.main,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          height: 36,
          paddingHorizontal: theme.spacing.md,
        };
      case 'large':
        return {
          height: 56,
          paddingHorizontal: theme.spacing.xl,
        };
      default:
        return {
          height: theme.common.button.height,
          paddingHorizontal: theme.common.button.paddingHorizontal,
        };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getVariantStyles(),
        getSizeStyles(),
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <Text style={[
        styles.text,
        variant === 'outline' && styles.outlineText,
        variant === 'text' && styles.textVariantText,
        disabled && styles.disabledText,
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.common.button.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.primary.contrastText,
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.medium,
  },
  outlineText: {
    color: theme.colors.primary.main,
  },
  textVariantText: {
    color: theme.colors.primary.main,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    backgroundColor: theme.colors.action.disabledBackground,
    borderColor: theme.colors.action.disabledBackground,
  },
  disabledText: {
    color: theme.colors.action.disabled,
  },
});

export default Button;
