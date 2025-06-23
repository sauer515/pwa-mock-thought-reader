import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/pwa-mock-thought-reader/',
  plugins: [
        react(),
        VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'inline',
        strategies: 'injectManifest',
        srcDir: 'src',               
        filename: 'service-worker.ts',
        devOptions: {
            enabled: true,
            type: 'module',
        },
        manifest: {
            name: 'Mock Thought Reader',
            short_name: 'ThoughtReader',
            start_url: '.',
            display: 'standalone',
            background_color: '#000000',
            theme_color: '#0d0d0d',
            "icons": [
                { "src": "manifest-icon-192.maskable.png", "sizes": "192x192", "type": "image/png" },
                { "src": "manifest-icon-512.maskable.png", "sizes": "512x512", "type": "image/png" }
            ]   
            }
        })
  ],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
  }
});