import { colors } from './colors';
import { fonts, fontSizes } from './fonts';
import { spacing, radius, shadows } from './spacing';

export const theme = {
  colors,
  fonts,
  fontSizes,
  spacing,
  radius,
  shadows,
  
  // Styles communs
  common: {
    button: {
      height: 48,
      borderRadius: radius.md,
      paddingHorizontal: spacing.lg,
    },
    input: {
      height: 48,
      borderRadius: radius.md,
      borderWidth: 1,
      paddingHorizontal: spacing.md,
    },
    card: {
      borderRadius: radius.lg,
      padding: spacing.md,
      backgroundColor: colors.background.default,
      ...shadows.md,
    },
  },
  
  // Styles spécifiques aux composants
  components: {
    header: {
      height: 60,
      backgroundColor: colors.background.default,
      ...shadows.sm,
    },
    tabBar: {
      height: 60,
      backgroundColor: colors.background.default,
      borderTopWidth: 1,
      borderTopColor: colors.border.light,
    },
    modal: {
      borderTopLeftRadius: radius.xl,
      borderTopRightRadius: radius.xl,
      backgroundColor: colors.background.default,
      ...shadows.lg,
    },
  },
};

export default theme;
