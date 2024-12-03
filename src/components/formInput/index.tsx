import React, {useCallback, useMemo} from 'react';
import {Controller, ControllerRenderProps} from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import {spacing} from '../../theme';

interface FormInputProps extends TextInputProps {
  name: string;
  control: any;
  isTextVisible?: boolean;
  textVisibilityChanged?: () => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  secureTextEntry = false,
  isTextVisible = false,
  textVisibilityChanged,
  error,
  ...props
}) => {
  const eyeIcon = useMemo(
    () => (isTextVisible ? 'eye-off-outline' : 'eye-outline'),
    [isTextVisible],
  );

  const renderTextField = useCallback(
    ({field: {onChange, onBlur, value}}: {field: ControllerRenderProps}) => {
      return (
        <View style={style.inputContainer}>
          <TextInput
            style={[style.input, error ? style.errorInput : null]}
            secureTextEntry={secureTextEntry && !isTextVisible}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={style.secureEntryIcon}
              onPress={textVisibilityChanged}>
              <Icon name={eyeIcon} size={spacing.large} color="gray" />
            </TouchableOpacity>
          )}
        </View>
      );
    },
    [
      eyeIcon,
      props,
      secureTextEntry,
      isTextVisible,
      textVisibilityChanged,
      error,
    ],
  );

  return (
    <View style={style.container}>
      <Controller control={control} name={name} render={renderTextField} />
      {error && <Text style={style.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
