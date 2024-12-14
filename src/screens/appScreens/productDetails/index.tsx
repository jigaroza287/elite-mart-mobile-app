import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton, ListView } from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { spacing } from '../../../theme';
import style from './style';
import { priceWithFormat } from '../../../utils/functionUtils';

type ProductDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsProps> = ({
  navigation,
  route,
}) => {
  const { product } = route.params || {};
  const defaultVariant = product?.variants?.[0];
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

        <Text style={style.productName}>{product.name}</Text>
        <Text style={style.price}>
          {priceWithFormat(defaultVariant?.price)}
        </Text>
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
