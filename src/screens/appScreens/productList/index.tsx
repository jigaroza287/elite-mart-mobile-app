import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BackButton,
  BottomSheet,
  ListView,
  ProductCard,
  SearchBar,
} from '../../../components';
import { BottomSheetRef } from '../../../components/bottomSheet';
import Page from '../../../components/page';
import { RootStackParamList } from '../../../navigation/AppNavigationTypes';
import { Product } from '../../../redux/features/home/homeTypes';
import { ProductListRequest } from '../../../redux/features/product/productTypes';
import useProducts from '../../../redux/features/product/useProduct';
import { spacing } from '../../../theme';
import constants, { CommonListItem } from '../../../utils/constants';
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
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    sortBy: '',
    demographic: '',
    priceRange: { min: '', max: '' },
  });
  const [searchQuery, setSearchQuery] = useState<string>(search);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const productListRequestParams: ProductListRequest = useMemo(
    () => ({
      filter,
      page: 1,
      categoryId: category?.id,
      search: searchQuery,
      sortBy:
        constants.sortOptions.filter(
          sortOption => sortOption.key === filters.sortBy,
        )?.[0]?.value ?? '',
      demographic: filters.demographic,
      minPrice: filters.priceRange.min,
      maxPrice: filters.priceRange.max,
    }),
    [filter, category?.id, searchQuery, filters],
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

  useEffect(() => {
    fetchProducts(productListRequestParams);
  }, [filters]);

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
  const openBottomSheet = (filterType: string) => {
    setActiveFilter(filterType);
    bottomSheetRef.current?.openBottomSheet();
  };

  const handleSortBySelect = (selectedItem: CommonListItem) => {
    setFilters(prev => ({ ...prev, sortBy: selectedItem.key }));
    bottomSheetRef.current?.closeBottomSheet();
  };

  const handleDemographicSelect = (value: string) => {
    setFilters(prev => ({ ...prev, demographic: value }));
    bottomSheetRef.current?.closeBottomSheet();
  };

  const handleApplyPriceRange = () => {
    Keyboard.dismiss();
    setFilters(prev => ({
      ...prev,
      priceRange: { min: minPrice, max: maxPrice },
    }));
    bottomSheetRef.current?.closeBottomSheet();
  };

  const renderFilterListHeader = (headerTitle: string) => {
    return (
      <View style={style.filterHeader}>
        <Text style={style.filterHeaderTitle}>{headerTitle}</Text>
        <TouchableOpacity
          style={style.filterCloseButton}
          onPress={() => bottomSheetRef.current?.closeBottomSheet()}>
          <Icon name="close-outline" size={spacing.large} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomSheetContent = () => {
    if (activeFilter === 'Sort By') {
      return (
        <FlatList
          data={constants.sortOptions}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSortBySelect(item)}>
              <Text style={style.optionText}>{item.key}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={renderFilterListHeader('Sort By')}
        />
      );
    }

    if (activeFilter === 'Demographic') {
      return (
        <FlatList
          data={constants.demographicOptions}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleDemographicSelect(item)}>
              <Text style={style.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={renderFilterListHeader('Gender')}
        />
      );
    }

    if (activeFilter === 'Price') {
      return (
        <>
          {renderFilterListHeader('Price')}
          <View style={style.priceRangeContainer}>
            <TextInput
              style={style.priceInput}
              placeholder="Min Price"
              keyboardType="numeric"
              onChangeText={setMinPrice}
              value={minPrice}
            />
            <TextInput
              style={style.priceInput}
              placeholder="Max Price"
              keyboardType="numeric"
              onChangeText={setMaxPrice}
              value={maxPrice}
            />
            <TouchableOpacity
              style={style.applyButton}
              onPress={() => handleApplyPriceRange()}>
              <Text style={style.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }

    return null;
  };

  const footerComponent = useMemo(() => {
    if (currentPage === totalPages) {
      return (
        <View style={style.footerContainer}>
          <Text style={style.footerText}>
            In difficult times, fashion is always outrageous.
          </Text>
          <Text style={[style.footerText, style.footerAuthorText]}>
            Elsa Schiaparelli
          </Text>
        </View>
      );
    } else if (products.length > 0 && loading) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }, [products, loading]);

  const filterComponent = useMemo(() => {
    return (
      <View style={style.filtersRow}>
        <TouchableOpacity
          style={style.filterButton}
          onPress={() => openBottomSheet('Sort By')}>
          <Text style={style.filterButtonText}>
            {filters.sortBy.length > 0 ? filters.sortBy : 'Sort By'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.filterButton}
          onPress={() => openBottomSheet('Demographic')}>
          <Text style={style.filterButtonText}>
            {filters.demographic.length > 0 ? filters.demographic : 'Gender'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.filterButton}
          onPress={() => openBottomSheet('Price')}>
          <Text style={style.filterButtonText}>Price</Text>
        </TouchableOpacity>
      </View>
    );
  }, [filters]);

  return (
    <>
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
      {filterComponent}
      <BottomSheet ref={bottomSheetRef}>
        {renderBottomSheetContent()}
      </BottomSheet>
    </>
  );
};

export default ProductListScreen;
