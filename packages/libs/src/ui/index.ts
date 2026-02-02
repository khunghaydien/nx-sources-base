/**
 * @ui - Components UI dùng chung (Ant Design + ConfigProvider, Breadcrumbs, ErrorBoundary, NotFound, StatusTag, TiptapEditor).
 */
export { ConfigProvider, type ConfigProviderProps } from './ConfigProvider';

export { Breadcrumbs } from './Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs';

export { ErrorBoundary } from './ErrorBoundary';
export type { ErrorBoundaryProps } from './ErrorBoundary';

export { default as NotFound } from './NotFound/NotFound';
export type { NotFoundProps } from './NotFound/NotFound';

export { StatusTag } from './StatusTag';
export type { StatusTagProps } from './StatusTag';

export { default as TiptapEditor } from './TiptapEditor';

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
    Result,
    type FormProps,
    type TableProps,
} from 'antd';

import { Layout as AntLayout } from 'antd';
export const { Header, Content, Sider } = AntLayout;
