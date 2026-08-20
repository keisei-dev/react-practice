import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Static server for the CDN + Babel fruits search practice (no React plugin needed).
export default defineConfig({
  root: resolve(__dirname, 'practices/fruits-search'),
  server: {
    open: '/index.html',
  },
})
