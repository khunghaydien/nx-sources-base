import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 60 * 1000,
    retry: 1,
  },
};

/**
 * Tạo QueryClient dùng chung cho tất cả dự án.
 * Có thể truyền options để ghi đè mặc định.
 */
export function createQueryClient(
  options?: ConstructorParameters<typeof QueryClient>[0]
): QueryClient {
  return new QueryClient({
    defaultOptions,
    ...options,
  });
}

/** QueryClient mặc định dùng chung (một instance cho toàn app). */
export const queryClient = createQueryClient();
