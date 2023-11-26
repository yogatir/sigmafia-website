import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    proxy: {}
  },
  plugins: [vue(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    publicPath: './'
  }
})
