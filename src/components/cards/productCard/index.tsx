import React from 'react';
import { Image, Text, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import style from './style';

interface ProductCardProps {
  product: Product;
  containerStyle?: ViewStyle;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  containerStyle,
}) => {
  return (
    <View style={[style.container, containerStyle]}>
      <Image
        source={{ uri: product.variants?.[0].images?.[0] }}
        style={style.image}
        resizeMode="cover"
      />
      <View style={style.detailsView}>
        <Text style={style.productName} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={style.productPrice} numberOfLines={1}>
          {'$'}
          {product.variants?.[0].price}
        </Text>
      </View>
      <Icon
        name={'heart-outline'}
        size={spacing.large}
        color="black"
        style={style.heartIcon}
      />
    </View>
  );
};

export default ProductCard;
