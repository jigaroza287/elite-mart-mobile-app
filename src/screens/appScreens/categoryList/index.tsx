import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { CategoryCard, ListView, SearchBar } from '../../../components';
import Page from '../../../components/page';
import {
  AppTabParamList,
  RootStackParamList,
} from '../../../navigation/AppNavigationTypes';
import useCategories from '../../../redux/features/category/useCategory';
import { Category } from '../../../redux/features/home/homeTypes';
import style from './style';

type CategoryListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, 'Categories'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CategoryListScreen: React.FC = () => {
  const navigation = useNavigation<CategoryListScreenNavigationProp>();

  const { categories, loading, error, fetchCategories } = useCategories();
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleRefresh = useCallback(async () => {
    fetchCategories();
  }, []);

  const handleCategoryTap = (category: Category) => {
    navigation.navigate('ProductList', {
      category: category,
    });
  };

  const handleSearch = (query: string) => {
    console.log('You searched: ', query);
  };

  return (
    <Page isSafeAreaView scrollBehavior="none">
      <View style={style.container}>
        <View style={style.header}>
          <SearchBar placeholder="Type to search..." onSearch={handleSearch} />
        </View>
        <Text style={style.pageTitle}>Shop By Category</Text>
        <ListView
          data={categories}
          renderItem={(item: Category) => (
            <CategoryCard
              category={item}
              layoutType="row"
              onPress={handleCategoryTap}
            />
          )}
          style={style.contentContainer}
          enablePullToRefresh
          onRefresh={handleRefresh}
          refreshing={loading}
          showEmptyView
        />
      </View>
    </Page>
  );
};

export default CategoryListScreen;
