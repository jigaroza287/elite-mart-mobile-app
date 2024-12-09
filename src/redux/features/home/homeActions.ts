import { Dispatch } from 'redux';
import { fetchHomeData } from './homeAPI';
import { HomeResponse } from './homeTypes';

export const FETCH_HOME_REQUEST = 'FETCH_HOME_REQUEST';
export const FETCH_HOME_SUCCESS = 'FETCH_HOME_SUCCESS';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';

export const fetchHomeDataRequest = () => ({ type: FETCH_HOME_REQUEST });
export const fetchHomeDataSuccess = (homeData: HomeResponse) => ({
  type: FETCH_HOME_SUCCESS,
  payload: homeData,
});
export const fetchHomeDataFailure = (error: string) => ({
  type: FETCH_HOME_FAILURE,
  payload: error,
});

export const fetchHomeDataThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchHomeDataRequest());
  try {
    const homeData = await fetchHomeData();
    dispatch(fetchHomeDataSuccess(homeData));
  } catch (error: any) {
    dispatch(fetchHomeDataFailure(error.message));
  }
};
