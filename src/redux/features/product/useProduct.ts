import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProductsThunk } from './productActions';
import { ProductListRequest } from './productTypes';

const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error, currentPage, totalPages } = useSelector(
    (state: RootState) => state.products,
  );

  const fetchProducts = (requestParams: ProductListRequest) => {
    dispatch(fetchProductsThunk(requestParams));
  };

  return {
    products: data,
    loading,
    error,
    fetchProducts,
    currentPage,
    totalPages,
  };
};

export default useProducts;
