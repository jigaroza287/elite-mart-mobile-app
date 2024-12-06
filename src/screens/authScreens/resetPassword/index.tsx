import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/slices/authSlice';

const ResetPasswordScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Reset Password Screen</Text>
      <Button title="Login" onPress={() => dispatch(login())} />
    </View>
  );
};

export default ResetPasswordScreen;
