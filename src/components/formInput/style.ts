import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.large,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  input: {
    minHeight: spacing.xxxLarge,
    borderWidth: normalize(1),
    borderColor: colors.light60,
    borderRadius: spacing.medium,
    paddingHorizontal: spacing.small,
  },
  errorInput: {
    borderColor: colors.red,
  },
  errorText: {
    ...typography.small,
    marginTop: spacing.tiny,
    color: colors.red,
  },
  secureEntryIcon: {
    position: 'absolute',
    right: spacing.small,
  },
});
