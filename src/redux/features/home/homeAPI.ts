import axiosInstance from '../../../api/axiosConfig';
import EndPoints from '../../../api/endPoints';
import { HomeResponse } from './homeTypes';

export const fetchHomeData = async (): Promise<HomeResponse> => {
  try {
    const response = await axiosInstance.get<HomeResponse>(
      EndPoints.getHomeData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
