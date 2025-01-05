import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '../../../components';
import Page from '../../../components/page';
import {
  AppTabParamList,
  RootStackParamList,
} from '../../../navigation/AppNavigationTypes';
import { spacing } from '../../../theme';
import style from './style';

type CartScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, 'Cart'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CartScreen: React.FC = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  const cartItems = [];
  const handleExploreCategoriesTap = () => {
    navigation.navigate('Categories');
  };
  const cartEmptyView = (
    <View style={style.cartEmptyView}>
      <Icon name="bag-outline" size={spacing.xHuge} />
      <Text style={style.cartEmptyText}>Your cart is empty</Text>
      <Button
        title="Explore Categories"
        onPress={handleExploreCategoriesTap}
        buttonStyle={style.exploreCategoriesButton}
        textStyle={style.exploreCategoriesButtonText}
      />
    </View>
  );
  return (
    <Page isSafeAreaView scrollBehavior={cartItems.length ? 'scroll' : 'none'}>
      {cartItems.length ? (
        <View>
          <Text>Cart Items</Text>
        </View>
      ) : (
        cartEmptyView
      )}
    </Page>
  );
};

export default CartScreen;
