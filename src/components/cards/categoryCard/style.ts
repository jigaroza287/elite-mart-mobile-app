import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../../theme';

export default StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: spacing.small,
  },
  squareContainer: {
    alignItems: 'center',
  },
  label: {
    ...typography.tiny,
    flex: 1,
  },
});
