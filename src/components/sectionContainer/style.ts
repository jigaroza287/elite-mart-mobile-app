import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
    backgroundColor: colors.light,
  },
});
