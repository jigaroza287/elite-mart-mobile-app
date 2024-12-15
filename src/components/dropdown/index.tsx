import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing } from '../../theme';
import style from './style';

export type DropdownType = 'string' | 'color';

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: DropdownItem[];
  placeholder?: string;
  dropDownType?: DropdownType;
  fullWidth?: boolean;
  containerStyle?: ViewStyle;
  onSelect: (item: DropdownItem) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder,
  dropDownType = 'string',
  fullWidth = false,
  containerStyle,
  onSelect,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<DropdownItem>(items?.[0]);

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

  const renderSelectedValue = () => {
    if (dropDownType == 'color') {
      const backgroundColor = { backgroundColor: selectedItem.value };
      return <View style={[style.colorContainer, backgroundColor]} />;
    }
    return <Text style={style.selectedText}>{selectedItem.value}</Text>;
  };

  return (
    <>
      <View style={[style.container, containerStyle]}>
        <TouchableOpacity
          style={[style.dropdown, { width: fullWidth ? '100%' : undefined }]}
          onPress={handleOpen}>
          <Text style={style.dropdownText}>{placeholder}</Text>
          <View style={style.valueIconContainer}>
            {renderSelectedValue()}
            <Icon
              name="chevron-down-outline"
              size={spacing.xMedium}
              color="black"
              style={style.chevronStyle}
            />
          </View>
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['50%', '80%']}
        backgroundStyle={style.sheetBackground}>
        <BottomSheetScrollView contentContainerStyle={style.bottomSheetContent}>
          <Text style={style.title}>Select an option</Text>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index.toString()}
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
