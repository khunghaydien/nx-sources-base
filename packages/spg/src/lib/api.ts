import { createApi } from '@api/createApi';

/** Axios instance cho app spg (baseURL từ env). */
export const api = createApi({
  baseURL: import.meta.env?.VITE_API_BASE_URL ?? '/api',
});
