import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
} from './homeActions';
import { HomeResponse } from './homeTypes';

interface HomeState {
  isSucceed: boolean;
  loading: boolean;
  data?: HomeResponse;
  error: string | null;
}

const initialState: HomeState = {
  isSucceed: false,
  loading: false,
  data: undefined,
  error: null,
};

const homeReducer = (state = initialState, action: any): HomeState => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return { ...state, loading: true, isSucceed: false };
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        isSucceed: true,
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSucceed: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
