import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import {
  BackButton,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import { RootStackParamList } from '../../../navigation/AppNavigationTypes';
import { Product } from '../../../redux/features/home/homeTypes';
import { ProductListRequest } from '../../../redux/features/product/productTypes';
import useProducts from '../../../redux/features/product/useProduct';
import { productScreenTitle } from '../../../utils/functionUtils';
import style from './style';

type ProductListProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

const ProductListScreen: React.FC<ProductListProps> = ({
  navigation,
  route,
}) => {
  const { filter, category, search = '' } = route.params || {};
  const {
    products,
    loading,
    error,
    fetchProducts,
    currentPage,
    totalPages,
    productCount,
  } = useProducts();
  const [searchQuery, setSearchQuery] = useState<string>(search);
  const productListRequestParams: ProductListRequest = useMemo(
    () => ({
      filter,
      page: 1,
      categoryId: category?.id,
      search: searchQuery,
    }),
    [filter, category?.id, searchQuery],
  );

  const pageTitle = useMemo(() => {
    const baseTitle = category?.name || productScreenTitle(filter);
    return baseTitle
      ? `${baseTitle}${
          !loading && !error && productCount ? ` (${productCount})` : ''
        }`
      : '';
  }, [category?.name, filter, productCount, loading, error]);

  const showPageTitle = Boolean(pageTitle);

  useEffect(() => {
    fetchProducts(productListRequestParams);
  }, []);

  const handleRefresh = useCallback(() => {
    fetchProducts({ ...productListRequestParams, page: 1 });
  }, [fetchProducts, productListRequestParams]);

  const loadMoreProducts = useCallback(() => {
    if (products.length > 0 && !loading && currentPage < totalPages) {
      fetchProducts({ ...productListRequestParams, page: currentPage + 1 });
    }
  }, [
    fetchProducts,
    productListRequestParams,
    products,
    currentPage,
    totalPages,
    loading,
  ]);

  const handleProductTap = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const footerComponent = useMemo(() => {
    if (products.length > 0 && loading) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }, [products, loading]);

  return (
    <Page isSafeAreaView scrollBehavior="none">
      <View style={style.container}>
        <View style={style.header}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {showPageTitle && <Text style={style.pageTitle}>{pageTitle}</Text>}
        {search && (
          <SearchBar
            placeholder="Type to search..."
            onSearch={setSearchQuery}
            defaultValue={search}
          />
        )}
        <ListView
          numColumns={2}
          data={products}
          renderItem={(item: Product) => (
            <ProductCard
              product={item}
              containerStyle={style.productContainer}
              onPress={handleProductTap}
            />
          )}
          style={style.contentContainer}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={footerComponent}
          enablePullToRefresh={products.length > 0}
          onRefresh={handleRefresh}
          refreshing={loading}
          showEmptyView
        />
      </View>
    </Page>
  );
};

export default ProductListScreen;
