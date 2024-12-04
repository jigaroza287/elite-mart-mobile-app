import React from 'react';
import {View} from 'react-native';
import Dropdown, {DropdownItem} from '../../../components/dropdown';
import Page from '../../../components/page';
import {getDropDownItemsDemographics} from '../../../utils/functionUtils';
import style from './style';

const HomeScreen: React.FC = () => {
  const onPressBack = () => {};
  const items: DropdownItem[] = getDropDownItemsDemographics();

  const handleSelect = (item: {label: string; value: number | string}) => {
    console.log('Dropdown item selected: ', item);
  };

  return (
    <Page
      isSafeAreaView
      scrollBehavior="keyboardAwareScroll"
      showHeader
      title="Verification"
      leftIcon="arrow-back-outline"
      onLeftPress={onPressBack}>
      <View style={style.container}>
        <Dropdown items={items} onSelect={handleSelect} />
      </View>
    </Page>
  );
};

export default HomeScreen;
