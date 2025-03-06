import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":'https://qr-based-restaurant.vercel.app'
    }
  },
  plugins: [react(),
    tailwindcss()
  ],
})