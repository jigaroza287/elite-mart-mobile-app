import { combineReducers } from 'redux';
import homeReducer from '../features/home/homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
