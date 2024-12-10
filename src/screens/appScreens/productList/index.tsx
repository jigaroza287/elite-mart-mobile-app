import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import {
  BackButton,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { Product } from '../../../redux/features/home/homeTypes';
import useProducts from '../../../redux/features/product/useProduct';
import style from './style';
import { ProductListRequest } from '../../../redux/features/product/productTypes';
import { productScreenTitle } from '../../../utils/functionUtils';

type ProductListProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductList'
>;

const ProductListScreen: React.FC<ProductListProps> = ({
  navigation,
  route,
}) => {
  const { isSearchVisible = false, filter } = route.params || {};
  const { products, loading, error, fetchProducts, currentPage, totalPages } =
    useProducts();
  const productListRequestParams: ProductListRequest = {
    filter,
    page: 1,
  };

  useEffect(() => {
    fetchProducts(productListRequestParams);
  }, []);

  const loadMoreProducts = () => {
    if (!loading && currentPage < totalPages) {
      fetchProducts({ ...productListRequestParams, page: currentPage + 1 });
    }
  };

  const handleSearch = (query: string) => {
    console.log('You searched: ', query);
  };

  return (
    <Page isSafeAreaView scrollBehavior="none">
      <View style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={style.pageTitle}>{productScreenTitle(filter)}</Text>
        {isSearchVisible && (
          <SearchBar placeholder="Type to search..." onSearch={handleSearch} />
        )}
        <ListView
          numColumns={2}
          data={products}
          renderItem={(item: Product) => (
            <ProductCard
              product={item}
              containerStyle={style.productContainer}
            />
          )}
          style={style.contentContainer}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      </View>
    </Page>
  );
};

export default ProductListScreen;
