import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing } from '../../theme';
import style from './style';

export interface DropdownItem {
  label: string;
  value: string | number;
}

type DropdownProps = {
  items: DropdownItem[];
  placeholder?: string;
  onSelect: (item: DropdownItem) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder,
  onSelect,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const firstItem = items.length > 0 ? items[0].label : '';

  const handleOpen = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, []);

  const handleClose = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  }, []);

  const handleSelect = useCallback(
    (item: DropdownItem) => {
      setSelectedItem(item);
      onSelect(item);
      handleClose();
    },
    [onSelect, handleClose],
  );

  return (
    <>
      <View style={style.container}>
        <TouchableOpacity style={style.dropdown} onPress={handleOpen}>
          <Text style={style.dropdownText}>
            {selectedItem ? selectedItem.label : placeholder ?? firstItem}
          </Text>
          <Icon
            name="chevron-down-outline"
            size={spacing.xMedium}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['50%', '80%']}
        backgroundStyle={style.sheetBackground}>
        <BottomSheetScrollView contentContainerStyle={style.bottomSheetContent}>
          <Text style={style.title}>Select an option</Text>
          {items.map(item => (
            <TouchableOpacity
              key={item.value.toString()}
              style={style.item}
              onPress={() => handleSelect(item)}>
              <Text style={style.itemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

export default Dropdown;
