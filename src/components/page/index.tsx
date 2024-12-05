import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../theme';
import PageHeader, {PageHeaderProps} from '../pageHeader';
import style from './style';

type ScrollBehavior = 'none' | 'scroll' | 'keyboardAwareScroll';

export interface PageProps extends PageHeaderProps {
  children: React.ReactNode;
  isSafeAreaView?: boolean;
  scrollBehavior?: ScrollBehavior;
  showHeader?: boolean;
  safeAreaColor?: string;
}

const Page: React.FC<PageProps> = ({
  children,
  isSafeAreaView = false,
  scrollBehavior = 'scroll',
  showHeader = false,
  safeAreaColor = colors.light,
  ...headerProps
}: PageProps) => {
  const container = useMemo(() => {
    if (scrollBehavior === 'scroll') {
      return (
        <ScrollView
          contentContainerStyle={style.contentContainer}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      );
    } else if (scrollBehavior === 'keyboardAwareScroll') {
      return (
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}>
          {children}
        </KeyboardAwareScrollView>
      );
    } else {
      return (
        <View style={[style.container, {backgroundColor: safeAreaColor}]}>
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
