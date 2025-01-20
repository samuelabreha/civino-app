import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollView: {
    flexGrow: 1,
  },
  section: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginVertical: spacing.sm,
    ...shadows.md,
  },
  title: {
    ...typography.h5,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  subtitle: {
    ...typography.subtitle1,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },
  text: {
    ...typography.body1,
    color: colors.text.primary,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...typography.button,
    color: colors.surface,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.divider,
    padding: spacing.md,
    marginVertical: spacing.sm,
    ...typography.body1,
  },
  error: {
    color: colors.error,
    ...typography.caption,
    marginTop: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
});

export const formStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  inputContainer: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.subtitle2,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.divider,
    padding: spacing.md,
    ...typography.body1,
  },
  error: {
    color: colors.error,
    ...typography.caption,
    marginTop: spacing.xs,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  submitButtonText: {
    ...typography.button,
    color: colors.surface,
  },
});
