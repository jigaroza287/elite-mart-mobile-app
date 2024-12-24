import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ViewStyle,
} from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';

interface ListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  renderItem: (item: T) => React.ReactElement | null;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  enablePullToRefresh?: boolean;
  onRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
}

const ListView = <T,>({
  data,
  renderItem,
  containerStyle,
  contentContainerStyle,
  enablePullToRefresh = false,
  onRefresh,
  refreshing = false,
  ...props
}: ListProps<T>) => {
  const refreshControl = enablePullToRefresh ? (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  ) : undefined;

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
      refreshControl={refreshControl}
      {...props}
    />
  );
};

export default ListView;
