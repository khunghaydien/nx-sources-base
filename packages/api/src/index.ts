/**
 * @org/api - Axios và React Query dùng chung cho tất cả dự án.
 */
export { createApi, type CreateApiConfig } from './createApi';
export {
  createQueryClient,
  queryClient,
} from './createQueryClient';
export { AppQueryProvider, type AppQueryProviderProps } from './AppQueryProvider';
