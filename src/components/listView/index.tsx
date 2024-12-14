import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ViewStyle,
} from 'react-native';

interface HorizontalListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  renderItem: (item: T) => React.ReactElement | null;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const ListView = <T,>({
  data,
  renderItem,
  containerStyle,
  contentContainerStyle,
  ...props
}: HorizontalListProps<T>) => {
  const renderListItem: ListRenderItem<T> = ({ item }) => renderItem(item);

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderListItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={contentContainerStyle}
      style={containerStyle}
      {...props}
    />
  );
};

export default ListView;
