import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const babelPracticePattern =
  /^\/practices\/(reusable-card|toggle-visibility|fruits-search)\/.*\.jsx(?:\?.*)?$/

// Serve Babel-in-browser practices as raw JSX so CDN babel-standalone can compile them.
function rawBabelJsx() {
  return {
    name: 'raw-babel-jsx',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? ''
        if (!babelPracticePattern.test(url)) {
          next()
          return
        }

        const filePath = resolve(__dirname, url.split('?')[0].slice(1))
        if (!existsSync(filePath)) {
          next()
          return
        }

        res.setHeader('Content-Type', 'text/plain')
        res.end(readFileSync(filePath, 'utf8'))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), rawBabelJsx()],
  publicDir: resolve(__dirname, 'practices/reusable-mega-navbar/public'),
  appType: 'mpa',
  server: {
    open: '/',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        navbar: resolve(__dirname, 'practices/reusable-mega-navbar/index.html'),
        card: resolve(__dirname, 'practices/reusable-card/index.html'),
        toggle: resolve(__dirname, 'practices/toggle-visibility/index.html'),
        fruits: resolve(__dirname, 'practices/fruits-search/index.html'),
        quiz: resolve(__dirname, 'practices/quiz-app/index.html'),
      },
    },
  },
})
