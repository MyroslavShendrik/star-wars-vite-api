import { defineConfig } from 'vite'
import glob from 'glob'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  base: '/star-wars-vite-api/',
  root: 'src',
   publicDir: '../public', //! ❗️❗️❗️ ВАЖЛИВО: для завантаження зображень на GitHub
  build: {
    rollupOptions: {
      input: glob.sync('./src/**/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
  ],
})
