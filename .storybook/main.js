export default {
  addons: [
    '@storybook/addon-essentials',
  ],

  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },

  stories: [
    '../**/*.mdx',
    '../**/*.stories.js',
  ],
}
