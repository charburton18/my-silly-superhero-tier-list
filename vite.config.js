import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.PRIVATE_API_KEY': JSON.stringify(env.PRIVATE_API_KEY),
      'process.env.PUBLIC_API_KEY': JSON.stringify(env.PUBLIC_API_KEY),
      'process.env.HASHED_KEY': JSON.stringify(env.HASHED_KEY)
    },
    plugins: [react()],
  }
})