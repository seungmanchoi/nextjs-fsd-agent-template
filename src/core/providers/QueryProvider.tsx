'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

interface IQueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: IQueryProviderProps) {
  const [client] = useState(() => queryClient);
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
