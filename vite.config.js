import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eurasia-replica-studioo/', // <-- change this to your repo name, keep leading and trailing slashes
})
