import React from 'react';
import { View } from 'react-native';
import { SearchBar } from '../../../components';
import Page from '../../../components/page';
import style from './style';

const HomeScreen: React.FC = () => {
  const searchBarTapped = () => {
    console.log('SearchBar tapped');
  };

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        <SearchBar placeholder="Type to search..." onPress={searchBarTapped} />
      </View>
    </Page>
  );
};

export default HomeScreen;
