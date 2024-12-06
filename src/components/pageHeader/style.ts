import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xSmall,
    height: spacing.huge,
    backgroundColor: colors.light,
  },
  iconContainer: {
    width: spacing.xLarge,
    height: spacing.xLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...typography.title3,
    color: colors.dark,
  },
});
