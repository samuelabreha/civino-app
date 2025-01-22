import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Badge = ({
  content,
  color = 'primary',
  variant = 'standard',
  size = 'medium',
  overlap = false,
  style,
  ...props
}) => {
  const badgeStyles = [
    styles.container,
    styles[variant],
    styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
    styles[size],
    overlap && styles.overlap,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    variant === 'outlined' && styles[`textColor${color.charAt(0).toUpperCase()}${color.slice(1)}`],
  ];

  return (
    <View style={badgeStyles} {...props}>
      {content && <Text style={textStyles}>{content}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Variants
  standard: {
    borderRadius: theme.shape.borderRadius.full,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },

  // Sizes
  small: {
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
  },
  medium: {
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
  },
  large: {
    minWidth: 24,
    height: 24,
    paddingHorizontal: 8,
  },

  // Colors
  colorPrimary: {
    backgroundColor: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
  },
  colorSecondary: {
    backgroundColor: theme.colors.secondary.main,
    borderColor: theme.colors.secondary.main,
  },
  colorError: {
    backgroundColor: theme.colors.error.main,
    borderColor: theme.colors.error.main,
  },
  colorWarning: {
    backgroundColor: theme.colors.warning.main,
    borderColor: theme.colors.warning.main,
  },
  colorSuccess: {
    backgroundColor: theme.colors.success.main,
    borderColor: theme.colors.success.main,
  },
  colorInfo: {
    backgroundColor: theme.colors.info.main,
    borderColor: theme.colors.info.main,
  },

  // Text styles
  text: {
    color: theme.colors.background.paper,
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: theme.typography.fontWeights.medium,
    textAlign: 'center',
  },
  textSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 16,
  },
  textLarge: {
    fontSize: 14,
    lineHeight: 20,
  },

  // Outlined text colors
  textColorPrimary: {
    color: theme.colors.primary.main,
  },
  textColorSecondary: {
    color: theme.colors.secondary.main,
  },
  textColorError: {
    color: theme.colors.error.main,
  },
  textColorWarning: {
    color: theme.colors.warning.main,
  },
  textColorSuccess: {
    color: theme.colors.success.main,
  },
  textColorInfo: {
    color: theme.colors.info.main,
  },

  // Overlap
  overlap: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
});

export default Badge;
