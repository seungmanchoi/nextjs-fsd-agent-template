import { apiClient } from '@shared/api';
import type { ILoginRequest, ILoginResponse, ISignupRequest, ISignupResponse } from '../types';

export const login = async (params: ILoginRequest): Promise<ILoginResponse> => {
  const { data } = await apiClient.post('/auth/login', params);
  return data;
};

export const signup = async (params: ISignupRequest): Promise<ISignupResponse> => {
  const { data } = await apiClient.post('/auth/signup', params);
  return data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post('/auth/logout');
};
