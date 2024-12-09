import { Dispatch } from 'redux';
import { fetchProducts } from './productAPI';
import { ProductListRequest, ProductListResponse } from './productTypes';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = (request: ProductListRequest) => ({
  type: FETCH_PRODUCTS_REQUEST,
  request,
});
export const fetchProductsSuccess = (products: ProductListResponse) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductsThunk =
  (requestParams: ProductListRequest) => async (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest(requestParams));
    try {
      const homeData = await fetchProducts(requestParams);
      dispatch(fetchProductsSuccess(homeData));
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
