import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xSmall,
  },
  contentContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.xxxHuge,
  },
  pageTitle: {
    ...typography.title2Black,
    marginTop: spacing.small,
    marginLeft: spacing.xSmall,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.small,
  },
  productContainer: {
    flex: 1,
    margin: spacing.xSmall,
    marginBottom: spacing.medium,
    backgroundColor: colors.light60,
  },
  footerContainer: {
    marginBottom: spacing.medium,
    borderTopWidth: spacing.atom,
    borderTopColor: colors.lightGrey,
    paddingTop: spacing.medium,
    paddingBottom: spacing.large,
  },
  footerText: {
    ...typography.body3,
    textAlign: 'center',
    color: colors.grey,
  },
  footerAuthorText: {
    marginTop: spacing.tiny,
    color: colors.lightGrey,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: spacing.atom,
    borderTopColor: colors.lightGrey,
    backgroundColor: colors.light,
    paddingTop: spacing.small,
    paddingBottom: spacing.large,
  },
  filterButton: {
    flex: 1,
    paddingHorizontal: spacing.small,
    borderRightWidth: spacing.atom,
    borderRightColor: colors.lightGrey,
    marginVertical: spacing.small,
  },
  filterButtonText: {
    ...typography.body2,
    color: colors.dark,
    textAlign: 'center',
  },
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.small,
  },
  filterHeaderTitle: {
    flex: 1,
    ...typography.title3Bold,
    textAlign: 'center',
  },
  filterCloseButton: {
    position: 'absolute',
    right: spacing.small,
    padding: spacing.small,
  },
  optionText: {
    ...typography.body1,
    padding: spacing.medium,
  },
  priceRangeContainer: {
    padding: spacing.medium,
    alignItems: 'center',
  },
  priceInput: {
    borderWidth: spacing.atom,
    borderColor: colors.grey,
    borderRadius: spacing.small,
    padding: spacing.small,
    width: '80%',
    marginBottom: spacing.medium,
  },
  applyButton: {
    padding: spacing.medium,
    backgroundColor: colors.primary,
    borderRadius: spacing.small,
    marginTop: spacing.medium,
    width: '80%',
  },
  applyButtonText: {
    ...typography.title3Bold,
    color: colors.light,
    textAlign: 'center',
  },
});
