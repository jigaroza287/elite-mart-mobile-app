import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
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
  HomeStackParamList,
} from '../../../navigation/AppNavigationTypes';
import { Category, Product } from '../../../redux/features/home/homeTypes';
import useHome from '../../../redux/features/home/useHome';
import style from './style';

type HomeProp = NativeStackNavigationProp<HomeStackParamList, 'Home'> &
  BottomTabNavigationProp<AppTabParamList, 'HomeTab'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeProp>();
  const { homeData, loading, error, fetchHomeData, isSucceed } = useHome();

  useEffect(() => {
    fetchHomeData();
  }, []);

  const searchBarTapped = () => {
    navigation.navigate('ExploreTab');
  };

  const handleCategoriesViewAllTap = () => {
    navigation.navigate('ProductList', { isSearchVisible: false });
  };

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        <View style={style.searchBarContainer}>
          <SearchBar
            placeholder="Type to search..."
            onPress={searchBarTapped}
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
              <CategoryCard imageUrl={item.image} label={item.name} />
            )}
          />
        </HomeSection>

        {/* Top Selling Section */}
        <HomeSection
          title="Top Selling"
          onViewAllPress={handleCategoriesViewAllTap}>
          <ListView
            horizontal
            data={homeData?.data?.topSellingProducts ?? []}
            renderItem={(item: Product) => (
              <ProductCard
                product={item}
                containerStyle={style.productContainer}
              />
            )}
          />
        </HomeSection>

        {/* New Arrival Section */}
        <HomeSection
          title="New Arrival"
          onViewAllPress={handleCategoriesViewAllTap}>
          <ListView
            horizontal
            data={homeData?.data?.newArrivals ?? []}
            renderItem={(item: Product) => (
              <ProductCard
                product={item}
                containerStyle={style.productContainer}
              />
            )}
          />
        </HomeSection>
      </View>
    </Page>
  );
};

export default HomeScreen;
