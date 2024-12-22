import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../slices/loadingSlice';
import { AppDispatch, RootState } from '../store';

export const useLoadingOverlay = () => {
  const dispatch: AppDispatch = useDispatch();
  const { visible, message } = useSelector((state: RootState) => state.loading);

  const show = (loadingMessage?: string) => {
    dispatch(showLoading(loadingMessage));
  };

  const hide = () => {
    dispatch(hideLoading());
  };

  return {
    visible,
    message,
    show,
    hide,
  };
};
