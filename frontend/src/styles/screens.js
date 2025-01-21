import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from './theme';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing.xl,
    alignItems: 'center',
    ...shadows.md,
  },
  headerTitle: {
    ...typography.h4,
    color: colors.surface,
    marginBottom: spacing.sm,
  },
  headerSubtitle: {
    ...typography.subtitle1,
    color: colors.surface,
    opacity: 0.8,
  },
  content: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.md,
  },
  cardTitle: {
    ...typography.h6,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  cardText: {
    ...typography.body2,
    color: colors.text.secondary,
    marginBottom: spacing.md,
  },
});

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing.xl,
    alignItems: 'center',
    ...shadows.md,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.surface,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  name: {
    ...typography.h5,
    color: colors.surface,
    marginBottom: spacing.xs,
  },
  role: {
    ...typography.subtitle1,
    color: colors.surface,
    opacity: 0.8,
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h6,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
});

export const questionnaireStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.lg,
  },
  question: {
    ...typography.h6,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  optionsContainer: {
    padding: spacing.md,
  },
  option: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  selectedOption: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  optionText: {
    ...typography.body1,
    color: colors.text.primary,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },
});

export const statisticsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.lg,
  },
  title: {
    ...typography.h5,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  filterButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  activeFilter: {
    backgroundColor: colors.primary,
  },
  filterText: {
    ...typography.button,
    color: colors.primary,
  },
  activeFilterText: {
    color: colors.surface,
  },
  chartContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    margin: spacing.md,
    ...shadows.md,
  },
});
