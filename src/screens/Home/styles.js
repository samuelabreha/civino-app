import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { LAYOUT } from '../../constants/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: LAYOUT.screen.width,
    height: LAYOUT.screen.height,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.layout.screenPadding,
    paddingTop: LAYOUT.header.height + theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  headerContent: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  headerSubtitle: {
    marginTop: theme.spacing.xs,
  },
  quickActions: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  recentActivities: {
    marginBottom: theme.spacing.xl,
  },
  activityCard: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  statistics: {
    marginBottom: theme.spacing.xl,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  statCard: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
});
