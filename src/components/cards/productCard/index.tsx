import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import style from './style';
import { priceWithFormat } from '../../../utils/functionUtils';

interface ProductCardProps {
  product: Product;
  containerStyle?: ViewStyle;
  onPress: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  containerStyle,
  onPress,
}) => {
  const defaultVariant = product?.variants?.[0];
  return (
    <TouchableWithoutFeedback onPress={() => onPress(product)}>
      <View style={[style.container, containerStyle]}>
        <Image
          source={{ uri: defaultVariant?.images?.[0] }}
          style={style.image}
          resizeMode="cover"
        />
        <View style={style.detailsView}>
          <Text style={style.productName} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={style.productPrice} numberOfLines={1}>
            {priceWithFormat(defaultVariant?.price)}
          </Text>
        </View>
        <Icon
          name={'heart-outline'}
          size={spacing.large}
          color="black"
          style={style.heartIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
