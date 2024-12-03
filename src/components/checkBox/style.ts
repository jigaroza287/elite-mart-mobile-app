import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../theme';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing.large,
    height: spacing.large,
    borderWidth: normalize(spacing.xTiny),
    borderRadius: spacing.tiny,
    borderColor: colors.primary,
    backgroundColor: colors.light,
  },
});
