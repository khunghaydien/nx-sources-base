# @org/api

Axios và React Query dùng chung cho **tất cả dự án** trong monorepo.

## Nội dung

- **createApi(config)** – tạo axios instance với timeout, headers mặc định và interceptors (request/response). Mỗi app gọi với `baseURL` từ env.
- **createQueryClient(options?)** – tạo QueryClient với staleTime, retry mặc định.
- **queryClient** – instance QueryClient mặc định.
- **AppQueryProvider** – component bọc `QueryClientProvider` với `queryClient` mặc định.

## Cài trong project

```json
"dependencies": {
  "@org/api": "*"
}
```

## Axios (createApi)

Mỗi app tạo instance với baseURL từ env, rồi export cho toàn app dùng:

```ts
// src/lib/api.ts (hoặc tương tự)
import { createApi } from '@org/api';

export const api = createApi({
  baseURL: import.meta.env?.VITE_API_BASE_URL ?? '/api',
});
```

Trong component: `import { api } from '@/lib/api';` rồi `api.get('/users')`, `api.post(...)`.

## React Query (AppQueryProvider + queryClient)

Ở root app:

```tsx
import { AppQueryProvider } from '@org/api';

root.render(
  <AppQueryProvider>
    <App />
  </AppQueryProvider>
);
```

Dùng `useQuery` / `useMutation` từ `@tanstack/react-query` như bình thường. Cần client riêng thì: `<AppQueryProvider client={myClient}>`.

Import `queryClient` khi cần (prefetch, invalidate): `import { queryClient } from '@org/api';`
