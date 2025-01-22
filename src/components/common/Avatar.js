import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Avatar = ({
  source,
  name,
  size = 'medium',
  variant = 'circular',
  style,
  ...props
}) => {
  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarSize = {
    small: 32,
    medium: 40,
    large: 56,
    xlarge: 80,
  }[size];

  const avatarStyles = [
    styles.container,
    styles[variant],
    { width: avatarSize, height: avatarSize },
    style,
  ];

  const textStyles = [
    styles.text,
    {
      fontSize: avatarSize * 0.4,
    },
  ];

  return (
    <View style={avatarStyles} {...props}>
      {source ? (
        <Image
          source={typeof source === 'string' ? { uri: source } : source}
          style={[styles.image, styles[variant]]}
        />
      ) : (
        <Text style={textStyles}>{getInitials(name)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey[300],
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circular: {
    borderRadius: 9999,
  },
  rounded: {
    borderRadius: theme.shape.borderRadius.lg,
  },
  square: {
    borderRadius: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeights.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
});

export default Avatar;
