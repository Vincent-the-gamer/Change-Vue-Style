import { defineConfig, optimizeDeps } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  base: "./",
  build: {
    cssCodeSplit: true
  }
})
