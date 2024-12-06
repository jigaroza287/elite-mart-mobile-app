import React from 'react';
import { Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Page from '../../../components/page';
import { login } from '../../../redux/slices/authSlice';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Page isSafeAreaView>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => dispatch(login())} />
    </Page>
  );
};

export default LoginScreen;
