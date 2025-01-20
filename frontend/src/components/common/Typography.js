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
  const getVariantStyles = () => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: theme.fontSizes.xxxl,
          fontFamily: theme.fonts.bold,
        };
      case 'h2':
        return {
          fontSize: theme.fontSizes.xxl,
          fontFamily: theme.fonts.bold,
        };
      case 'h3':
        return {
          fontSize: theme.fontSizes.xl,
          fontFamily: theme.fonts.semiBold,
        };
      case 'subtitle1':
        return {
          fontSize: theme.fontSizes.lg,
          fontFamily: theme.fonts.medium,
        };
      case 'subtitle2':
        return {
          fontSize: theme.fontSizes.md,
          fontFamily: theme.fonts.medium,
        };
      case 'body2':
        return {
          fontSize: theme.fontSizes.sm,
          fontFamily: theme.fonts.regular,
        };
      case 'caption':
        return {
          fontSize: theme.fontSizes.xs,
          fontFamily: theme.fonts.regular,
        };
      default: // body1
        return {
          fontSize: theme.fontSizes.md,
          fontFamily: theme.fonts.regular,
        };
    }
  };

  const getColorStyle = () => {
    switch (color) {
      case 'secondary':
        return { color: theme.colors.text.secondary };
      case 'disabled':
        return { color: theme.colors.text.disabled };
      case 'error':
        return { color: theme.colors.state.error };
      case 'success':
        return { color: theme.colors.state.success };
      default:
        return { color: theme.colors.text.primary };
    }
  };

  const getFontWeight = () => {
    switch (weight) {
      case 'medium':
        return { fontFamily: theme.fonts.medium };
      case 'semibold':
        return { fontFamily: theme.fonts.semiBold };
      case 'bold':
        return { fontFamily: theme.fonts.bold };
      case 'extrabold':
        return { fontFamily: theme.fonts.extraBold };
      default:
        return { fontFamily: theme.fonts.regular };
    }
  };

  return (
    <Text
      style={[
        styles.text,
        getVariantStyles(),
        getColorStyle(),
        getFontWeight(),
        { textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text.primary,
  },
});

export default Typography;
