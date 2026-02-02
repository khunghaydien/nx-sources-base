import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const libsRoot = path.resolve(import.meta.dirname, '../libs/src');

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/spg',
  resolve: {
    alias: {
      '@ui': path.resolve(libsRoot, 'ui'),
      '@api': path.resolve(libsRoot, 'api'),
      '@query': path.resolve(libsRoot, 'query'),
    },
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd', '@ant-design/icons'],
          tiptap: ['@tiptap/react', '@tiptap/starter-kit', '@tiptap/core', '@tiptap/extension-placeholder'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
