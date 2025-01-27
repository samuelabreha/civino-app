import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Avatar = ({
  source,
  name,
  size = 'medium',
  variant = 'circular',
  testID,
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
  ];

  const textStyles = [
    styles.text,
    {
      fontSize: avatarSize * 0.4,
    },
  ];

  const combinedStyles = StyleSheet.flatten([...avatarStyles, style]);

  return (
    <View testID={testID} style={combinedStyles} {...props}>
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
    backgroundColor: theme.colors.grey && theme.colors.grey[300] ? theme.colors.grey[300] : '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circular: {
    borderRadius: 9999,
  },
  rounded: {
    borderRadius: theme.shape && theme.shape.borderRadius && theme.shape.borderRadius.lg ? theme.shape.borderRadius.lg : 4,
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
    color: theme.colors && theme.colors.text && theme.colors.text.primary ? theme.colors.text.primary : '#333',
    fontWeight: theme.typography && theme.typography.fontWeights && theme.typography.fontWeights.medium ? theme.typography.fontWeights.medium : '500',
    fontFamily: theme.typography && theme.typography.fontFamily && theme.typography.fontFamily.primary ? theme.typography.fontFamily.primary : 'Arial',
  },
  avatar: {
    // Add styles for avatar here if needed
  },
});

export default Avatar;
