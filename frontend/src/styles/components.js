import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from './theme';

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    ...shadows.sm,
  },
  title: {
    ...typography.h6,
    color: colors.surface,
  },
  subtitle: {
    ...typography.subtitle2,
    color: colors.surface,
    opacity: 0.8,
  },
});

export const tabBarStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },
  tab: {
    padding: spacing.md,
  },
  label: {
    ...typography.button,
    color: colors.surface,
  },
  indicator: {
    backgroundColor: colors.surface,
  },
});

export const calendarStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  headerText: {
    ...typography.h6,
    color: colors.text.primary,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.sm,
  },
  weekDay: {
    ...typography.caption,
    color: colors.text.secondary,
  },
  dayContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.round,
  },
  day: {
    ...typography.body2,
    color: colors.text.primary,
  },
  selectedDay: {
    backgroundColor: colors.primary,
  },
  selectedDayText: {
    color: colors.surface,
  },
  disabledDay: {
    opacity: 0.3,
  },
});

export const dropdownStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.divider,
    marginVertical: spacing.sm,
  },
  picker: {
    height: 50,
    color: colors.text.primary,
    ...typography.body1,
  },
  placeholder: {
    color: colors.text.hint,
  },
});

export const imageEvaluationStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.md,
  },
  title: {
    ...typography.subtitle1,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageContainer: {
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: 'transparent',
    margin: spacing.xs,
  },
  selectedImage: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export const statisticsStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.md,
  },
  title: {
    ...typography.h6,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  chartContainer: {
    marginVertical: spacing.md,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xs,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.round,
    marginRight: spacing.xs,
  },
  legendText: {
    ...typography.caption,
    color: colors.text.secondary,
  },
});
