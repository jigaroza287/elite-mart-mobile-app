import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style, {commonButtonStyle, commonButtonTextStyle} from './style';
import {colors, spacing} from '../../theme';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: ButtonType;
  icon?: string;
  iconColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  icon,
  iconColor = colors.primary,
  buttonStyle,
  textStyle,
  disabled = false,
  fullWidth = false,
}) => {
  const getButtonStyle = (): ViewStyle => {
    switch (type) {
      case 'secondary':
        return StyleSheet.flatten([commonButtonStyle, style.secondaryButton]);
      case 'tertiary':
        return StyleSheet.flatten([commonButtonStyle, style.tertiaryButton]);
      default:
        return StyleSheet.flatten([commonButtonStyle, style.primaryButton]);
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'secondary':
        return StyleSheet.flatten([commonButtonTextStyle, style.secondaryText]);
      case 'tertiary':
        return StyleSheet.flatten([commonButtonTextStyle, style.tertiaryText]);
      default:
        return StyleSheet.flatten([commonButtonTextStyle, style.primaryText]);
    }
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        buttonStyle,
        disabled && style.disabledButton,
        fullWidth && style.fullWidth,
      ]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <View style={style.content}>
        {icon && (
          <Icon
            name={icon}
            color={iconColor}
            size={spacing.large}
            style={style.icon}
          />
        )}
        <Text
          style={[getTextStyle(), textStyle, disabled && style.disabledText]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
