import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyText: {
    ...typography.title3Bold,
    marginTop: spacing.large,
  },
  exploreCategoriesButton: {
    borderRadius: spacing.xLarge,
    paddingHorizontal: spacing.large,
    marginTop: spacing.large,
  },
  exploreCategoriesButtonText: {
    ...typography.body2Bold,
  },
});
