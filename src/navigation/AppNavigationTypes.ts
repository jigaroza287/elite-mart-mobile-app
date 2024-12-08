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
  ProductList: { isSearchVisible: boolean };
  ProductDetails: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};
