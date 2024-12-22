import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { validatePinCodeThunk } from './pinCodeCheckActions';
import { PinCodeCheckRequest } from './pinCodeCheckTypes';

const usePinCodeCheck = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, pinCodeData } = useSelector(
    (state: RootState) => state.pinCodeCheck,
  );

  const validatePinCode = (requestParams: PinCodeCheckRequest) => {
    dispatch(validatePinCodeThunk(requestParams));
  };

  return { loading, error, pinCodeData, validatePinCode };
};

export default usePinCodeCheck;
