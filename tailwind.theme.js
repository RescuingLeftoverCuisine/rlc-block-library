export default {
  fontFamily: {
    heading: [
      'Merriweather',
      'sans-serif'
    ],

    body: [
      'Lato',
      'sans-serif'
    ],
  },

  extend: {
    colors: {
      // Primary
      blue: '#36A5D8',
      white: '#FFFFFF',

      // Secondary
      'dark-gray': '#37393F',
      'near-shore': '#0476BC',
      black: '#000000',
      deep: '#043F75',

      // Accent
      seafoam: '#61D8A8',
      sun: '#F9BE70',
    },

    fontSize: {
      // 16px @ 320px - 20px @ 1280px
      base: [ 'clamp(1rem, 0.9167rem + 0.4167vw, 1.25rem)', {
         /* 22px @ 320px - 28px @ 1280px */
        lineHeight: 'clamp(1.375rem, 1.25rem + 0.625vw, 1.75rem)',
      } ],

      // 16px @ 320px - 24px @ 1280px
      lg: [ 'clamp(1rem, 0.8333rem + 0.8333vw, 1.5rem)', {
         /* 24px @ 320px - 32px @ 1280px */
        lineHeight: 'clamp(1.5rem, 1.3333rem + 0.8333vw, 2rem)',
      } ],

      // 16px @ 320px - 30px @ 1280px
      xl: [ 'clamp(1rem, 0.7083rem + 1.4583vw, 1.875rem)', {
         /* 24px @ 320px - 36px @ 1280px */
        lineHeight: 'clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)',
      } ],

      // 18px @ 380px - 36px @ 1280px
      '2xl': [ 'clamp(1.125rem, 0.75rem + 1.875vw, 2.25rem)', {
        /* 24px @ 320px - 40px @ 1280px */
        lineHeight: 'clamp(1.5rem, 1.1667rem + 1.6667vw, 2.5rem)',
      } ],

      /* 24px @ 320px - 42px @ 1280px */
      '3xl': [ 'clamp(1.5rem, 1rem + 2.5vw, 3rem)', {
        /* 32px @ 320px - 48px @ 1280px */
        lineHeight: 'clamp(2rem, 1.6667rem + 1.6667vw, 3rem)',
      } ],

      // 30px @ 320px - 60px @ 1280px
      '4xl': [ 'clamp(1.875rem, 1.25rem + 3.125vw, 3.75rem)', {
        /* 36px @ 320px - 60px @ 1280px */
        lineHeight: 'clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)',
      } ],

      // 36px @ 320px - 72px @ 1280px
      '5xl': [ 'clamp(2.25rem, 1.5rem + 3.75vw, 4.5rem)', {
        /* 40px @ 320px - 72px @ 1280px */
        lineHeight: 'clamp(2.5rem, 1.8333rem + 3.3333vw, 4.5rem)',
      } ],
    },
  },

  screens: {
    'tablet': '768px',
    'desktop-medium': '1280px',
    'desktop-wide': '1600px',
  },
}
