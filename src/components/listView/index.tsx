import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  RefreshControl,
  ViewStyle,
} from 'react-native';
import EmptyView from '../emptyView';

interface ListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  renderItem: (item: T) => React.ReactElement | null;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  enablePullToRefresh?: boolean;
  onRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
  showEmptyView?: boolean;
  emptyViewIcon?: string;
  emptyViewMessage?: string;
}

const ListView = <T,>({
  data,
  renderItem,
  containerStyle,
  contentContainerStyle,
  enablePullToRefresh = false,
  onRefresh,
  refreshing = false,
  showEmptyView = false,
  emptyViewIcon = 'search-outline',
  emptyViewMessage,
  ...props
}: ListProps<T>) => {
  const refreshControl = enablePullToRefresh ? (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  ) : undefined;

  const renderListItem: ListRenderItem<T> = ({ item }) => renderItem(item);

  const emptyView = showEmptyView ? (
    <EmptyView message={emptyViewMessage} icon={emptyViewIcon} />
  ) : null;

  const computedContentContainerStyle =
    data?.length === 0 ? { flexGrow: 1 } : contentContainerStyle;

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderListItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={computedContentContainerStyle}
      style={containerStyle}
      refreshControl={refreshControl}
      ListEmptyComponent={emptyView}
      {...props}
    />
  );
};

export default ListView;
