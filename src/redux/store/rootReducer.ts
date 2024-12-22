import { combineReducers } from 'redux';
import homeReducer from '../features/home/homeReducer';
import productsReducer from '../features/product/productReducer';
import loadingReducer from '../slices/loadingSlice';

const rootReducer = combineReducers({
  loading: loadingReducer,
  home: homeReducer,
  products: productsReducer,
});

export default rootReducer;
