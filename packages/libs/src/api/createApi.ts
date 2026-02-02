import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface CreateApiConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

const DEFAULT_CONFIG: CreateApiConfig = {
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Tạo axios instance dùng chung cho tất cả dự án.
 * Mỗi app gọi với baseURL (vd: import.meta.env.VITE_API_BASE_URL ?? '/api').
 */
export function createApi(config: CreateApiConfig = {}): AxiosInstance {
  const merged = { ...DEFAULT_CONFIG, ...config };
  const instance = axios.create({
    baseURL: merged.baseURL,
    timeout: merged.timeout,
    headers: merged.headers,
  });

  instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    // Thêm auth token, tenant, ... tại đây nếu cần
    return req;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Xử lý lỗi chung (401 redirect, toast, ...)
      return Promise.reject(error);
    }
  );

  return instance;
}
