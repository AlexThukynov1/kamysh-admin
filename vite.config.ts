import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {} // Зазвичай Vite обробляє env-змінні через import.meta.env
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
