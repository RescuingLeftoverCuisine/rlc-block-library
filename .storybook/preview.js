import viewports from './preview.viewports.js'

// --------------------------------------------
// Include compiled block styles.

import '../build/main.min.css'

// --------------------------------------------

export default {
  parameters: {
    layout: 'fullscreen',

    backgrounds: {
      default: 'light',
    },

    viewport: {
      viewports,
      defaultViewport: 'desktop',
    },
  },
}
