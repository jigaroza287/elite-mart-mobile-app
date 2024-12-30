import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { spacing } from '../../theme';

interface EmptyViewProps extends ViewProps {
  message?: string;
  icon?: string;
}

const EmptyView: React.FC<EmptyViewProps> = ({
  message = 'No items to display',
  icon,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={spacing.xMedium} style={styles.icon} />}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyView;
