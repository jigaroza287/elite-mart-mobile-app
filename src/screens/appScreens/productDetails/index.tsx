import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
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
import { spacing } from '../../../theme';
import constants from '../../../utils/constants';
import { priceWithFormat } from '../../../utils/functionUtils';
import IconDescription from './components/IconDescription';
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
  const [showDeliveryDetails, setShowDeliveryDetails] =
    useState<boolean>(false);

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
    if (pinCodeCheckError) {
      setShowDeliveryDetails(false);
    } else if (!loading && pinCodeData && pinCodeData.isValid) {
      setShowDeliveryDetails(true);
    }
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

            {/* Return & Exchange */}
            <IconDescription
              iconName="return-up-back-outline"
              descriptionText="7 day Return and Exchange"
              linkButtonText="Return Policies"
              onPressLink={handleReturnPolicyTap}
              style={style.deliveryDetailsContainer}
            />

            {/* COD Availability */}
            <IconDescription
              iconName="cash-outline"
              descriptionText="Check COD availability at checkout"
              style={style.deliveryDetailsContainer}
            />
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
