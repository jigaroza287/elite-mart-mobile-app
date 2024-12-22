export interface PinCodeCheckRequest {
  pinCode: string;
}

export interface PinCodeCheckResponse {
  isValid: boolean;
  message: string;
}

export interface PinCodeCheckState {
  loading: boolean;
  error?: string;
  pinCodeData?: PinCodeCheckResponse;
}
