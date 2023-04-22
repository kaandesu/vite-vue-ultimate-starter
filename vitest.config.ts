import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
import vue from '@vitejs/plugin-vue'
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue()],
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['**/*.test.ts', '**/*.spec.ts'],
      setupFiles: ['src/vitestSetup.ts'],
      includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts', '**/*.vue'],
      exclude: [...configDefaults.exclude, 'src/e2e/*']
    }
  })
)
