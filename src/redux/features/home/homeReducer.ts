import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
} from './homeActions';
import { HomeResponse } from './homeTypes';

interface HomeState {
  loading: boolean;
  data?: HomeResponse;
  error: string | null;
}

const initialState: HomeState = {
  loading: false,
  data: undefined,
  error: null,
};

const homeReducer = (state = initialState, action: any): HomeState => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return { ...state, loading: true };
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
