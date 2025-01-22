import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../theme';

const Icon = ({
  name,
  size = 24,
  color = 'primary',
  variant = 'default',
  style,
  ...props
}) => {
  const getColor = () => {
    if (color.includes('.')) {
      const [category, shade] = color.split('.');
      return theme.colors[category][shade];
    }
    return theme.colors[color]?.main || color;
  };

  const iconStyles = [
    styles.container,
    variant !== 'default' && styles[variant],
    style,
  ];

  return (
    <View style={iconStyles}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={getColor()}
        style={styles.icon}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  circular: {
    borderRadius: 9999,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.grey[100],
  },
  rounded: {
    borderRadius: theme.shape.borderRadius.md,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.grey[100],
  },
  outlined: {
    borderRadius: theme.shape.borderRadius.md,
    padding: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.grey[300],
  },
});

export default Icon;
