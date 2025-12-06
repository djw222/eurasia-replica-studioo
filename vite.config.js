import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eurasia-replica-studioo/', // <-- THIS MUST MATCH YOUR REPO NAME
})
