import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import style from './style';

export type BottomSheetRef = {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
};

type ReusableBottomSheetProps = {
  children: React.ReactNode;
};

const ReusableBottomSheet = forwardRef<
  BottomSheetRef,
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

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backgroundStyle={style.sheetBackground}
      enableContentPanningGesture={false}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={style.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ReusableBottomSheet;
