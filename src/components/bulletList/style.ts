import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../theme';

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
    ...typography.body1,
    marginRight: spacing.xSmall,
  },
  text: {
    ...typography.body1,
  },
});
