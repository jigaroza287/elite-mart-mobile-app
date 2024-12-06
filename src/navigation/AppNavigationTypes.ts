export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: {token: string};
};

export type AppTabParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  You: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};
