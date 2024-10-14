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
      // 16px @ 320px - 18px @ 1280px
      base: [ 'clamp(1.000rem, 0.958rem + 0.208vw, 1.125rem)', {
         /* 23px @ 320px - 26px @ 1280px */
        lineHeight: 'clamp(1.438rem, 1.375rem + 0.313vw, 1.625rem)',
      } ],

      // 18px @ 320px - 24px @ 1280px
      lg: [ 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)', {
         /* 26px @ 320px - 32px @ 1280px */
        lineHeight: 'clamp(1.625rem, 1.500rem + 0.625vw, 2.000rem)',
      } ],

      // 24px @ 320px - 32px @ 1280px
      xl: [ 'clamp(1.5rem, 1.333rem + 0.833vw, 2rem)', {
         /* 34px @ 320px - 42px @ 1280px */
        lineHeight: 'clamp(2.125rem, 1.958rem + 0.833vw, 2.625rem)',
      } ],

      // 26px @ 380px - 38px @ 1280px
      '2xl': [ 'clamp(1.625rem, 1.375rem + 1.250vw, 2.375rem)', {
        /* 37px @ 320px - 48px @ 1280px */
        lineHeight: 'clamp(2.313rem, 2.083rem + 1.146vw, 3.000rem)',
      } ],

      /* 28px @ 320px - 48px @ 1280px */
      '3xl': [ 'clamp(1.750rem, 1.333rem + 2.083vw, 3.000rem)', {
        /* 41px @ 320px - 57px @ 1280px */
        lineHeight: 'clamp(2.563rem, 2.229rem + 1.667vw, 3.563rem)',
      } ],

      // 32px @ 320px - 62px @ 1280px
      '4xl': [ 'clamp(2.000rem, 1.375rem + 3.125vw, 3.875rem)', {
        /* 45px @ 320px - 70px @ 1280px */
        lineHeight: 'clamp(2.813rem, 2.292rem + 2.604vw, 4.375rem)',
      } ],

      // 42px @ 320px - 76px @ 1280px
      '5xl': [ 'clamp(2.625rem, 1.917rem + 3.542vw, 4.750rem)', {
        /* 58px @ 320px - 88px @ 1280px */
        lineHeight: 'clamp(3.625rem, 3.000rem + 3.125vw, 5.500rem)',
      } ],
    },
  },
}
