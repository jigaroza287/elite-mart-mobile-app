import React, { useMemo } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../theme';
import PageHeader, { PageHeaderProps } from '../pageHeader';
import style from './style';

type ScrollBehavior = 'none' | 'scroll' | 'keyboardAwareScroll';

export interface PageProps extends PageHeaderProps {
  children: React.ReactNode;
  isSafeAreaView?: boolean;
  scrollBehavior?: ScrollBehavior;
  showHeader?: boolean;
  safeAreaColor?: string;
  enablePullToRefresh?: boolean;
  onRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
}

const Page: React.FC<PageProps> = ({
  children,
  isSafeAreaView = false,
  scrollBehavior = 'scroll',
  showHeader = false,
  safeAreaColor = colors.light,
  enablePullToRefresh = false,
  onRefresh,
  refreshing = false,
  ...headerProps
}: PageProps) => {
  const refreshControl = enablePullToRefresh ? (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  ) : undefined;

  const container = useMemo(() => {
    if (scrollBehavior === 'scroll') {
      return (
        <ScrollView
          contentContainerStyle={style.contentContainer}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={refreshControl}>
          {children}
        </ScrollView>
      );
    } else if (scrollBehavior === 'keyboardAwareScroll') {
      return (
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
          refreshControl={refreshControl}>
          {children}
        </KeyboardAwareScrollView>
      );
    } else {
      return (
        <View style={[style.container, { backgroundColor: safeAreaColor }]}>
          {children}
        </View>
      );
    }
  }, [scrollBehavior, safeAreaColor, children]);

  return (
    <View style={style.container}>
      {showHeader && <PageHeader {...headerProps} />}
      {isSafeAreaView ? (
        <SafeAreaView style={style.wrapper}>{container}</SafeAreaView>
      ) : (
        container
      )}
    </View>
  );
};

export default Page;
