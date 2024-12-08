import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUsersThunk } from './homeActions';

const useHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error, isSucceed } = useSelector(
    (state: RootState) => state.home,
  );

  const fetchHomeData = () => {
    dispatch(fetchUsersThunk());
  };

  return {
    homeData: data,
    loading,
    error,
    isSucceed,
    fetchHomeData,
  };
};

export default useHome;
