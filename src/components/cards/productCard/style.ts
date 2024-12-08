import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';
import constants from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginRight: spacing.medium,
    width: constants.productCardWidth,
  },
  image: {
    borderRadius: spacing.xSmall,
    backgroundColor: colors.lightGrey,
    width: constants.productCardWidth,
    aspectRatio: constants.productCardImageRatio,
  },
  productName: {
    ...typography.tiny,
    marginTop: spacing.small,
    marginLeft: spacing.tiny,
  },
  productPrice: {
    ...typography.tiny,
    marginTop: spacing.xSmall,
    marginLeft: spacing.tiny,
  },
  heartIcon: {
    position: 'absolute',
    top: spacing.xSmall,
    right: spacing.xSmall,
  },
});
