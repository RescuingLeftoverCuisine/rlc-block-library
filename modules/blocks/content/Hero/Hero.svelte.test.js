import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/mergeProps.helper.js'
import { render } from '@testing-library/svelte'

import Hero from './Hero.svelte'
import { heroBaseData } from './Hero.data.js'

// --------------------------------------------

describe('Hero Block', () => {
  it('renders with required data', () => {
    render(Hero, {
      props: heroBaseData,
    })
  })

  it('renders the given heading', () => {
    const { getByRole } = render(Hero, mergeProps(heroBaseData, {
      heading: 'Test Heading',
    }))

    const headingElement = getByRole('heading', { name: 'Test Heading' })
    expect(headingElement).toBeInTheDocument()
  })

  it('renders the given image as a background image', () => {
    const { getByTitle } = render(Hero, mergeProps(heroBaseData, {
      image: {
        filename: 'test-image.jpg'
      }
    }))

    const backgroundElement = getByTitle('RLC Hero Background')

    // Include /m to convert to .webp.
    // Include 1600x0 to resize to a maximum width of 1600px.
    //
    // https://www.storyblok.com/docs/image-service#united-states
    expect(backgroundElement).toHaveStyle(`
      background-image: url("test-image.jpg/m/1600x0")
    `)
  })

  it('renders the given image as a background image with a focal point when a focal point is provided', () => {
    const { getByTitle } = render(Hero, mergeProps(heroBaseData, {
      image: {
        filename: 'test-image.jpg',
        focus: '4554x2261:4555x2262',
      }
    }))

    const backgroundElement = getByTitle('RLC Hero Background')

    // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
    expect(backgroundElement).toHaveStyle(`
      background-image: url("test-image.jpg/m/1600x0/filters:focal(4554x2261:4555x2262)")
    `)
  })

  it('renders the given image as a background image without a focal point when a focal point is provided but empty', () => {
    const { getByTitle } = render(Hero, mergeProps(heroBaseData, {
      image: {
        filename: 'test-image.jpg',
        focus: '',
      }
    }))

    const backgroundElement = getByTitle('RLC Hero Background')

    // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
    expect(backgroundElement).toHaveStyle(`
      background-image: url("test-image.jpg/m/1600x0")
    `)
  })
})
