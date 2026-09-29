import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project-prototype/',
  server: {
    port: 3000,
    open: true
  }
})
