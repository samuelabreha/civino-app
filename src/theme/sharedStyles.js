import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { typography } from './typography';

export const sharedStyles = StyleSheet.create({
  // Conteneurs
  screen: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  
  // En-têtes
  header: {
    marginBottom: 24,
  },
  title: {
    ...typography.styles.h1,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.styles.body1,
    color: colors.text.secondary,
  },

  // Cartes
  card: {
    backgroundColor: colors.background.paper,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...typography.shadows.medium,
  },
  cardGradient: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  // Formulaires
  form: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    ...typography.styles.body2,
    color: colors.text.primary,
    marginBottom: 8,
  },
  error: {
    ...typography.styles.caption,
    color: colors.error.main,
    marginTop: 4,
  },

  // Boutons
  button: {
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  buttonPrimary: {
    backgroundColor: colors.primary.main,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary.main,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary.main,
  },
  buttonText: {
    ...typography.styles.button,
    color: colors.background.paper,
  },
  buttonTextOutline: {
    ...typography.styles.button,
    color: colors.primary.main,
  },
  buttonDisabled: {
    opacity: 0.5,
  },

  // Listes
  list: {
    paddingVertical: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  listItemLast: {
    borderBottomWidth: 0,
  },
  listItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  
  // États
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    ...typography.styles.body1,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 8,
  },

  // Utilitaires
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gap4: { gap: 4 },
  gap8: { gap: 8 },
  gap12: { gap: 12 },
  gap16: { gap: 16 },
  gap20: { gap: 20 },
  gap24: { gap: 24 },
  mt4: { marginTop: 4 },
  mt8: { marginTop: 8 },
  mt12: { marginTop: 12 },
  mt16: { marginTop: 16 },
  mt20: { marginTop: 20 },
  mt24: { marginTop: 24 },
  mb4: { marginBottom: 4 },
  mb8: { marginBottom: 8 },
  mb12: { marginBottom: 12 },
  mb16: { marginBottom: 16 },
  mb20: { marginBottom: 20 },
  mb24: { marginBottom: 24 },
});
