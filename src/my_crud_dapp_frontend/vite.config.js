import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  publicDir: "assets",
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    react(),
    nodePolyfills({
      globals: { Buffer: false }
    })
  ],
   define: { global: {} },
  resolve: {
    alias: [
      {
       declarations: path.resolve(__dirname, '../../../declarations'),
      },
    ],
    dedupe: ['@dfinity/agent'],
  },
});
