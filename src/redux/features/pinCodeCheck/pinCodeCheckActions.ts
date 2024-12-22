import { Dispatch } from 'redux';
import { validatePinCode } from './pinCodeCheckAPI';
import { PinCodeCheckRequest, PinCodeCheckResponse } from './pinCodeCheckTypes';

export const VALIDATE_PIN_CODE_REQUEST = 'VALIDATE_PIN_CODE_REQUEST';
export const VALIDATE_PIN_CODE_SUCCESS = 'VALIDATE_PIN_CODE_SUCCESS';
export const VALIDATE_PIN_CODE_FAILURE = 'VALIDATE_PIN_CODE_FAILURE';

export const validatePinCodeRequest = (request: PinCodeCheckRequest) => ({
  type: VALIDATE_PIN_CODE_REQUEST,
  request,
});
export const validatePinCodeSuccess = (pinCodeData: PinCodeCheckResponse) => ({
  type: VALIDATE_PIN_CODE_SUCCESS,
  payload: pinCodeData,
});
export const validatePinCodeFailure = (error: string) => ({
  type: VALIDATE_PIN_CODE_FAILURE,
  payload: error,
});

export const validatePinCodeThunk =
  (requestParams: PinCodeCheckRequest) => async (dispatch: Dispatch) => {
    dispatch(validatePinCodeRequest(requestParams));
    try {
      const pinCodeData = await validatePinCode(requestParams);
      dispatch(validatePinCodeSuccess(pinCodeData));
    } catch (error: any) {
      dispatch(validatePinCodeFailure(error.message));
    }
  };
