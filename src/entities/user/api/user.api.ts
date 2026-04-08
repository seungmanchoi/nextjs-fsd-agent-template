import { apiClient } from '@shared/api';
import type { IUser } from '../types';

export const getMe = async (): Promise<IUser> => {
  const { data } = await apiClient.get('/users/me');
  return data;
};

export const getUser = async (id: string): Promise<IUser> => {
  const { data } = await apiClient.get(`/users/${id}`);
  return data;
};
