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
  addButton: {
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
  statistics: {
    marginVertical: theme.spacing.lg,
  },
  statsCard: {
    padding: theme.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: theme.colors.divider,
  },
  filters: {
    marginBottom: theme.spacing.lg,
  },
  filterContainer: {
    paddingVertical: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  filterChip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    backgroundColor: theme.colors.background.paper,
  },
  filterActive: {
    borderColor: theme.colors.primary.main,
    backgroundColor: theme.colors.primary.light,
  },
  teachersList: {
    flex: 1,
  },
  listTitle: {
    marginBottom: theme.spacing.md,
  },
  teacherCard: {
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
  },
  teacherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  teacherTags: {
    flexDirection: 'row',
    marginTop: theme.spacing.xs,
    gap: theme.spacing.xs,
  },
});
