import {StyleSheet, ViewStyle} from 'react-native';
import {colors, spacing, typography} from '../../theme';

export default StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: spacing.xSmall,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.primary20,
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
    borderColor: colors.light60,
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: colors.disabledButton,
  },
  primaryText: {
    color: colors.light80,
  },
  secondaryText: {
    color: colors.primary,
  },
  tertiaryText: {
    color: colors.dark50,
  },
  disabledText: {
    color: colors.disabledText,
  },
  fullWidth: {
    width: '100%',
  },
});

export const commonButtonStyle: ViewStyle = {
  padding: spacing.small,
  borderRadius: spacing.medium,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: spacing.xxxLarge,
};

export const commonButtonTextStyle = {
  ...typography.title3,
};
