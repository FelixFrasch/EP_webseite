import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages project sites are served from /<repo-name>/, not from the
  // domain root, so the build needs to know that subpath — but the local
  // dev server should still run at /.
  base: command === "build" ? "/EP_webseite/" : "/",
  plugins: [react()],
}))
