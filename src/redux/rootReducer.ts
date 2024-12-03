import {combineReducers} from 'redux';
import accountReducer from './slices/accountSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  accounts: accountReducer,
  auth: authReducer,
});

export default rootReducer;
