import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import {
  CategoryCard,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import {
  AppTabParamList,
  ProductListParams,
  RootStackParamList,
} from '../../../navigation/AppNavigationTypes';
import { Category, Product } from '../../../redux/features/home/homeTypes';
import useHome from '../../../redux/features/home/useHome';
import HomeSection from './components/homeSection';
import style from './style';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { homeData, loading, error, fetchHomeData } = useHome();

  useEffect(() => {
    fetchHomeData();
  }, []);

  const handleRefresh = useCallback(async () => {
    fetchHomeData();
  }, []);

  const hasValidParams = (params: ProductListParams): boolean => {
    return Object.entries(params).some(([key, value]) => {
      if (key === 'search') {
        return value !== '';
      }
      return value !== undefined;
    });
  };

  const handleProductListNavigation = (params: ProductListParams) => {
    if (hasValidParams(params)) {
      navigation.navigate('ProductList', {
        ...params,
      });
    }
  };

  const handleCategoriesViewAllTap = () => {
    navigation.navigate('Categories');
  };

  const handleProductTap = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <Page
      isSafeAreaView
      enablePullToRefresh
      onRefresh={handleRefresh}
      refreshing={loading}>
      <View style={style.container}>
        <View style={style.searchBarContainer}>
          <SearchBar
            placeholder="Type to search..."
            onSearch={search => handleProductListNavigation({ search })}
          />
        </View>
        {/* Categories Section */}
        <HomeSection
          title="Categories"
          onViewAllPress={handleCategoriesViewAllTap}>
          <ListView
            horizontal
            data={homeData?.data?.categories ?? []}
            renderItem={(item: Category) => (
              <CategoryCard
                category={item}
                onPress={category => handleProductListNavigation({ category })}
              />
            )}
          />
        </HomeSection>

        {/* Top Selling Section */}
        <HomeSection
          title="Top Rated"
          onViewAllPress={() =>
            handleProductListNavigation({ filter: 'top_rated' })
          }>
          <ListView
            horizontal
            data={homeData?.data?.topSellingProducts ?? []}
            renderItem={(item: Product) => (
              <ProductCard
                product={item}
                containerStyle={style.productContainer}
                onPress={handleProductTap}
              />
            )}
          />
        </HomeSection>

        {/* New Arrival Section */}
        <HomeSection
          title="New Arrival"
          onViewAllPress={() =>
            handleProductListNavigation({ filter: 'new_arrivals' })
          }>
          <ListView
            horizontal
            data={homeData?.data?.newArrivals ?? []}
            renderItem={(item: Product) => (
              <ProductCard
                product={item}
                containerStyle={style.productContainer}
                onPress={handleProductTap}
              />
            )}
          />
        </HomeSection>
      </View>
    </Page>
  );
};

export default HomeScreen;
