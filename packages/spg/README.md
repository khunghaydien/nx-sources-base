# @org/spg

React app với:

- **React** + **Vite**
- **Redux Toolkit** – store: `src/store/`, hooks: `useAppDispatch`, `useAppSelector` từ `src/store/hooks`
- **React Query** – dùng chung từ **@org/api** (`AppQueryProvider`, `queryClient`), dùng `useQuery`/`useMutation` từ `@tanstack/react-query`
- **Axios** – instance `api` từ **@org/api** qua `src/lib/api.ts` (baseURL từ `VITE_API_BASE_URL`)
- **Ant Design** – base components dùng chung từ **@org/ui** (package dùng cho mọi project trong monorepo)

## Chạy

```bash
nx serve spg
```

## Build

```bash
nx build spg
```

## Cấu trúc

- `src/store/` – Redux store và typed hooks
- `src/lib/api.ts` – tạo `api` từ `@org/api` với baseURL env (gọi HTTP dùng `api` từ đây)
- UI: `@org/ui`, API/Query: `@org/api` (dùng chung cho tất cả dự án)
