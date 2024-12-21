import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import style from './style';
import { spacing } from '../../../theme';

interface CategoryCardProps {
  imageUrl: string;
  label: string;
  size?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  label,
  size = spacing.huge,
}) => {
  return (
    <View style={[style.container, { width: size }]}>
      <Image
        source={{ uri: imageUrl }}
        style={[style.image, { width: size, height: size }]}
        resizeMode="cover"
      />
      <Text style={style.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

export default CategoryCard;
