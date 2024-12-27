import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { BackButton, CategoryCard, ListView } from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import useCategories from '../../../redux/features/category/useCategory';
import { Category } from '../../../redux/features/home/homeTypes';
import style from './style';

type CategoryListProps = NativeStackScreenProps<
  HomeStackParamList,
  'CategoryList'
>;

const CategoryListScreen: React.FC<CategoryListProps> = ({ navigation }) => {
  const { categories, loading, error, fetchCategories } = useCategories();
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleRefresh = useCallback(async () => {
    fetchCategories();
  }, []);

  const handleCategoryTap = (category: Category) => {
    navigation.navigate('ProductList', {
      isSearchVisible: false,
      category: category,
    });
  };

  return (
    <Page isSafeAreaView scrollBehavior="none">
      <View style={style.container}>
        <View style={style.header}>
          <BackButton onPress={() => navigation.goBack()} />
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
        />
      </View>
    </Page>
  );
};

export default CategoryListScreen;
