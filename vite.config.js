import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Visualizer: generates a bundle report to help with analysis
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // generates dist/bundle-visualizer.html after build
    visualizer({ filename: 'dist/bundle-visualizer.html', open: false })
    // Note: Compression is handled automatically by Netlify
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three') || id.includes('maath')) {
              return 'chunk-three';
            }
            if (id.includes('framer-motion')) {
              return 'chunk-framer';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'chunk-react';
            }
            if (id.includes('zustand')) return 'chunk-zustand';
            return 'chunk-vendor';
          }
        }
      }
    }
  }
})
