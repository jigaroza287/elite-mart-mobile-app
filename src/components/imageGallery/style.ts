import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, spacing } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  grid: {
    flexDirection: 'row',
  },
  thumbnailWrapper: {
    width: normalize(280),
    height: normalize(400),
    marginRight: spacing.xSmall,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: spacing.xLarge,
    right: spacing.xMedium,
    zIndex: 10,
  },
});
