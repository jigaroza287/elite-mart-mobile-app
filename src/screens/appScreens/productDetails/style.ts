import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';
import constants from '../../../utils/constants';

const bodyText = {
  ...typography.small,
  color: colors.grey,
};

export default StyleSheet.create({
  container: {
    paddingLeft: spacing.large,
    marginBottom: spacing.large,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButton: {
    padding: spacing.medium,
    borderRadius: spacing.xLarge,
    backgroundColor: colors.lightGrey,
    marginRight: spacing.xMedium,
  },
  imagesListContainer: {
    marginTop: spacing.large,
  },
  image: {
    width: constants.productCardWidth,
    aspectRatio: constants.productCardImageRatio,
    marginRight: spacing.xSmall,
  },
  productName: {
    ...typography.title3Bold,
    marginTop: spacing.large,
  },
  price: {
    ...typography.title3Bold,
    color: colors.primary,
    marginVertical: spacing.medium,
  },
  descriptionText: {
    ...bodyText,
    marginTop: spacing.large,
  },
  ratingsText: {
    ...typography.title1,
    marginTop: spacing.large,
  },
});
