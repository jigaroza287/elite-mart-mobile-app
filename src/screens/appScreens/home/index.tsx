import React from 'react';
import {View} from 'react-native';
import Page from '../../../components/page';
import style from './style';
import {SearchBar} from '../../../components';

const HomeScreen: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <Page isSafeAreaView>
      <View style={style.container}>
        <SearchBar placeholder="Type to search..." onSearch={handleSearch} />
      </View>
    </Page>
  );
};

export default HomeScreen;
