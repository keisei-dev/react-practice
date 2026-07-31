import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Static server for the CDN + Babel toggle practice (no React plugin needed).
export default defineConfig({
  root: resolve(__dirname, 'practices/toggle-visibility'),
  server: {
    open: '/index.html',
  },
})
