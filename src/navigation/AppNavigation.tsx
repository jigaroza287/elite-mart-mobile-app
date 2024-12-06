import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/appScreens/cart';
import OffersScreen from '../screens/appScreens/explore';
import HomeScreen from '../screens/appScreens/home';
import ProfileScreen from '../screens/appScreens/profile';
import { AppTabParamList, RootStackParamList } from './AppNavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: 'shift' }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={OffersScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="You" component={ProfileScreen} />
    </Tab.Navigator>
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
