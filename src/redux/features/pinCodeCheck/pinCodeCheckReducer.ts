import {
  VALIDATE_PIN_CODE_FAILURE,
  VALIDATE_PIN_CODE_REQUEST,
  VALIDATE_PIN_CODE_SUCCESS,
} from './pinCodeCheckActions';
import { PinCodeCheckState } from './pinCodeCheckTypes';

const initialState: PinCodeCheckState = {
  loading: false,
  error: undefined,
  pinCodeData: undefined,
};

const pinCodeCheckReducer = (
  state = initialState,
  action: any,
): PinCodeCheckState => {
  switch (action.type) {
    case VALIDATE_PIN_CODE_REQUEST:
      return { ...state, loading: true, error: undefined };
    case VALIDATE_PIN_CODE_SUCCESS:
      return { ...state, loading: false, pinCodeData: action.payload };
    case VALIDATE_PIN_CODE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default pinCodeCheckReducer;
