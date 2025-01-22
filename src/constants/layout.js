import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LAYOUT = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  
  // Screen dimensions
  screen: {
    width: 393,  // Base width from design
    height: 852, // Base height from design
  },

  // Navigation
  header: {
    height: 44,
    paddingHorizontal: 16,
  },
  
  // Bottom tabs
  bottomTab: {
    height: 83,
    iconSize: 24,
    labelSize: 10,
  },

  // Common
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    extraLarge: 16,
    full: 9999,
  },

  // Component specific
  card: {
    width: '100%',
    minHeight: 80,
    borderRadius: 12,
  },

  avatar: {
    small: 32,
    medium: 40,
    large: 56,
    extraLarge: 80,
  },

  icon: {
    small: 16,
    medium: 24,
    large: 32,
  },
};
