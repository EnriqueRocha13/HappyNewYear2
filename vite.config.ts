import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HappyNewYear2/', // <-- IMPORTANTE: debe coincidir con el nombre de tu repositorio
  build: {
    outDir: 'dist'
  }
})