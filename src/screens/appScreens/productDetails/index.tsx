import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import {
  BackButton,
  ColorCard,
  IconButton,
  ListView,
  SectionContainer,
  SizeCard,
  StarRating,
} from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { ProductVariant } from '../../../redux/features/home/homeTypes';
import { spacing } from '../../../theme';
import constants from '../../../utils/constants';
import { priceWithFormat } from '../../../utils/functionUtils';
import style from './style';

type ProductDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetails'
>;

type ProductSize = {
  size: string;
  disabled: boolean;
};

const sortSizes = (sizes: string[]): string[] => {
  return sizes.sort((a, b) => {
    const indexA = constants.sizeOrderMap.get(a) ?? Infinity;
    const indexB = constants.sizeOrderMap.get(b) ?? Infinity;
    return indexA - indexB;
  });
};

const ProductDetailsScreen: React.FC<ProductDetailsProps> = ({
  navigation,
  route,
}) => {
  const { product } = route.params || {};
  const defaultVariant: ProductVariant = product?.variants?.[0];
  const colors: string[] = Array.from(
    new Set(product?.variants.map(variant => variant.colorCode)),
  );
  const uniqSizes: string[] = sortSizes(
    Array.from(new Set(product?.variants.map(variant => variant.size))),
  );

  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [availableSizes, setAvailableSizes] = useState<ProductSize[]>([]);

  useEffect(() => {
    setSelectedColor(colors?.[0]);
  }, []);

  useEffect(() => {
    setSelectedSize(undefined);
    let availableSizesForColor: string[] = product?.variants
      .filter(variant => variant.colorCode === selectedColor)
      .map(variant => variant.size);

    setAvailableSizes(
      uniqSizes.map(size => ({
        size: size,
        disabled: !availableSizesForColor.includes(size),
      })),
    );
  }, [selectedColor]);

  const handleHeartButtonTap = () => {};
  const handleBagButtonTap = () => {};

  const colorForColorCode = (): string | undefined => {
    const selectedColorInVariant = product?.variants.find(
      variant => variant.colorCode === selectedColor,
    )?.color;
    return selectedColorInVariant ? `(${selectedColorInVariant})` : undefined;
  };

  const selectedSizeValue = (): string | undefined => {
    return selectedSize ? `(${selectedSize})` : undefined;
  };

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

        {/* Product Colors */}
        <SectionContainer style={style.colorSection}>
          <Text style={style.sectionTitle}>Color {colorForColorCode()}</Text>
          <ListView
            horizontal
            data={colors}
            renderItem={(item: string) => (
              <ColorCard
                color={item}
                style={style.colorContainer}
                size={spacing.xLarge}
                onSelect={setSelectedColor}
                isSelected={item === selectedColor}
              />
            )}
          />
        </SectionContainer>

        {/* Product Sizes */}
        <SectionContainer style={style.colorSection}>
          <Text style={style.sectionTitle}>Size {selectedSizeValue()}</Text>
          <ListView<ProductSize>
            horizontal
            data={availableSizes}
            renderItem={(item: ProductSize) => (
              <SizeCard
                style={style.colorContainer}
                size={item.size}
                onSelect={setSelectedSize}
                isSelected={item.size === selectedSize}
                disabled={item.disabled}
              />
            )}
          />
        </SectionContainer>
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
