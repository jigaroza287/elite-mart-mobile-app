import { Product } from '../home/homeTypes';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from './productActions';

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
      const { data, meta } = action.payload;
      const newData = meta.currentPage === 1 ? data : [...state.data, ...data];
      return {
        ...state,
        loading: false,
        data: newData,
        error: null,
        currentPage: meta.currentPage,
        totalPages: meta.totalPages,
        productCount: meta.productCount,
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
