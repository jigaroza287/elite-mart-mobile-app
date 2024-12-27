import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xSmall,
    marginBottom: spacing.large,
  },
  contentContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.xxxHuge,
  },
  pageTitle: {
    ...typography.title2Black,
    marginTop: spacing.small,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    flex: 1,
    margin: spacing.xSmall,
    marginBottom: spacing.medium,
    backgroundColor: colors.light60,
  },
});
