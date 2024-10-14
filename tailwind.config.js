import tailwindThemeData from './tailwind.theme.js'

// --------------------------------------------

export default {
  plugins: [],
  theme: tailwindThemeData,

  content: [
    './modules/**/*.{mdx,svelte}',
  ],

  corePlugins: {
    // Don't use a global CSS reset because we might
    // be integrating into a project with global CSS.
    preflight: false,
  },

  // Use a prefix since we might be integrating into
  // a project with global CSS.
  prefix: 'rlc-',

  // Make utility classes !important since we use a block-specific
  // CSS reset.
  important: true,
}
