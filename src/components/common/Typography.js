import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Typography = ({
  variant = 'body1',
  color = 'primary',
  align = 'left',
  weight = 'regular',
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.base,
    styles[variant],
    styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
    styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
    styles[`weight${weight.charAt(0).toUpperCase()}${weight.slice(1)}`],
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: theme.typography.fontFamily.primary,
  },

  // Variants
  h1: {
    fontSize: theme.typography.sizes.h1,
    lineHeight: theme.typography.lineHeights.h1,
  },
  h2: {
    fontSize: theme.typography.sizes.h2,
    lineHeight: theme.typography.lineHeights.h2,
  },
  h3: {
    fontSize: theme.typography.sizes.h3,
    lineHeight: theme.typography.lineHeights.h3,
  },
  h4: {
    fontSize: theme.typography.sizes.h4,
    lineHeight: theme.typography.lineHeights.h4,
  },
  h5: {
    fontSize: theme.typography.sizes.h5,
    lineHeight: theme.typography.lineHeights.h5,
  },
  h6: {
    fontSize: theme.typography.sizes.h6,
    lineHeight: theme.typography.lineHeights.h6,
  },
  subtitle1: {
    fontSize: theme.typography.sizes.subtitle1,
    lineHeight: theme.typography.lineHeights.subtitle1,
  },
  subtitle2: {
    fontSize: theme.typography.sizes.subtitle2,
    lineHeight: theme.typography.lineHeights.subtitle2,
  },
  body1: {
    fontSize: theme.typography.sizes.body1,
    lineHeight: theme.typography.lineHeights.body1,
  },
  body2: {
    fontSize: theme.typography.sizes.body2,
    lineHeight: theme.typography.lineHeights.body2,
  },
  button: {
    fontSize: theme.typography.sizes.button,
    lineHeight: theme.typography.lineHeights.button,
  },
  caption: {
    fontSize: theme.typography.sizes.caption,
    lineHeight: theme.typography.lineHeights.caption,
  },
  overline: {
    fontSize: theme.typography.sizes.overline,
    lineHeight: theme.typography.lineHeights.overline,
    textTransform: 'uppercase',
  },

  // Colors
  colorPrimary: {
    color: theme.colors.text.primary,
  },
  colorSecondary: {
    color: theme.colors.text.secondary,
  },
  colorDisabled: {
    color: theme.colors.text.disabled,
  },
  colorError: {
    color: theme.colors.error.main,
  },
  colorSuccess: {
    color: theme.colors.success.main,
  },
  colorWarning: {
    color: theme.colors.warning.main,
  },
  colorInfo: {
    color: theme.colors.info.main,
  },

  // Alignment
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignJustify: {
    textAlign: 'justify',
  },

  // Font weights
  weightLight: {
    fontWeight: theme.typography.fontWeights.light,
  },
  weightRegular: {
    fontWeight: theme.typography.fontWeights.regular,
  },
  weightMedium: {
    fontWeight: theme.typography.fontWeights.medium,
  },
  weightSemiBold: {
    fontWeight: theme.typography.fontWeights.semiBold,
  },
  weightBold: {
    fontWeight: theme.typography.fontWeights.bold,
  },
});

export default Typography;
