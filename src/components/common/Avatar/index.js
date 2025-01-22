import React from 'react';
import { View, Image } from 'react-native';
import Icon from '../Icon';
import { theme } from '../../../theme';
import { styles } from './styles';

const Avatar = ({
  source,
  size = 'medium',
  variant = 'circular',
  icon,
  style,
  ...props
}) => {
  const getSizeStyles = () => {
    const sizes = {
      small: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 40,
        height: 40,
      },
      large: {
        width: 56,
        height: 56,
      },
      extraLarge: {
        width: 80,
        height: 80,
      },
    };

    return sizes[size] || sizes.medium;
  };

  const getVariantStyles = () => {
    const variants = {
      circular: {
        borderRadius: getSizeStyles().width / 2,
      },
      rounded: {
        borderRadius: theme.borderRadius.medium,
      },
      square: {
        borderRadius: 0,
      },
    };

    return variants[variant] || variants.circular;
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  const renderContent = () => {
    if (source) {
      return (
        <Image
          source={source}
          style={[styles.image, sizeStyles, variantStyles]}
          {...props}
        />
      );
    }

    return (
      <View
        style={[
          styles.placeholder,
          sizeStyles,
          variantStyles,
          { backgroundColor: theme.colors.grey[200] },
        ]}
      >
        <Icon
          name={icon || 'account'}
          size={sizeStyles.width * 0.6}
          color="grey.500"
        />
      </View>
    );
  };

  return (
    <View style={[sizeStyles, variantStyles, style]}>
      {renderContent()}
    </View>
  );
};

export default Avatar;
