import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: spacing.atom,
    borderColor: colors.dark50,
    borderRadius: spacing.large,
    padding: spacing.small,
    paddingHorizontal: spacing.xMedium,
    backgroundColor: colors.lightGrey,
  },
  dropdownText: {
    ...typography.body1,
    flex: 1,
    color: colors.dark,
    marginRight: spacing.tiny,
  },
  sheetBackground: {
    backgroundColor: colors.light,
  },
  bottomSheetContent: {
    padding: spacing.medium,
  },
  title: {
    ...typography.body2,
    marginBottom: spacing.medium,
  },
  item: {
    padding: spacing.medium,
    borderBottomWidth: spacing.atom,
    borderBottomColor: colors.grey,
  },
  itemText: {
    ...typography.body2,
  },
  selectedText: {
    ...typography.body2Bold,
  },
  valueIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  chevronStyle: {
    marginLeft: spacing.large,
  },
  colorContainer: {
    width: spacing.medium,
    height: spacing.medium,
    borderRadius: spacing.xSmall,
  },
});
