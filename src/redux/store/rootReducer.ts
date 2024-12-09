import { combineReducers } from 'redux';
import homeReducer from '../features/home/homeReducer';
import productsReducer from '../features/product/productReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  products: productsReducer,
});

export default rootReducer;
