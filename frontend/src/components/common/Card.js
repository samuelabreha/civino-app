import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

const Card = ({ 
  children, 
  onPress, 
  style, 
  elevation = 'md',
  ...props 
}) => {
  const Component = onPress ? TouchableOpacity : View;
  
  const getShadow = () => {
    switch (elevation) {
      case 'sm':
        return theme.shadows.sm;
      case 'lg':
        return theme.shadows.lg;
      default:
        return theme.shadows.md;
    }
  };

  return (
    <Component
      style={[
        styles.card,
        getShadow(),
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  card: {
    ...theme.common.card,
  },
});

export default Card;
