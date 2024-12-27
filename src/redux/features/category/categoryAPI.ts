import axiosInstance from '../../../api/axiosConfig';
import EndPoints from '../../../api/endPoints';
import { CategoriesResponse } from './categoryTypes';

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  try {
    const response = await axiosInstance.get<CategoriesResponse>(
      EndPoints.getCategories,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
