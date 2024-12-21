import React, { memo } from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../../../theme';
import styles from './style';

interface SizeCardProps extends TouchableOpacityProps {
  size: string | undefined;
  isSelected: boolean;
  onSelect: (size?: string) => void;
}

const SizeCard: React.FC<SizeCardProps> = ({
  size,
  style,
  isSelected = false,
  onSelect,
  disabled = false,
}) => {
  const computedStyles: StyleProp<ViewStyle> = [
    styles.container,
    style,
    isSelected && { backgroundColor: colors.dark },
    disabled && { backgroundColor: colors.lightGrey },
  ];

  const textStyles: StyleProp<TextStyle> = [
    styles.sizeText,
    (isSelected || disabled) && { color: colors.light },
  ];

  return (
    <TouchableOpacity
      style={computedStyles}
      onPress={() => onSelect(size)}
      disabled={disabled}>
      <Text style={textStyles}>{size}</Text>
      {disabled && <View style={styles.diagonalLine} />}
    </TouchableOpacity>
  );
};

export default memo(SizeCard);
