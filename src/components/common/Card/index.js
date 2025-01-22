import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../../theme';
import { styles } from './styles';

const Card = ({
  children,
  variant = 'elevated',
  onPress,
  style,
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      elevated: {
        backgroundColor: theme.colors.background.paper,
        borderRadius: theme.borderRadius.medium,
        ...theme.shadows.md,
      },
      outlined: {
        backgroundColor: theme.colors.background.paper,
        borderRadius: theme.borderRadius.medium,
        borderWidth: 1,
        borderColor: theme.colors.divider,
      },
      filled: {
        backgroundColor: theme.colors.background.default,
        borderRadius: theme.borderRadius.medium,
      },
    };

    return variants[variant] || variants.elevated;
  };

  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={[styles.card, getVariantStyles(), style]}
      onPress={onPress}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

export default Card;
