import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: spacing.large,
  },
  icon: {
    marginBottom: spacing.medium,
  },
  message: {
    ...typography.body1,
    color: colors.grey,
    textAlign: 'center',
  },
});
