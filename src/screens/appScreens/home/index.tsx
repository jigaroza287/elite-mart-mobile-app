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
  HomeSection,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import {
  AppTabParamList,
  RootStackParamList,
} from '../../../navigation/AppNavigationTypes';
import { Category, Product } from '../../../redux/features/home/homeTypes';
import useHome from '../../../redux/features/home/useHome';
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

  const handleSearch = (query: string) => {
    navigation.navigate('ProductList', {
      search: query,
    });
  };

  const handleCategoriesViewAllTap = () => {
    navigation.navigate('Categories');
  };

  const handleTopRatedViewAllTap = () => {
    navigation.navigate('ProductList', {
      filter: 'top_rated',
    });
  };

  const handleNewArrivalViewAllTap = () => {
    navigation.navigate('ProductList', {
      filter: 'new_arrivals',
    });
  };

  const handleCategoryTap = (category: Category) => {
    navigation.navigate('ProductList', {
      category: category,
    });
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
          <SearchBar placeholder="Type to search..." onSearch={handleSearch} />
        </View>

        {/* Categories Section */}
        <HomeSection
          title="Categories"
          onViewAllPress={handleCategoriesViewAllTap}>
          <ListView
            horizontal
            data={homeData?.data?.categories ?? []}
            renderItem={(item: Category) => (
              <CategoryCard category={item} onPress={handleCategoryTap} />
            )}
          />
        </HomeSection>

        {/* Top Selling Section */}
        <HomeSection
          title="Top Rated"
          onViewAllPress={handleTopRatedViewAllTap}>
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
          onViewAllPress={handleNewArrivalViewAllTap}>
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
