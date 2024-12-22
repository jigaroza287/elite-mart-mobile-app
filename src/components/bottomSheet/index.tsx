import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import style from './style';

export type ReusableBottomSheetRef = {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
};

type ReusableBottomSheetProps = {
  children: React.ReactNode;
};

const ReusableBottomSheet = forwardRef<
  ReusableBottomSheetRef,
  ReusableBottomSheetProps
>(({ children }, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    openBottomSheet: () => {
      bottomSheetRef.current?.expand();
    },
    closeBottomSheet: () => {
      bottomSheetRef.current?.close();
    },
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      backgroundStyle={style.sheetBackground}
      enableContentPanningGesture={false}>
      <BottomSheetView style={style.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ReusableBottomSheet;
