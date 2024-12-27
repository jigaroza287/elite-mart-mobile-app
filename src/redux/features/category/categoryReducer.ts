import { Category } from '../home/homeTypes';
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './categoryActions';

interface CategoriesState {
  loading: boolean;
  data: Category[];
  error: string | null;
}

const initialState: CategoriesState = {
  loading: false,
  data: [],
  error: null,
};

const categoriesReducer = (
  state = initialState,
  action: any,
): CategoriesState => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
