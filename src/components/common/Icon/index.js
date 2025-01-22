import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../theme';

const Icon = ({ name, size = 24, color = 'text.primary', style, ...props }) => {
  const getColor = () => {
    if (typeof color === 'string') {
      const [main, shade] = color.split('.');
      return shade
        ? theme.colors[main][shade]
        : theme.colors[main]?.main || color;
    }
    return color;
  };

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={getColor()}
      style={style}
      {...props}
    />
  );
};

export default Icon;
