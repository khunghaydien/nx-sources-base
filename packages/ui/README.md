# @org/ui

Base components dùng chung cho **tất cả dự án** trong monorepo.

Re-export Ant Design (Button, Input, Form, Layout, Menu, Card, Table, Modal, ConfigProvider, …) và **AppConfigProvider** (ConfigProvider antd với theme mặc định). Các app **không** import từ `antd` trực tiếp mà import từ `@org/ui`.

## AppConfigProvider (dùng chung)

Component bọc antd `ConfigProvider` với theme mặc định (colorPrimary, borderRadius). Dùng ở root app thay vì `ConfigProvider` của antd:

```tsx
import { AppConfigProvider } from '@org/ui';

root.render(
  <AppConfigProvider>
    <App />
  </AppConfigProvider>
);
```

Ghi đè theme nếu cần: `<AppConfigProvider theme={{ token: { colorPrimary: '#xxx' } }}>`

## Cài trong project

Trong `package.json` của app:

```json
"dependencies": {
  "@org/ui": "*"
}
```

## Dùng trong code

```tsx
import { Button, Layout, Menu, ConfigProvider } from '@org/ui';

// Dùng như component Ant Design bình thường
<Button type="primary">Click</Button>
```

Package được build ra `dist/`. App cần build @org/ui trước (Nx tự build dependency). Không cần alias Vite.

## Thêm component mới

Sửa `packages/ui/src/index.ts`: thêm export từ `antd` hoặc export wrapper component của bạn.
