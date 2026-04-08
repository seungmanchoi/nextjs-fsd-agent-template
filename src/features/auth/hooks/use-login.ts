import { useMutation } from '@tanstack/react-query';
import { login } from '../api';
import type { ILoginRequest } from '../types';

export const useLogin = () => {
  return useMutation({
    mutationFn: (params: ILoginRequest) => login(params),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
};
