import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  visible: boolean;
  message?: string;
}

const initialState: LoadingState = {
  visible: false,
  message: undefined,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<string | undefined>) => {
      state.visible = true;
      state.message = action.payload;
    },
    hideLoading: state => {
      state.visible = false;
      state.message = undefined;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
