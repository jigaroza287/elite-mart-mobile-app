import React, { useMemo } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, spacing } from '../../theme';
import style from './style';

export interface PageHeaderProps {
  title?: React.ReactNode;
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
  const headerStatusBar = useMemo(
    () => (
      <View>
        <SafeAreaView>
          <StatusBar
            backgroundColor={backgroundColor}
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
        </SafeAreaView>
      </View>
    ),
    [backgroundColor],
  );

  const leftButton = useMemo(
    () => (
      <TouchableOpacity onPress={onLeftPress} style={style.iconContainer}>
        {leftIcon && (
          <Icon name={leftIcon} size={spacing.large} color="black" />
        )}
      </TouchableOpacity>
    ),
    [onLeftPress, leftIcon],
  );

  const rightButton = useMemo(
    () => (
      <TouchableOpacity onPress={onRightPress} style={style.iconContainer}>
        {rightIcon && (
          <Icon name={rightIcon} size={spacing.large} color="black" />
        )}
      </TouchableOpacity>
    ),
    [onRightPress, rightIcon],
  );

  const titleComponent = useMemo(
    () =>
      typeof title === 'string' ? (
        <Text style={style.headerTitle}>{title}</Text>
      ) : (
        title
      ),
    [title],
  );

  return (
    <>
      {headerStatusBar}

      <View style={[style.headerContainer, { backgroundColor }]}>
        {leftButton}
        {titleComponent}
        {rightButton}
      </View>
    </>
  );
};

export default PageHeader;
