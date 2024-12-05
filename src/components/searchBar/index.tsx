import React, {useState} from 'react';
import {TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './style';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  containerStyle?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  containerStyle,
  ...props
}) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={[style.container, containerStyle]}>
      <Icon name="search" size={24} color="#888" style={style.icon} />
      <TextInput
        value={query}
        onChangeText={handleSearch}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        style={style.input}
        {...props}
      />
    </View>
  );
};

export default SearchBar;
