import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import Typography from '../Typography';
import { theme } from '../../../theme';
import { styles } from './styles';

const Button = ({
  title,
  onPress,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  style,
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      contained: {
        backgroundColor: disabled
          ? theme.colors.action.disabledBackground
          : theme.colors[color].main,
        borderWidth: 0,
      },
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: disabled
          ? theme.colors.action.disabledBackground
          : theme.colors[color].main,
      },
      text: {
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    };

    return variants[variant] || variants.contained;
  };

  const getSizeStyles = () => {
    const sizes = {
      small: {
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.sm,
        borderRadius: theme.borderRadius.small,
      },
      medium: {
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.borderRadius.medium,
      },
      large: {
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.borderRadius.large,
      },
    };

    return sizes[size] || sizes.medium;
  };

  const getTextColor = () => {
    if (disabled) {
      return theme.colors.action.disabled;
    }

    if (variant === 'contained') {
      return theme.colors[color].contrastText;
    }

    return theme.colors[color].main;
  };

  const getTextVariant = () => {
    switch (size) {
      case 'small':
        return 'button';
      case 'large':
        return 'subtitle1';
      default:
        return 'button';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getVariantStyles(),
        getSizeStyles(),
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {startIcon && !loading && startIcon}
      {loading ? (
        <ActivityIndicator
          size="small"
          color={getTextColor()}
          style={styles.loader}
        />
      ) : (
        <Typography
          variant={getTextVariant()}
          style={[styles.text, { color: getTextColor() }]}
        >
          {title}
        </Typography>
      )}
      {endIcon && !loading && endIcon}
    </TouchableOpacity>
  );
};

export default Button;
