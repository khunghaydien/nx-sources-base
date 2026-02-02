# @nx-sources-base/libs

**UI** + **API (axios)** + **React Query** dùng chung cho tất cả dự án. Trong app dùng **alias ngắn** (đã cấu hình trong `tsconfig.base.json` + Vite):

- **`@ui`** – components (Ant Design, ConfigProvider, Breadcrumbs, ErrorBoundary, NotFound, StatusTag, TiptapEditor)
- **`@api`** – axios (createApi)
- **`@query`** – React Query (createQueryClient, queryClient, AppQueryProvider)

Ví dụ: `import { Button } from '@ui'`, `import { createApi } from '@api'`, `import { AppQueryProvider } from '@query'`.  
Package name trong `package.json` vẫn là `@nx-sources-base/libs`.

## @ui (components)

```tsx
import { Button, Layout, Breadcrumbs, ErrorBoundary, ConfigProvider } from '@ui';
```

## @api (axios)

Tạo axios instance với baseURL từ env:

```tsx
// src/lib/api.ts
import { createApi } from '@api';

export const api = createApi({
  baseURL: import.meta.env?.VITE_API_BASE_URL ?? '/api',
});
```

Trong component: `import { api } from '@/lib/api';` rồi `api.get('/users')`, `api.post(...)`.

## @query (React Query)

Ở root app:

```tsx
import { AppQueryProvider } from '@query';

root.render(
  <AppQueryProvider>
    <App />
  </AppQueryProvider>
);
```

Dùng `useQuery` / `useMutation` từ `@tanstack/react-query`. Cần `queryClient`: `import { queryClient } from '@query';`

## Breadcrumbs (trong ui)

Dùng Ant Design Breadcrumb. Có thể inject Link (react-router, next/link) qua `renderItem`:

```tsx
import { Breadcrumbs } from '@ui';
import { Link } from 'react-router-dom';

<Breadcrumbs
  items={[
    { label: 'Trang chủ', path: '/' },
    { label: 'Danh sách', path: '/list' },
    { label: 'Chi tiết' },
  ]}
  renderItem={(item, isLast) =>
    item.path && !isLast ? <Link to={item.path}>{item.label}</Link> : item.label
  }
/>
```

Không truyền `renderItem` thì dùng thẻ `<a href={path}>`.

## ErrorBoundary (trong ui)

Bắt lỗi render trong cây con, hiển thị fallback hoặc màn lỗi (Ant Design Result):

```tsx
import { ErrorBoundary } from '@ui';

<ErrorBoundary
  onError={(error, info) => console.error(error, info)}
  fallback={<div>Custom fallback</div>}  // optional
>
  <App />
</ErrorBoundary>
```

Bọc toàn app hoặc từng section. Không truyền `fallback` thì hiển thị màn "Đã xảy ra lỗi" + nút "Thử lại".

## ConfigProvider (trong ui)

Giống antd ConfigProvider – bọc app với theme mặc định (colorPrimary, borderRadius). Dùng ở root:

```tsx
import { ConfigProvider } from '@ui';

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
```

Ghi đè theme: `<ConfigProvider theme={{ token: { colorPrimary: '#xxx' } }}>`

## Cài trong project

Trong `package.json` của app:

```json
"dependencies": {
  "@nx-sources-base/libs": "*"
}
```

## Dùng trong code

```tsx
import { Button, Layout, Menu, ConfigProvider } from '@ui';

<Button type="primary">Click</Button>
```

Package được build ra `dist/`. App cần build libs trước (Nx tự build dependency). Alias `@ui`, `@api`, `@query` đã cấu hình trong `tsconfig.base.json` và Vite của app.

## Thêm component mới

Sửa `packages/libs/src/index.ts`: thêm export từ `antd` hoặc export wrapper component của bạn.
