import type { ReactNode } from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  /** Danh sách item: label + path (optional, item cuối thường không path). */
  items: BreadcrumbItem[];
  /**
   * Render từng link. Nếu không truyền, dùng thẻ <a href>.
   * Dự án dùng react-router: truyền (item) => <Link to={item.path}>{item.label}</Link>
   */
  renderItem?: (item: BreadcrumbItem, isLast: boolean) => ReactNode;
}

/**
 * Breadcrumbs dùng chung cho tất cả dự án.
 * Dùng Ant Design Breadcrumb, có thể inject Link (react-router, next/link, ...) qua renderItem.
 */
export function Breadcrumbs({ items, renderItem }: BreadcrumbsProps) {
  const breadcrumbItems = items.map((item, index) => {
    const isLast = index === items.length - 1;
    const title =
      renderItem?.(item, isLast) ??
      (item.path && !isLast ? (
        <a href={item.path}>{item.label}</a>
      ) : (
        item.label
      ));
    return { key: item.path ?? item.label ?? index, title };
  });

  return (
    <AntBreadcrumb
      items={breadcrumbItems}
      className="[&_.ant-breadcrumb-link]:!text-[var(--color-text-secondary)] [&_.ant-breadcrumb-link:last-child]:!text-[var(--color-text)]"
    />
  );
}
