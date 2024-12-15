import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton, ListView } from '../../../components';
import Dropdown, { DropdownItem } from '../../../components/dropdown';
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
  const sizes: DropdownItem[] = product?.variants.map(variant => ({
    label: variant.size,
    value: variant.size,
  }));
  const colors: DropdownItem[] = product?.variants.map(variant => ({
    label: variant.color,
    value: variant.colorCode,
  }));

  const [selectedSize, setSelectedSize] = useState<DropdownItem>(sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState<DropdownItem>(colors?.[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleDropdownSelect = () => {};

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
        <Text style={style.productName}>{product.name}</Text>
        <Text style={style.price}>
          {priceWithFormat(defaultVariant?.price)}
        </Text>

        {/* Size Dropdown */}
        <Dropdown
          items={sizes}
          placeholder="Size"
          fullWidth
          containerStyle={style.sizeDropdown}
          onSelect={handleDropdownSelect}
        />

        {/* Color Dropdown */}
        <Dropdown
          items={colors}
          dropDownType="color"
          placeholder="Color"
          fullWidth
          containerStyle={style.colorDropdown}
          onSelect={handleDropdownSelect}
        />
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
