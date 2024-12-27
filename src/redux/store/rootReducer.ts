import { combineReducers } from 'redux';
import categoriesReducer from '../features/category/categoryReducer';
import homeReducer from '../features/home/homeReducer';
import pinCodeCheckReducer from '../features/pinCodeCheck/pinCodeCheckReducer';
import productsReducer from '../features/product/productReducer';
import loadingReducer from '../slices/loadingSlice';

const rootReducer = combineReducers({
  loading: loadingReducer,
  home: homeReducer,
  categories: categoriesReducer,
  products: productsReducer,
  pinCodeCheck: pinCodeCheckReducer,
});

export default rootReducer;
