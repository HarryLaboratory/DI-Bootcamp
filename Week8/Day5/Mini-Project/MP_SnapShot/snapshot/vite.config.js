import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.pexels.com',  // Pexels API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // to remove '/api' from the request path
      },
    },
  },
});

