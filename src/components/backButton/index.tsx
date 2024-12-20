import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { spacing } from '../../theme';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Icon name="arrow-back" size={spacing.xLarge} />
    </TouchableOpacity>
  );
};

export default BackButton;
