import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import {
  BackButton,
  IconButton,
  ListView,
  SectionContainer,
  StarRating,
} from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { ProductVariant } from '../../../redux/features/home/homeTypes';
import { priceWithFormat } from '../../../utils/functionUtils';
import style from './style';
import normalize from 'react-native-normalize';

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

  const handleHeartButtonTap = () => {};
  const handleBagButtonTap = () => {};

  return (
    <Page isSafeAreaView>
      {/* Header */}
      <View style={style.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={style.rightButtonsContainer}>
          <IconButton iconName="heart-outline" onPress={handleHeartButtonTap} />
          <IconButton iconName="bag-outline" onPress={handleBagButtonTap} />
        </View>
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
        renderItem={(imageUrl: string) => (
          <Image
            source={{ uri: imageUrl }}
            style={style.image}
            resizeMode="cover"
          />
        )}
      />

      <View style={style.detailsContainer}>
        {/* Product Basic Details */}
        <SectionContainer>
          <Text style={style.productName}>{product.name.toUpperCase()}</Text>
          <Text style={style.descriptionText}>{product.description}</Text>
          <StarRating
            rating={product.ratings ?? 0}
            style={style.ratingsContainer}
            starSize={normalize(18)}
          />
          <Text style={style.price}>
            {priceWithFormat(defaultVariant?.price)}
          </Text>
          <Text style={style.priceTax}>Price inclusive of all taxes.</Text>
        </SectionContainer>
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
