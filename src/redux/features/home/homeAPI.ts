import axiosInstance from '../../../api/axiosConfig';
import { HomeResponse } from './homeTypes';

export const fetchHomeData = async (): Promise<HomeResponse> => {
  const response = await axiosInstance.get<HomeResponse>('home');
  return response.data;
};
