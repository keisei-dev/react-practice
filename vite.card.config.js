import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Static server for the CDN + Babel card practice (no React plugin needed).
export default defineConfig({
  root: resolve(__dirname, 'practices/reusable-card'),
  server: {
    open: '/index.html',
  },
})
