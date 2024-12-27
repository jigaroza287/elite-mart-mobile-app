import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Category } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import styles from './style';

type CategoryCardLayout = 'square' | 'row';

interface CategoryCardProps {
  category: Category;
  layoutType?: CategoryCardLayout;
  size?: number;
  onPress?: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  layoutType = 'square',
  size = spacing.huge,
  onPress,
}) => {
  const containerStyle: StyleProp<ViewStyle> = [
    layoutType === 'row' ? styles.rowContainer : styles.squareContainer,
    { marginRight: layoutType === 'row' ? 0 : spacing.medium },
  ];

  const imageStyle: StyleProp<ImageStyle> = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const labelStyle: StyleProp<TextStyle> = [
    styles.label,
    layoutType === 'row'
      ? { marginLeft: spacing.medium }
      : { marginTop: spacing.small },
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => onPress?.(category)}>
      <Image
        source={{ uri: category.image }}
        style={imageStyle}
        resizeMode="cover"
      />
      <Text style={labelStyle} numberOfLines={1}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
