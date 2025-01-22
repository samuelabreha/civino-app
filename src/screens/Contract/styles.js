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
  contractsList: {
    flex: 1,
  },
  listTitle: {
    marginBottom: theme.spacing.md,
  },
  contractCard: {
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
  },
  contractHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  contractInfo: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  contractDetails: {
    gap: theme.spacing.xs,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
});
