import monkey from 'vite-plugin-monkey'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import legacyPlugin from '@vitejs/plugin-legacy'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

export default defineConfig({
  plugins: [
    vue(),
    legacyPlugin({
      targets: ['defaults', 'ie >= 11', 'chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      renderModernChunks: false,
    }),
    tailwindcss(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'wenxig/eh-login',
        match: ['*://e-hentai.org/*', '*://exhentai.org/*'],
        description: 'https://github.com/wenxig/delta-comic',
        author: 'wenxig',
        version: '0.0.1'
      },
    }),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('> 1%, last 2 versions, not ie <= 8'))
    }
  },
  base: "/",
})
