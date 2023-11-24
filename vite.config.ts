import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
});
