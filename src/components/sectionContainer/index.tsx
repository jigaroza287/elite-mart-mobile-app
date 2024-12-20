import { View, Text, ViewProps } from 'react-native';
import React from 'react';
import styles from './style';

interface SectionContainerProps extends ViewProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  style,
}) => {
  return <View style={[[styles.container, style]]}>{children}</View>;
};

export default SectionContainer;
