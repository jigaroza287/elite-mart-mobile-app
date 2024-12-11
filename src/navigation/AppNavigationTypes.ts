import { Product } from '../redux/features/home/homeTypes';
import { ProductListFilters } from '../utils/constants';

export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type AppTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  CartTab: undefined;
  YouTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ProductList: { isSearchVisible: boolean; filter?: ProductListFilters };
  ProductDetails: { product: Product };
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};
