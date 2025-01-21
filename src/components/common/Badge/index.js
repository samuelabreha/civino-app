import React from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import { theme } from '../../../theme';
import { styles } from './styles';

const Badge = ({
  content,
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  style,
  ...props
}) => {
  const getColorStyles = () => {
    const colors = {
      primary: {
        background: variant === 'contained' ? theme.colors.primary.main : theme.colors.primary.light,
        text: variant === 'contained' ? theme.colors.primary.contrastText : theme.colors.primary.main,
      },
      secondary: {
        background: variant === 'contained' ? theme.colors.secondary.main : theme.colors.secondary.light,
        text: variant === 'contained' ? theme.colors.secondary.contrastText : theme.colors.secondary.main,
      },
      error: {
        background: variant === 'contained' ? theme.colors.error.main : theme.colors.error.light,
        text: variant === 'contained' ? theme.colors.error.contrastText : theme.colors.error.main,
      },
      warning: {
        background: variant === 'contained' ? theme.colors.warning.main : theme.colors.warning.light,
        text: variant === 'contained' ? theme.colors.warning.contrastText : theme.colors.warning.main,
      },
      info: {
        background: variant === 'contained' ? theme.colors.info.main : theme.colors.info.light,
        text: variant === 'contained' ? theme.colors.info.contrastText : theme.colors.info.main,
      },
      success: {
        background: variant === 'contained' ? theme.colors.success.main : theme.colors.success.light,
        text: variant === 'contained' ? theme.colors.success.contrastText : theme.colors.success.main,
      },
    };

    return colors[color] || colors.primary;
  };

  const getSizeStyles = () => {
    const sizes = {
      small: {
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 10,
      },
      medium: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
      },
      large: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 14,
      },
    };

    return sizes[size] || sizes.medium;
  };

  const colorStyles = getColorStyles();
  const sizeStyles = getSizeStyles();

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: colorStyles.background,
        },
        sizeStyles,
        style,
      ]}
      {...props}
    >
      <Typography
        variant={size === 'small' ? 'caption' : 'body2'}
        style={{ color: colorStyles.text }}
      >
        {content}
      </Typography>
    </View>
  );
};

export default Badge;
