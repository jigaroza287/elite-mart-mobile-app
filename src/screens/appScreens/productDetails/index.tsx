import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';

type ProductDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsProps> = () => {
  return (
    <Page isSafeAreaView>
      <Text>Product Details Screen</Text>
    </Page>
  );
};

export default ProductDetailsScreen;
