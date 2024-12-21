import { Platform, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.small,
    borderWidth: spacing.atom,
    borderRadius: spacing.xSmall,
    borderColor: colors.light60,
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: spacing.xTiny },
        shadowOpacity: 0.2,
        shadowRadius: spacing.tiny,
      },
      android: {
        elevation: spacing.tiny,
        shadowColor: colors.dark,
      },
    }),
  },
  sizeText: {
    ...typography.body3,
    color: colors.dark,
    minWidth: spacing.xMedium,
    textAlign: 'center',
  },
  diagonalLine: {
    position: 'absolute',
    width: spacing.xxxLarge,
    height: spacing.atom,
    backgroundColor: colors.light20,
    transform: [{ rotate: '45deg' }],
  },
});
