import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';
import style from './style';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  onPress,
  containerStyle,
  defaultValue,
  ...props
}) => {
  const [query, setQuery] = useState<string>(defaultValue || '');

  const handleSearch = () => {
    onSearch?.(query);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[style.container, containerStyle]}>
        <Icon name="search" size={24} color={colors.grey} style={style.icon} />
        {onPress ? (
          <Text style={style.inputText}>{placeholder}</Text>
        ) : (
          <TextInput
            value={query}
            onChangeText={setQuery}
            onEndEditing={handleSearch}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            style={style.input}
            clearButtonMode="unless-editing"
            {...props}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
