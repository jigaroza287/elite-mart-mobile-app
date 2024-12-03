import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Icon library for checkbox
import {colors, spacing} from '../../theme';
import style from './style';

type CheckboxProps = {
  isChecked: boolean;
  onToggle: () => void;
  containerStyle?: object;
};

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onToggle,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[style.container, containerStyle]}
      onPress={onToggle}
      activeOpacity={0.8}>
      {isChecked && (
        <Icon
          name="checkmark-sharp"
          size={spacing.medium}
          color={colors.primary}
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
