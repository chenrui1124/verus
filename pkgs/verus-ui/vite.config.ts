import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
/*
 * Vite
 */
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import uno from 'unocss/vite'
import dts from 'vite-plugin-dts'
/*
 * PostCSS
 */
import tw from 'tailwindcss'
/*
 * UnoCSS
 */
import { presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    vue({ script: { propsDestructure: true } }),
    jsx({ optimize: true }),
    uno({ presets: [presetIcons()] }),
    dts({
      staticImport: true,
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['components/**/*.ts'],
      exclude: ['vite.config.ts', 'tailwind.config.ts']
    })
  ],

  resolve: {
    alias: {
      '@verus-ui/common': fileURLToPath(new URL('./common/index.ts', import.meta.url)),
      '@verus-ui/components': fileURLToPath(new URL('./components/index.ts', import.meta.url)),
      '@verus-ui/css': fileURLToPath(new URL('./index.css', import.meta.url))
    }
  },

  css: {
    postcss: {
      plugins: [tw()]
    }
  },

  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'VerusUI',
      fileName: 'verus-ui',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: { globals: { vue: 'Vue', 'vue-router': 'VueRouter' } }
    }
  }
})
