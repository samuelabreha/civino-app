export const colors = {
  primary: '#2196F3',
  secondary: '#4CAF50',
  accent: '#FFC107',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    hint: '#9E9E9E',
  },
  divider: '#BDBDBD',
};

export const typography = {
  h1: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 96,
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 60,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 48,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 34,
    letterSpacing: 0.25,
  },
  h5: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 24,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 20,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    letterSpacing: 0.1,
  },
  body1: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    letterSpacing: 0.25,
  },
  button: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  round: '50%',
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};
