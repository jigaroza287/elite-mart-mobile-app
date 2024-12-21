import { StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing } from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.tiny,
    borderWidth: spacing.atom,
    borderRadius: spacing.xLarge,
    borderColor: colors.light60,
  },
  innerContainer: {
    borderWidth: spacing.atom,
    borderRadius: spacing.xLarge,
    borderColor: colors.light60,
  },
});
