import { Dispatch } from 'redux';
import { fetchCategories } from './categoryAPI';
import { CategoriesResponse } from './categoryTypes';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});
export const fetchCategoriesSuccess = (Categories: CategoriesResponse) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: Categories,
});
export const fetchCategoriesFailure = (error: string) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategoriesThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const categoriesData = await fetchCategories();
    dispatch(fetchCategoriesSuccess(categoriesData));
  } catch (error: any) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};
