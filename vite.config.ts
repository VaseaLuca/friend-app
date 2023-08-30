import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "pages/": "/src/pages/",
      "shared/": "/src/shared/",
      "app/": "/src/app/",
      "entities/": "/src/entities/",
      "widgets/": "/src/widgets/",
      "features/": "/src/features/"
    }
  }
})
