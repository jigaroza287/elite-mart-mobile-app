import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';

interface HomeSectionProps {
  title: string;
  onViewAllPress: () => void;
  children: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  onViewAllPress,
  children,
}) => (
  <View style={style.sectionContainer}>
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={onViewAllPress}>
        <Text style={style.viewAll}>View All</Text>
      </TouchableOpacity>
    </View>
    {children}
  </View>
);

export default HomeSection;
