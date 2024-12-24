export interface PinCodeCheckRequest {
  pinCode: string;
}

export interface PinCodeCheckResponse {
  success: boolean;
  message: string;
}

export interface PinCodeCheckState {
  loading: boolean;
  error?: string;
  pinCodeData?: PinCodeCheckResponse;
}
