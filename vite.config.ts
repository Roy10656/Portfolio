import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  base: '/portfolio',  // Add this line with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
