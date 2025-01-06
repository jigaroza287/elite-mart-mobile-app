import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { spacing, typography } from '../../../../theme';

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

const style = StyleSheet.create({
  sectionContainer: {
    marginVertical: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  title: {
    ...typography.title3Bold,
  },
  viewAll: {
    ...typography.body1,
    marginRight: spacing.large,
  },
});

export default HomeSection;
