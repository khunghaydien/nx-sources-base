import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { queryClient } from './createQueryClient';

export interface AppQueryProviderProps {
  children: ReactNode;
  /** Dùng client khác nếu cần (mặc định dùng queryClient chung). */
  client?: QueryClient;
}

/**
 * QueryClientProvider dùng chung cho tất cả dự án.
 * Bọc app với QueryClient mặc định.
 */
export function AppQueryProvider({ children, client }: AppQueryProviderProps) {
  return (
    <QueryClientProvider client={client ?? queryClient}>
      {children}
    </QueryClientProvider>
  );
}
