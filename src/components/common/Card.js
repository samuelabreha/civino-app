import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

const Card = ({
  children,
  onPress,
  variant = 'elevated',
  padding = 'medium',
  style,
  ...props
}) => {
  const Component = onPress ? TouchableOpacity : View;
  
  const cardStyles = [
    styles.base,
    styles[variant],
    styles[`padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
    style,
  ];

  return (
    <Component
      style={cardStyles}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      {...props}
    >
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.shape.borderRadius.md,
    overflow: 'hidden',
  },

  // Variants
  elevated: {
    ...theme.shadows.md,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  flat: {
    backgroundColor: theme.colors.grey[50],
  },

  // Padding variations
  paddingNone: {
    padding: 0,
  },
  paddingSmall: {
    padding: theme.spacing.sm,
  },
  paddingMedium: {
    padding: theme.spacing.md,
  },
  paddingLarge: {
    padding: theme.spacing.lg,
  },
});

export default Card;
