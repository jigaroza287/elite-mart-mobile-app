import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://192.168.1.4:3000/api/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    let errorMessage = 'An unexpected error occurred.';
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        errorMessage =
          (data as { message?: string }).message || 'Invalid request.';
      } else if (status === 401) {
        errorMessage = 'Unauthorized. Please login again.';
      } else if (status === 404) {
        errorMessage = 'Requested resource not found.';
      } else if (status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
    } else if (error.request) {
      errorMessage = 'No response from the server. Please check your network.';
    } else {
      errorMessage = error.message;
    }
    console.error('API Error:', errorMessage);
    return Promise.reject(new Error(errorMessage));
  },
);

export default axiosInstance;
