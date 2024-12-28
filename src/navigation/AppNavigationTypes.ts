import { Category, Product } from '../redux/features/home/homeTypes';
import { ProductListFilters } from '../utils/constants';

type ProductListParams = {
  isSearchVisible: boolean;
  filter?: ProductListFilters;
  category?: Category;
};

export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type AppTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  You: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  ProductList: ProductListParams;
  ProductDetails: { product: Product };
};
