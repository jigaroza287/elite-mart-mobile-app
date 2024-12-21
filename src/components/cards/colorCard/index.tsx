import React, { memo } from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors, spacing } from '../../../theme';
import styles from './style';

interface ColorCardProps extends TouchableOpacityProps {
  color: string;
  size?: number;
  isSelected: boolean;
  onSelect: (color: string) => void;
}

const ColorCard: React.FC<ColorCardProps> = ({
  color,
  size = spacing.xxxLarge,
  style,
  isSelected = false,
  onSelect,
}) => {
  const computedStyles: StyleProp<ViewStyle> = [
    styles.container,
    style,
    isSelected && { borderColor: colors.dark },
  ];

  const innerContainerStyles: StyleProp<ViewStyle> = [
    styles.innerContainer,
    { backgroundColor: color, width: size, height: size },
    isSelected && { borderColor: colors.dark },
  ];

  return (
    <TouchableOpacity style={computedStyles} onPress={() => onSelect(color)}>
      <View style={innerContainerStyles} />
    </TouchableOpacity>
  );
};

export default memo(ColorCard);
