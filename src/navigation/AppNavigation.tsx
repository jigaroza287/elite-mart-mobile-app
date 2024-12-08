import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/appScreens/cart';
import OffersScreen from '../screens/appScreens/explore';
import HomeScreen from '../screens/appScreens/home';
import ProductDetailsScreen from '../screens/appScreens/productDetails';
import ProductListScreen from '../screens/appScreens/productList';
import ProfileScreen from '../screens/appScreens/profile';
import {
  AppTabParamList,
  HomeStackParamList,
  RootStackParamList,
} from './AppNavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false, animation: 'shift' }}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="ExploreTab" component={OffersScreen} />
      <Tab.Screen name="CartTab" component={CartScreen} />
      <Tab.Screen name="YouTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ProductList" component={ProductListScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={AppTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
