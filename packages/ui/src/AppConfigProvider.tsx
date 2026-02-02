import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

export interface AppConfigProviderProps {
  children: ReactNode;
  /** Ghi đè theme mặc định nếu cần */
  theme?: Parameters<typeof ConfigProvider>[0]['theme'];
}

const defaultTheme = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
  },
};

/**
 * ConfigProvider dùng chung cho tất cả dự án.
 * Bọc antd ConfigProvider với theme mặc định thống nhất.
 */
export function AppConfigProvider({ children, theme }: AppConfigProviderProps) {
  return (
    <ConfigProvider theme={theme ?? defaultTheme}>
      {children}
    </ConfigProvider>
  );
}
