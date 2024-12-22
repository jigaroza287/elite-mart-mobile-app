import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme';
import styles from './style';

interface PinCodeCheckerProps extends ViewProps {
  error?: string;
  onCheckDelivery: (pinCode: string) => void;
}

const PinCodeChecker: React.FC<PinCodeCheckerProps> = ({
  error,
  onCheckDelivery,
  style,
}) => {
  const [pinCode, setPinCode] = useState<string>('');

  const handleCheckDelivery = () => {
    Keyboard.dismiss();
    if (pinCode.trim().length === 0) {
      Alert.alert('Error', 'Please enter a valid pin code.');
      return;
    }
    onCheckDelivery(pinCode);
  };

  const computedStyles: StyleProp<ViewStyle> = [
    styles.container,
    style,
    error && { borderColor: colors.red },
  ];

  return (
    <>
      <View style={computedStyles}>
        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          keyboardType="numeric"
          maxLength={6}
          value={pinCode}
          onChangeText={setPinCode}
        />
        <TouchableOpacity style={styles.button} onPress={handleCheckDelivery}>
          <Text style={styles.buttonText}>Check Delivery</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default PinCodeChecker;
