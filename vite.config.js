import pathTo from '@adaptably/to'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// --------------------------------------------

export default defineConfig({
  plugins: [
    svelte(),
  ],

  resolve: {
    alias: {
      '@': pathTo('./', { from: import.meta.url }),
    },
  },
})
