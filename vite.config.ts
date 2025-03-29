
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './projects/web-portal/src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    host: '::',
    port: 8080,
  },
}));
