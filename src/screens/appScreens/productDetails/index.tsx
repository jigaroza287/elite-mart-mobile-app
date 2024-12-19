import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton, ListView } from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { ProductVariant } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import { priceWithFormat } from '../../../utils/functionUtils';
import style from './style';

type ProductDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsProps> = ({
  navigation,
  route,
}) => {
  const { product } = route.params || {};
  const defaultVariant: ProductVariant = product?.variants?.[0];
  const sizes: string[] = product?.variants.map(variant => variant.size);
  const colors: string[] = product?.variants.map(variant => variant.colorCode);

  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        {/* Header */}
        <View style={style.header}>
          <BackButton onPress={() => navigation.goBack()} />
          <TouchableOpacity style={style.likeButton}>
            <Icon name={'heart-outline'} size={spacing.large} color="black" />
          </TouchableOpacity>
        </View>
        {/* Product Images */}
        <ListView
          horizontal
          data={[
            ...defaultVariant?.images,
            ...defaultVariant?.images,
            ...defaultVariant.images,
            ...defaultVariant.images,
          ]}
          containerStyle={style.imagesListContainer}
          renderItem={(imageUrl: string) => (
            <Image
              source={{ uri: imageUrl }}
              style={style.image}
              resizeMode="cover"
            />
          )}
        />
        {/* Product Details */}
        <Text style={style.productName}>{product.name.toUpperCase()}</Text>
        <Text style={style.descriptionText}>{product.description}</Text>
        <Text style={style.ratingsText}>{`${product.ratings} Ratings`}</Text>
        <Text style={style.price}>
          {priceWithFormat(defaultVariant?.price)}
        </Text>
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
