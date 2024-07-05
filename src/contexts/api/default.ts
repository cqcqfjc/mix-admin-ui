import axios, { AxiosResponse } from 'axios';
import { AuthResponse, IApiContext, IMenus, IResponse, LoginRequest, LoginResponse } from '@/types';
import { AccessTokenKey, RefreshTokenKey } from '@/consts.ts';

export const defaultApi = (baseUrl = import.meta.env.VITE_API_URL || '/api/'): IApiContext => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
  });

  /**
   * @description Refresh token
   */
  const handleRefreshToken = async (): Promise<IResponse<AuthResponse> | undefined> => {
    const refreshToken = localStorage.getItem(RefreshTokenKey);
    try {
      const response = await axiosInstance.post<IResponse<AuthResponse>>('/auth/refresh', { refreshToken });
      if (response.status === 200) {
        localStorage.setItem(AccessTokenKey, response.data.data.accessToken);
        localStorage.setItem(RefreshTokenKey, response.data.data.refreshToken);
        return response.data;
      }
    } catch (error) {
      throw new Error('Refresh token failed:' + error);
    }
  };

  /**
   * @description Request interceptor
   */
  axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(AccessTokenKey) || '';
    if (accessToken) {
      config.headers.setAuthorization(`Bearer ${ accessToken }`);
    }
    return config;
  });
  /**
   * @description Response interceptor
   */
  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, async (error) => {
    const refreshToken = localStorage.getItem(RefreshTokenKey);
    const originalRequest = error.config;
    // 刷新token重试
    if (error.response && error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;
      try {
        const refreshTokenResult = await handleRefreshToken();
        if (refreshTokenResult) {
          originalRequest.headers.Authorization = `Bearer ${ refreshTokenResult.data.accessToken }`;
        }
      } catch (e) {
        localStorage.removeItem(AccessTokenKey);
        localStorage.removeItem(RefreshTokenKey);
        console.error('Failed to refresh access token', e);
      }
      return axiosInstance(originalRequest);
    }
    return error;
  });

  /**
   * @description Api context
   */
  return {
    getMenus: async (): Promise<IResponse<IMenus[]>> => {
      const response: AxiosResponse<IResponse<IMenus[]>> = await axios.get(`menus`);
      return response.data;
    },
    login: async (request: LoginRequest): Promise<IResponse<LoginResponse>> => {
      const response: AxiosResponse<IResponse<LoginResponse>> = await axios.post(`login`, request);
      localStorage.setItem(AccessTokenKey, response.data.data.accessToken);
      localStorage.setItem(RefreshTokenKey, response.data.data.refreshToken);
      return response.data;
    },
    logout: async (): Promise<IResponse<void>> => {
      const response: AxiosResponse<IResponse<void>> = await axios.post(`logout`);
      localStorage.setItem(AccessTokenKey, '');
      localStorage.setItem(RefreshTokenKey, '');
      return response.data;
    },
    checkLogin: (): boolean => {
      const accessToken = localStorage.getItem(AccessTokenKey) || '';
      const refreshToken = localStorage.getItem(RefreshTokenKey) || '';
      return accessToken !== '' && refreshToken !== '';
    },
  };
};


