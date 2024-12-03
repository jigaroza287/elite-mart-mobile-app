import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Text, View} from 'react-native';
import Button from '../../../components/button';
import Checkbox from '../../../components/checkBox';
import FormInput from '../../../components/formInput';
import Page from '../../../components/page';
import {loginSchema} from '../../../utils/validationSchemas';
import style from './style';

interface LoginFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignUpScreen: React.FC = () => {
  const {
    control,
    // watch,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      name: 'Jigar Oza',
      email: 'jigar@gmail.com',
      password: 'Test@123',
    },
  });
  // const allField = watch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const onSubmit = () => {};

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(isPasswordVisible => !isPasswordVisible);
  };

  const toggleTermsChecked = () => {
    setIsTermsChecked(isTermsChecked => !isTermsChecked);
  };

  const renderName = () => (
    <FormInput
      name="name"
      placeholder="Name"
      control={control}
      error={errors.name?.message}
    />
  );

  const renderEmail = () => (
    <FormInput
      name="email"
      placeholder="Email"
      control={control}
      error={errors.email?.message}
    />
  );

  const renderPassword = () => (
    <FormInput
      name="password"
      placeholder="Password"
      control={control}
      error={errors.password?.message}
      secureTextEntry
      isTextVisible={isPasswordVisible}
      textVisibilityChanged={togglePasswordVisibility}
    />
  );

  const renderTermsContainer = () => (
    <View style={style.termsContainer}>
      <Checkbox isChecked={isTermsChecked} onToggle={toggleTermsChecked} />
      <Text style={style.termsText}>
        By signing up, you agree to the{' '}
        <Text style={style.termsHighlightedText}>
          Terms of Service and Privacy Policy
        </Text>
      </Text>
    </View>
  );

  const renderSignUpButton = () => (
    <Button
      type="primary"
      onPress={handleSubmit(onSubmit)}
      title="Sign Up"
      fullWidth
    />
  );

  const renderOrWithText = () => <Text style={style.orWithText}>Or with</Text>;

  const renderSignUpWithGoogleButton = () => (
    <Button
      type="tertiary"
      onPress={handleSubmit(onSubmit)}
      title="Sign Up with Google"
      fullWidth
      icon="logo-google"
    />
  );

  const renderAlreadyHaveAccountText = () => (
    <Text style={style.alreadyHaveAccountText}>
      Already have an account?{' '}
      <Text style={style.alreadyHaveAccountHighlightedText}>Login</Text>
    </Text>
  );

  return (
    <Page
      isSafeAreaView
      scrollBehavior="keyboardAwareScroll"
      showHeader
      title="Sign Up">
      <View style={style.container}>
        {renderName()}
        {renderEmail()}
        {renderPassword()}
        {renderTermsContainer()}
        {renderSignUpButton()}
        {renderOrWithText()}
        {renderSignUpWithGoogleButton()}
        {renderAlreadyHaveAccountText()}
      </View>
    </Page>
  );
};

export default SignUpScreen;
