import {StyleSheet} from 'react-native';
import {spacing} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.small,
  },
  verticalContainer: {
    flexDirection: 'column',
  },
  primaryButton: {
    flex: 1,
    marginRight: spacing.xSmall,
  },
  secondaryButton: {
    flex: 1,
  },
  fullWidthButton: {
    marginBottom: spacing.medium,
    width: '100%',
  },
});
