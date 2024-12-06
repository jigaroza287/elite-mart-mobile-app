import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ViewStyle,
} from 'react-native';
import style from './style';

interface HorizontalListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  renderItem: (item: T) => React.ReactElement | null;
  contentContainerStyle?: ViewStyle;
}

const HorizontalList = <T,>({
  data,
  renderItem,
  contentContainerStyle,
  ...props
}: HorizontalListProps<T>) => {
  const renderListItem: ListRenderItem<T> = ({ item }) => renderItem(item);

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderListItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[style.listContainer, contentContainerStyle]}
      {...props}
    />
  );
};

export default HorizontalList;
