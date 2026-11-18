import { fileURLToPath } from 'node:url'
import { verifyPicomatchMitigation } from './scripts/picomatch-mitigation.js'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Direct Vite invocations must also fail closed after an install with scripts disabled.
verifyPicomatchMitigation(fileURLToPath(new URL('.', import.meta.url)))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
