import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Vercel은 루트(/)에서, GitHub Pages는 /SHOP/ 에서 서비스됨
  // Vercel 빌드 시 VERCEL=1 환경변수가 자동으로 설정됨
  base: process.env.VERCEL ? '/' : '/SHOP/'
})
