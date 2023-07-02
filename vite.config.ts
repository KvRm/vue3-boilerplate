import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import ImageMin from 'vite-plugin-imagemin'
import PurgeIcons from 'vite-plugin-purge-icons'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: '/',
  publicDir: 'public',
  server: {
    port: 3030,
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),

    Components({
      dirs: ['src/shared/components'],
      extensions: ['vue'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),

    PurgeIcons(),

    ImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 60,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
