import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import style from './style';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: product.variants?.[0].images?.[0] }}
        style={style.image}
        resizeMode="cover"
      />
      <Text style={style.productName} numberOfLines={1}>
        {product.name}
      </Text>
      <Text style={style.productPrice} numberOfLines={1}>
        {product.variants?.[0].price}
      </Text>
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
