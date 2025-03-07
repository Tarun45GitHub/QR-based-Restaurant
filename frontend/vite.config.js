import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import dotenv from "dotenv"
dotenv.config({path:"./env"})


// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),
    tailwindcss()
  ],
})