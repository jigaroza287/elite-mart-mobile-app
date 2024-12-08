import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
  CategoryCard,
  HorizontalList,
  HomeSection,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import { AppTabParamList } from '../../../navigation/AppNavigationTypes';
import useHome from '../../../redux/features/home/useHome';
import style from './style';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppTabParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { homeData, loading, error, fetchHomeData, isSucceed } = useHome();

  useEffect(() => {
    fetchHomeData();
  }, []);

  const searchBarTapped = () => {
    navigation.navigate('Explore');
  };

  const handleCategoriesViewAllTap = () => {
    console.log('CategoriesViewAllTapped');
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
          <HorizontalList
            data={homeData?.data?.categories ?? []}
            renderItem={item => (
              <CategoryCard imageUrl={item.image} label={item.name} />
            )}
          />
        </HomeSection>

        {/* Top Selling Section */}
        <HomeSection
          title="Top Selling"
          onViewAllPress={handleCategoriesViewAllTap}>
          <HorizontalList
            data={homeData?.data?.topSellingProducts ?? []}
            renderItem={item => <ProductCard product={item} />}
          />
        </HomeSection>

        {/* New Arrival Section */}
        <HomeSection
          title="New Arrival"
          onViewAllPress={handleCategoriesViewAllTap}>
          <HorizontalList
            data={homeData?.data?.newArrivals ?? []}
            renderItem={item => <ProductCard product={item} />}
          />
        </HomeSection>
      </View>
    </Page>
  );
};

export default HomeScreen;
