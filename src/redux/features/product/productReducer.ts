import { Product } from '../home/homeTypes';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from './productActions';
import { ProductListResponse } from './productTypes';

interface ProductsState {
  loading: boolean;
  data: Product[];
  error: string | null;
  currentPage: number;
  totalPages: number;
  productCount: number;
}

const initialState: ProductsState = {
  loading: false,
  data: [],
  error: null,
  currentPage: 1,
  totalPages: 0,
  productCount: 0,
};

const productsReducer = (state = initialState, action: any): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      const { data, currentPage, totalPages, productCount } = action.payload;
      const newData = currentPage === 1 ? data : [...state.data, ...data];
      return {
        ...state,
        loading: false,
        data: newData,
        error: null,
        currentPage: currentPage,
        totalPages: totalPages,
        productCount,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
