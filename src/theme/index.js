import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { shadows } from './shadows';
import { animations } from './animations';

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  animations,
  
  // Additional theme configurations
  shape: {
    borderRadius: {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      full: 9999
    }
  },

  // Z-index management
  zIndex: {
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
};

export default theme;
