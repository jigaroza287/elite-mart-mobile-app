import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme';
import constants from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    paddingLeft: spacing.large,
    marginBottom: spacing.large,
  },
  searchBarContainer: {
    paddingRight: spacing.large,
  },
  productContainer: {
    width: constants.productCardWidth,
    marginRight: spacing.medium,
  },
});
