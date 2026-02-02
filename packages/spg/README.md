# @nx-sources-base/spg

React app với:

- **React** + **Vite**
- **Redux Toolkit** – store: `src/store/`, hooks: `useAppDispatch`, `useAppSelector` từ `src/store/hooks`
- **React Query** – dùng chung từ **@query** (`AppQueryProvider`, `queryClient`), dùng `useQuery`/`useMutation` từ `@tanstack/react-query`
- **Axios** – instance `api` từ **@api** (`createApi`) qua `src/lib/api.ts` (baseURL từ `VITE_API_BASE_URL`)
- **Ant Design** – base components dùng chung từ **@ui**

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
- `src/lib/api.ts` – tạo `api` từ `@api` (createApi) với baseURL env (gọi HTTP dùng `api` từ đây)
- Mọi thứ dùng chung: **@ui**, **@api**, **@query** (alias tới package libs)
