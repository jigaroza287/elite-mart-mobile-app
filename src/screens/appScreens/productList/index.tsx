import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  BackButton,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import Page from '../../../components/page';
import { HomeStackParamList } from '../../../navigation/AppNavigationTypes';
import { Product } from '../../../redux/features/home/homeTypes';
import useHome from '../../../redux/features/home/useHome';
import style from './style';
import { spacing } from '../../../theme';

type ProductListProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductList'
>;

const ProductListScreen: React.FC<ProductListProps> = ({
  navigation,
  route,
}) => {
  const { isSearchVisible = false } = route.params || {};

  const { homeData, loading, error, fetchHomeData, isSucceed } = useHome();

  useEffect(() => {
    fetchHomeData();
  }, []);

  const handleSearch = (query: string) => {
    console.log('You searched: ', query);
  };

  return (
    <Page isSafeAreaView scrollBehavior="none">
      <View style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        {isSearchVisible && (
          <SearchBar placeholder="Type to search..." onSearch={handleSearch} />
        )}
        <ListView
          numColumns={2}
          data={homeData?.data?.topSellingProducts ?? []}
          renderItem={(item: Product) => (
            <ProductCard
              product={item}
              containerStyle={style.productContainer}
            />
          )}
          style={style.contentContainer}
        />
      </View>
    </Page>
  );
};

export default ProductListScreen;
