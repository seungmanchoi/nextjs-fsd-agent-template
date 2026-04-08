'use client';

import type { ReactNode } from 'react';
import { QueryProvider } from './QueryProvider';

interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
