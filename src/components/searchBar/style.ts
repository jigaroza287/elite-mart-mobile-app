import { Dimensions, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: spacing.large,
    borderColor: colors.grey,
    borderWidth: spacing.atom,
    paddingHorizontal: spacing.small,
    height: spacing.xxLarge,
    width: Dimensions.get('window').width - spacing.large,
    alignSelf: 'center',
    marginVertical: spacing.xSmall,
  },
  icon: {
    marginRight: spacing.xSmall,
  },
  input: {
    flex: 1,
    ...typography.body3,
    height: spacing.xLarge,
  },
  inputText: {
    ...typography.body3,
    color: colors.grey,
  },
});
