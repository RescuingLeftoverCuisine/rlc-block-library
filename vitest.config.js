import pathTo from '@adaptably/to'
import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte()
  ],

  resolve: {
    alias: {
      '@': pathTo('./', { from: import.meta.url })
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
  },
})
