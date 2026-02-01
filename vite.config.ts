import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 'base' set to './' ensures assets load correctly on GitHub Pages 
  // regardless of the repository name (e.g. username.github.io/repo-name/)
  base: './',
  build: {
    outDir: 'dist',
  }
});