import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();


export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT as unknown as number || 3000,
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.TEST': `"${process.env.TEST}"`,
  }
})
