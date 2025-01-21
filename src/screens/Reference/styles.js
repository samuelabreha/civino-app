import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { LAYOUT } from '../../constants/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: LAYOUT.screen.width,
    height: LAYOUT.screen.height,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.layout.screenPadding,
    paddingTop: LAYOUT.header.height + theme.spacing.md,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.background.gradient[0],
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.background.paper,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.layout.screenPadding,
    paddingBottom: theme.spacing.xxl,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
  categories: {
    marginVertical: theme.spacing.lg,
  },
  categoryContainer: {
    gap: theme.spacing.sm,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.background.paper,
    ...theme.shadows.sm,
  },
  resources: {
    marginBottom: theme.spacing.xl,
  },
  resourceCard: {
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
  },
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  resourceIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resourceInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  resourceDescription: {
    marginBottom: theme.spacing.sm,
  },
  resourceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resourceMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  downloadButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActions: {
    marginBottom: theme.spacing.xl,
  },
  actionGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  actionCard: {
    flex: 1,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.background.paper,
    alignItems: 'center',
    gap: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  actionText: {
    textAlign: 'center',
  },
});
