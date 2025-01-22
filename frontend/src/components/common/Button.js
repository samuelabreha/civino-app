import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from './Icon';
import { theme } from '../../theme';

const Button = ({ 
  onPress, 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  style,
  textStyle,
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
          elevation: 0,
          shadowOpacity: 0,
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
          height: 48,
          paddingHorizontal: theme.spacing.lg,
        };
    }
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.text.disabled;
    if (variant === 'outline' || variant === 'text') return theme.colors.primary.main;
    return theme.colors.primary.contrastText;
  };

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator color={getTextColor()} testID="loading-indicator" />;
    }

    const iconComponent = icon && (
      <Icon
        name={icon}
        size={24}
        color={getTextColor()}
        style={[
          styles.icon,
          iconPosition === 'right' && styles.iconRight,
        ]}
      />
    );

    return (
      <>
        {iconPosition === 'left' && iconComponent}
        <Text style={[
          styles.text,
          { color: getTextColor() },
          textStyle,
        ]}>
          {children}
        </Text>
        {iconPosition === 'right' && iconComponent}
      </>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
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
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
    borderWidth: 0,
    ...theme.shadows.sm,
  },
  text: {
    fontSize: theme.fontSizes.button,
    fontFamily: theme.fonts.medium,
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    marginRight: theme.spacing.sm,
  },
  iconRight: {
    marginRight: 0,
    marginLeft: theme.spacing.sm,
  },
});

export default Button;
