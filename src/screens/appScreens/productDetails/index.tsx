import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BackButton,
  BulletList,
  ColorCard,
  IconButton,
  ImageGallery,
  ListView,
  PinCodeChecker,
  SectionContainer,
  SizeCard,
  StarRating,
} from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { ProductVariant } from '../../../redux/features/home/homeTypes';
import usePinCodeCheck from '../../../redux/features/pinCodeCheck/usePinCodeCheck';
import { useLoadingOverlay } from '../../../redux/hooks/useLoadingOverlay';
import { colors, spacing } from '../../../theme';
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
  const { show, hide } = useLoadingOverlay();

  const {
    loading,
    error: pinCodeCheckError,
    pinCodeData,
    validatePinCode,
  } = usePinCodeCheck();

  const defaultVariant: ProductVariant = product?.variants?.[0];
  const productColors: string[] = Array.from(
    new Set(product?.variants.map(variant => variant.colorCode)),
  );
  const uniqSizes: string[] = sortSizes(
    Array.from(new Set(product?.variants.map(variant => variant.size))),
  );

  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [availableSizes, setAvailableSizes] = useState<ProductSize[]>([]);

  useEffect(() => {
    setSelectedColor(productColors?.[0]);
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

  useEffect(() => {
    loading ? show() : hide();
  }, [loading, pinCodeData, pinCodeCheckError]);

  const handleHeartButtonTap = () => {};
  const handleBagButtonTap = () => {};
  const handleReturnPolicyTap = () => {};

  const handleCheckDelivery = (pinCode: string) => {
    validatePinCode({ pinCode });
  };

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
    <>
      <SafeAreaView>
        {/* Header */}
        <View style={style.header}>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={style.rightButtonsContainer}>
            <IconButton
              iconName="heart-outline"
              onPress={handleHeartButtonTap}
            />
            <IconButton iconName="bag-outline" onPress={handleBagButtonTap} />
          </View>
        </View>
      </SafeAreaView>
      <Page>
        {/* Product Images */}
        <ImageGallery
          images={[
            ...defaultVariant?.images,
            ...defaultVariant?.images,
            ...defaultVariant.images,
            ...defaultVariant.images,
          ]}
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
              data={productColors}
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

          {/* Delivery and Return Details */}
          <SectionContainer style={style.colorSection}>
            <Text style={style.sectionTitle}>Delivery and Return Details</Text>
            <PinCodeChecker
              onCheckDelivery={handleCheckDelivery}
              error={pinCodeCheckError}
            />

            {/* Delivery Details */}
            <View style={style.deliveryDetailsContainer}>
              <View style={style.iconContainer}>
                <Icon name="return-up-back-outline" size={spacing.xMedium} />
                <Icon
                  name="checkmark-circle-sharp"
                  size={spacing.medium}
                  color={colors.green}
                  style={style.greenCheckIcon}
                />
              </View>
              <View>
                <Text style={style.deliveryText}>
                  7 day Return and Exchange
                </Text>
                <Text
                  style={style.returnPolicyText}
                  onPress={handleReturnPolicyTap}>
                  Return Policies
                </Text>
              </View>
            </View>

            {/* COD Availability */}
            <View style={style.deliveryDetailsContainer}>
              <View style={style.iconContainer}>
                <Icon name="cash-outline" size={spacing.xMedium} />
                <Icon
                  name="checkmark-circle-sharp"
                  size={spacing.medium}
                  color={colors.green}
                  style={style.greenCheckIcon}
                />
              </View>
              <Text style={style.deliveryText}>
                Check COD availability at checkout
              </Text>
            </View>
          </SectionContainer>

          {/* Product Details */}
          <SectionContainer style={style.colorSection}>
            <Text style={style.sectionTitle}>Product Details</Text>
            <BulletList items={product.details} />
          </SectionContainer>
        </View>
      </Page>
    </>
  );
};

export default ProductDetailsScreen;
