/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    setupFiles: ['./test/vitest.setup.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: 'test/coverage',
      exclude: [
        'node_modules',
        'dist',
        'build',
        'public',
        'src/components/ui/**',
        '**/*.d.ts',
        '**/*config*.{js,ts}',
      ]
    }
  },
});