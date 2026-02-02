import type { ReactNode } from 'react';
import { ConfigProvider as AntConfigProvider } from 'antd';

export interface ConfigProviderProps {
  children: ReactNode;
  /** Theme (giống antd ConfigProvider). Mặc định: colorPrimary, borderRadius. */
  theme?: Parameters<typeof AntConfigProvider>[0]['theme'];
}

const defaultTheme = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
  },
};

/**
 * ConfigProvider dùng chung – bọc antd ConfigProvider với theme mặc định.
 * API giống antd: theme, children, ...
 */
export function ConfigProvider({ children, theme }: ConfigProviderProps) {
  return (
    <AntConfigProvider theme={theme ?? defaultTheme}>
      {children}
    </AntConfigProvider>
  );
}
