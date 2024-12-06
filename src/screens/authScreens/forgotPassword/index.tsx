import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/slices/authSlice';

const ForgotPasswordScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Forgot Password Screen</Text>
      <Button title="Login" onPress={() => dispatch(login())} />
    </View>
  );
};

export default ForgotPasswordScreen;
