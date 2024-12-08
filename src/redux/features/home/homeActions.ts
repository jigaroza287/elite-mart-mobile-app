import { Dispatch } from 'redux';
import { fetchHomeData } from './homeAPI';
import { HomeResponse } from './homeTypes';

export const FETCH_HOME_REQUEST = 'FETCH_HOME_REQUEST';
export const FETCH_HOME_SUCCESS = 'FETCH_HOME_SUCCESS';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';

export const fetchUsersRequest = () => ({ type: FETCH_HOME_REQUEST });
export const fetchUsersSuccess = (homeData: HomeResponse) => ({
  type: FETCH_HOME_SUCCESS,
  payload: homeData,
});
export const fetchUsersFailure = (error: string) => ({
  type: FETCH_HOME_FAILURE,
  payload: error,
});

export const fetchUsersThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const users = await fetchHomeData();
    dispatch(fetchUsersSuccess(users));
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message));
  }
};
