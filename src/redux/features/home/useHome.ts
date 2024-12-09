import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchHomeDataThunk } from './homeActions';

const useHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.home,
  );

  const fetchHomeData = () => {
    dispatch(fetchHomeDataThunk());
  };

  return {
    homeData: data,
    loading,
    error,
    fetchHomeData,
  };
};

export default useHome;
