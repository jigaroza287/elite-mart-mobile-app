import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, spacing, typography } from '../../../theme';

const bodyText = {
  ...typography.body2,
  color: colors.dark50,
};

export default StyleSheet.create({
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
  colorSection: {
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
    flexDirection: 'row',
    marginTop: spacing.small,
    alignItems: 'center',
  },
  deliveryText: {
    ...typography.body2,
    marginBottom: spacing.tiny,
  },
  iconContainer: {
    marginRight: spacing.small,
    padding: spacing.tiny,
    borderRadius: spacing.medium,
    borderWidth: spacing.atom,
  },
  returnPolicyText: {
    ...typography.small,
    color: colors.blue,
  },
  greenCheckIcon: {
    position: 'absolute',
    bottom: -spacing.tiny,
    right: -spacing.tiny,
    backgroundColor: colors.light,
    borderRadius: spacing.xSmall,
  },
});
