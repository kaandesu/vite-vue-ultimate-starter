import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import { visualizer } from 'rollup-plugin-visualizer'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      Inspect({
        build: true,
        outputDir: '.vite-inspect'
      }),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        open: false,
        template: 'sunburst',
        filename: '.rollup-inspect/index.html'
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'kaandesu/vite-template',
          short_name: 'kaandesu/vite-template',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          navigateFallback: '/',
          cleanupOutdatedCaches: false
        },
        // client: {
        //   installPrompt: true,
        //   periodicSyncForUpdates: 20
        // },
        devOptions: {
          enabled: true,
          type: 'module'
        }
      })
    ],
    reporter: [['html', { open: 'never' }]],
    resolve: {
      extensions: [
        '.spec.ts',
        '.test.ts',
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
        '.scss'
      ],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
