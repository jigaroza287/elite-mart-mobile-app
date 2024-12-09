import axiosInstance from '../../../api/axiosConfig';
import EndPoints from '../../../api/endPoints';
import { ProductListRequest, ProductListResponse } from './productTypes';

export const fetchProducts = async (
  params: ProductListRequest,
): Promise<ProductListResponse> => {
  try {
    const response = await axiosInstance.get<ProductListResponse>(
      EndPoints.getProducts,
      { params },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
