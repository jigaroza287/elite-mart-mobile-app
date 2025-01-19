import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, spacing, typography } from '../../../theme';

const bodyText = {
  ...typography.body2,
  color: colors.dark50,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xSmall,
  },
  rightButtonsContainer: {
    flexDirection: 'row',
  },
  image: {
    width: normalize(280),
    height: normalize(400),
    marginRight: spacing.xSmall,
  },
  detailsContainer: {
    backgroundColor: colors.light60,
  },
  productName: {
    ...typography.title3Bold,
  },
  descriptionText: {
    ...bodyText,
    marginTop: spacing.tiny,
  },
  ratingsContainer: {
    marginTop: spacing.small,
  },
  price: {
    ...typography.title3Bold,
    marginTop: spacing.medium,
  },
  priceTax: {
    ...typography.small,
    color: colors.grey,
    marginTop: spacing.tiny,
  },
  sectionContainer: {
    marginTop: spacing.small,
  },
  colorContainer: {
    marginRight: spacing.small,
  },
  sectionTitle: {
    ...typography.body2Bold,
    color: colors.dark,
    marginBottom: spacing.small,
  },
  deliveryDetailsContainer: {
    marginTop: spacing.medium,
  },
  addToCartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
    margin: spacing.large,
    backgroundColor: colors.primary,
    borderRadius: spacing.xLarge,
  },
  totalPriceText: {
    ...typography.title3Bold,
    color: colors.light,
  },
  addToCartButton: {
    ...typography.title3,
    color: colors.light,
  },
});
