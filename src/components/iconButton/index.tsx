import React from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, spacing } from '../../theme';
import styles from './style';

interface IconButtonProps extends ViewProps {
  iconName: string;
  onPress: () => void;
  size?: number;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onPress,
  size = spacing.large,
  color = colors.dark,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
