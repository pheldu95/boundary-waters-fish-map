import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mkcert()
  ],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://php', // Use the service name from docker-compose.yml
        changeOrigin: true,
        secure: false,
      }
    }
  }
})