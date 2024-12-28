import React, { useState } from 'react';
import {
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
import useDebouncedCallback from '../../redux/hooks/useDebounce';

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
  ...props
}) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = useDebouncedCallback((text: string) => {
    onSearch?.(text);
  }, 300);

  const handleChange = (text: string) => {
    setQuery(text);
    handleSearch(text);
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
            onChangeText={handleChange}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            style={style.input}
            {...props}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
