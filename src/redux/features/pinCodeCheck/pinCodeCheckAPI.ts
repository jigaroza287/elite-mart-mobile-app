import axiosInstance from '../../../api/axiosConfig';
import EndPoints from '../../../api/endPoints';
import { PinCodeCheckRequest, PinCodeCheckResponse } from './pinCodeCheckTypes';

export const validatePinCode = async (
  params: PinCodeCheckRequest,
): Promise<PinCodeCheckResponse> => {
  try {
    const response = await axiosInstance.get<PinCodeCheckResponse>(
      EndPoints.validatePinCode,
      { params },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
