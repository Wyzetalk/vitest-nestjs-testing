import { resolve } from 'path';
import swc from 'unplugin-swc';

/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    bail: 1,
    server: {
      deps: {
        fallbackCJS: true,
      },
    },
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      module: { type: 'es6' },
      jsc: {
        transform: {
          useDefineForClassFields: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      // Ensure Vitest correctly resolves TypeScript path aliases
      'src': resolve(__dirname, './src'),
    },
  },
});
