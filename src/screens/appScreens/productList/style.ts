import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xSmall,
  },
  contentContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.xxxLarge,
  },
  productContainer: {
    flex: 1,
    margin: spacing.xSmall,
    marginBottom: spacing.medium,
    backgroundColor: colors.lightGrey,
  },
});
