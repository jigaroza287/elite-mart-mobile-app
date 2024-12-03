import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, spacing} from '../../theme';
import style from './style';

export interface PageHeaderProps {
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: string;
  rightIcon?: string;
  backgroundColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onLeftPress,
  onRightPress,
  leftIcon,
  rightIcon,
  backgroundColor = colors.light,
}) => {
  return (
    <>
      <SafeAreaView>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
      </SafeAreaView>

      <View style={[style.headerContainer, {backgroundColor}]}>
        <TouchableOpacity onPress={onLeftPress} style={style.iconContainer}>
          {leftIcon && (
            <Icon name={leftIcon} size={spacing.large} color="black" />
          )}
        </TouchableOpacity>

        <Text style={style.headerTitle}>{title}</Text>

        <TouchableOpacity onPress={onRightPress} style={style.iconContainer}>
          {rightIcon && (
            <Icon name={rightIcon} size={spacing.large} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PageHeader;
