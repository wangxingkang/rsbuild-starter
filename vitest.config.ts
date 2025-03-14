import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: [
      resolve(__dirname, 'test/setup.ts')
    ],
    reporters: 'dot',
  }
})
