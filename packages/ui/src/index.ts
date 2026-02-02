/**
 * @org/ui - Base components dùng chung cho tất cả dự án trong monorepo.
 * Re-export Ant Design components để design system thống nhất.
 * Các app import từ '@org/ui' thay vì 'antd' trực tiếp.
 */
export { AppConfigProvider } from './AppConfigProvider';
export type { AppConfigProviderProps } from './AppConfigProvider';

export {
  Button,
  Input,
  Form,
  Layout,
  Menu,
  Card,
  Table,
  Modal,
  message,
  ConfigProvider,
  type FormProps,
  type TableProps,
} from 'antd';

import { Layout as AntLayout } from 'antd';
export const { Header, Content, Sider } = AntLayout;
