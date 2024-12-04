import {DropdownItem} from '../components/dropdown';
import constants from './constants';

const getDropDownItemsDemographics = (): DropdownItem[] => {
  const items: DropdownItem[] = [];
  let counter = 1;

  for (const demographic of Object.values(constants.Demographics)) {
    items.push({label: demographic, value: counter++});
  }
  return items;
};

export {getDropDownItemsDemographics};
