import { Dimensions, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { spacing, typography } from '../../../theme';

const imageSize = Dimensions.get('window').width / 6;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  image: {
    borderRadius: normalize(imageSize / 2),
  },
  label: {
    ...typography.tiny,
    marginTop: spacing.small,
    textAlign: 'center',
  },
});
