import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../../theme';

const Typography = ({
  variant = 'body1',
  color = 'text.primary',
  weight = 'regular',
  align = 'left',
  style,
  children,
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      h1: {
        fontSize: theme.typography.h1.fontSize,
        lineHeight: theme.typography.h1.lineHeight,
      },
      h2: {
        fontSize: theme.typography.h2.fontSize,
        lineHeight: theme.typography.h2.lineHeight,
      },
      h3: {
        fontSize: theme.typography.h3.fontSize,
        lineHeight: theme.typography.h3.lineHeight,
      },
      h4: {
        fontSize: theme.typography.h4.fontSize,
        lineHeight: theme.typography.h4.lineHeight,
      },
      h5: {
        fontSize: theme.typography.h5.fontSize,
        lineHeight: theme.typography.h5.lineHeight,
      },
      h6: {
        fontSize: theme.typography.h6.fontSize,
        lineHeight: theme.typography.h6.lineHeight,
      },
      subtitle1: {
        fontSize: theme.typography.subtitle1.fontSize,
        lineHeight: theme.typography.subtitle1.lineHeight,
      },
      subtitle2: {
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: theme.typography.subtitle2.lineHeight,
      },
      body1: {
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
      },
      body2: {
        fontSize: theme.typography.body2.fontSize,
        lineHeight: theme.typography.body2.lineHeight,
      },
      button: {
        fontSize: theme.typography.button.fontSize,
        lineHeight: theme.typography.button.lineHeight,
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: theme.typography.caption.fontSize,
        lineHeight: theme.typography.caption.lineHeight,
      },
      overline: {
        fontSize: theme.typography.overline.fontSize,
        lineHeight: theme.typography.overline.lineHeight,
        textTransform: 'uppercase',
      },
    };

    return variants[variant] || variants.body1;
  };

  const getColorStyles = () => {
    const colors = {
      'text.primary': theme.colors.text.primary,
      'text.secondary': theme.colors.text.secondary,
      primary: theme.colors.primary.main,
      secondary: theme.colors.secondary.main,
      error: theme.colors.error.main,
      warning: theme.colors.warning.main,
      info: theme.colors.info.main,
      success: theme.colors.success.main,
    };

    return { color: colors[color] || colors['text.primary'] };
  };

  const getFontWeight = () => {
    const weights = {
      thin: '100',
      extraLight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    };

    return { fontWeight: weights[weight] || weights.regular };
  };

  return (
    <Text
      style={[
        {
          fontFamily: theme.typography.fontFamily.primary,
          textAlign: align,
        },
        getVariantStyles(),
        getColorStyles(),
        getFontWeight(),
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
