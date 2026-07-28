import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'practices/reusable-mega-navbar'),
  publicDir: resolve(__dirname, 'practices/reusable-mega-navbar/public'),
})
