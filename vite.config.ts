import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE is set to "/wamucii/" for GitHub Pages builds; Vercel uses "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
});
