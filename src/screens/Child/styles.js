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
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: theme.colors.divider,
  },
  childrenList: {
    flex: 1,
  },
  listTitle: {
    marginBottom: theme.spacing.md,
  },
  childCard: {
    marginBottom: theme.spacing.sm,
  },
  childCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  childInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  childTags: {
    flexDirection: 'row',
    marginTop: theme.spacing.xs,
    gap: theme.spacing.xs,
  },
});
