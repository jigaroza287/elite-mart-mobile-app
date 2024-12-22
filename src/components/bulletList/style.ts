import { StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export default StyleSheet.create({
  container: {
    marginVertical: spacing.xSmall,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: spacing.tiny,
  },
  bullet: {
    fontSize: spacing.medium,
    marginRight: spacing.xSmall,
  },
  text: {
    fontSize: spacing.medium,
    flex: 1,
  },
});
