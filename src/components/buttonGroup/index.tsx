import React from 'react';
import { GestureResponderEvent, View, ViewStyle } from 'react-native';
import Button from '../button';
import style from './style';

interface ButtonGroupProps {
  primaryTitle: string;
  secondaryTitle: string;
  onPrimaryPress: (event: GestureResponderEvent) => void;
  onSecondaryPress: (event: GestureResponderEvent) => void;
  groupType?: 'horizontal' | 'vertical';
  groupContainerStyle?: ViewStyle;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryTitle,
  secondaryTitle,
  onPrimaryPress,
  onSecondaryPress,
  groupType = 'horizontal',
  groupContainerStyle,
}) => {
  const isVertical = groupType === 'vertical';

  return (
    <View
      style={[
        style.container,
        isVertical && style.verticalContainer,
        groupContainerStyle,
      ]}>
      <Button
        title={primaryTitle}
        onPress={onPrimaryPress}
        type="primary"
        buttonStyle={isVertical ? style.fullWidthButton : style.primaryButton}
      />
      <Button
        title={secondaryTitle}
        onPress={onSecondaryPress}
        type="secondary"
        buttonStyle={isVertical ? style.fullWidthButton : style.secondaryButton}
      />
    </View>
  );
};

export default ButtonGroup;
