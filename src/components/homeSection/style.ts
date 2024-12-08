import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../theme';

export default StyleSheet.create({
  sectionContainer: {
    marginVertical: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  title: {
    ...typography.title3Bold,
  },
  viewAll: {
    ...typography.body1,
    marginRight: spacing.large,
  },
});
