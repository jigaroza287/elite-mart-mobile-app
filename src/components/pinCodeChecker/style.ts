import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.light60,
    borderRadius: spacing.xSmall,
    paddingHorizontal: spacing.medium,
    width: '100%',
  },
  input: {
    fontSize: spacing.medium,
    paddingVertical: spacing.small,
    paddingRight: spacing.large,
  },
  button: {
    paddingVertical: spacing.small,
  },
  buttonText: {
    ...typography.body3,
    color: colors.primary,
  },
  errorText: {
    ...typography.body3,
    color: colors.red,
    marginTop: spacing.small,
  },
});
