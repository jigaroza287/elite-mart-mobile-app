import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { BackButton } from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { View } from 'react-native';
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
  console.log('Received Product\n');
  console.log(JSON.stringify(product));

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
    </Page>
  );
};

export default ProductDetailsScreen;
