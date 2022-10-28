import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
import dns from 'dns'


dotenv.config();
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT as unknown as number || 5173
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.TEST': `"${process.env.TEST}"`,
    'process.env.REACT_APP_GOOGLE_CLIENT_ID': `"${process.env.REACT_APP_GOOGLE_CLIENT_ID}"`,
  }
})
