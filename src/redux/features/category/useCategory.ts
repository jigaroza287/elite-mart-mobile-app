import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCategoriesThunk } from './categoryActions';

const useCategories = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.categories,
  );

  const fetchCategories = () => {
    dispatch(fetchCategoriesThunk());
  };

  return {
    categories: data,
    loading,
    error,
    fetchCategories,
  };
};

export default useCategories;
