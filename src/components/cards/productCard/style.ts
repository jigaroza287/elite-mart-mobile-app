import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';
import constants from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: spacing.xSmall,
    paddingBottom: spacing.medium,
  },
  image: {
    width: '100%',
    aspectRatio: constants.productCardImageRatio,
    borderTopStartRadius: spacing.xSmall,
    borderTopEndRadius: spacing.xSmall,
  },
  detailsView: {
    marginLeft: spacing.xSmall,
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
