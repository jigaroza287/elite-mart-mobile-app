import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import {
  CategoryCard,
  HorizontalList,
  HorizontalSection,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import { AppTabParamList } from '../../../navigation/AppNavigationTypes';
import style from './style';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppTabParamList,
  'Home'
>;

const mockData = [
  {
    id: 1,
    imageUrl: 'https://placehold.co/150x150/000000/FFFFFF/jpg',
    label: 'Hoodies',
  },
  {
    id: 2,
    imageUrl: 'https://placehold.co/150x150/000000/F0F0F0/jpg',
    label: 'Shorts',
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/150x150/000000/F4F4F4/jpg',
    label: 'Shoes',
  },
  {
    id: 4,
    imageUrl: 'https://placehold.co/150x150/000000/F9F9F9/jpg',
    label: 'Bags',
  },
  {
    id: 5,
    imageUrl: 'https://placehold.co/150x150/000000/F9F9F9/jpg',
    label: 'Accessories',
  },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const searchBarTapped = () => {
    navigation.navigate('Explore');
  };

  const handleCategoriesViewAllTap = () => {
    console.log('CategoriesViewAllTapped');
  };

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        <SearchBar placeholder="Type to search..." onPress={searchBarTapped} />
        <HorizontalSection
          title="Categories"
          onViewAllPress={handleCategoriesViewAllTap}>
          <HorizontalList
            data={mockData}
            renderItem={item => (
              <CategoryCard imageUrl={item.imageUrl} label={item.label} />
            )}
          />
        </HorizontalSection>
      </View>
    </Page>
  );
};

export default HomeScreen;
