import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uno from 'unocss/vite'
import tw from 'tailwindcss'
import { presetIcons } from 'unocss'

export default defineConfig({
  plugins: [vue(), uno({ presets: [presetIcons()] })],

  server: { port: 3000 },

  resolve: { alias: { '@doc': fileURLToPath(new URL('./src/*', import.meta.url)) } },

  css: { postcss: { plugins: [tw()] } }
})
