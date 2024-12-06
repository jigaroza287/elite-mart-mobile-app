import { Dimensions, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, spacing, typography } from '../../../theme';
const imageSize = Dimensions.get('window').width / 4;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  image: {
    borderRadius: normalize(imageSize / 2),
    backgroundColor: colors.lightGrey,
  },
  label: {
    ...typography.body3,
    marginTop: spacing.xSmall,
    textAlign: 'center',
  },
});
