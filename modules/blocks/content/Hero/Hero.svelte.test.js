import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
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
    const { container } = render(Hero, mergeProps(heroBaseData, {
      image: {
        filename: 'test-image.jpg'
      }
    }))

    const backgroundElement = container.querySelector('.rlc__block__hero__image')

    // Include /m to convert to .webp.
    // Include 1600x0 to resize to a maximum width of 1600px.
    //
    // https://www.storyblok.com/docs/image-service#united-states
    expect(backgroundElement).toHaveStyle(`
      background-image: url("test-image.jpg/m/1600x0")
    `)
  })

  it('renders with maximum height when a maximum height is provided', () => {
    const { container } = render(Hero, mergeProps(heroBaseData, {
      maximumHeight: '200'
    }))

    const block = container.querySelector('.rlc__block__hero')

    expect(block).toHaveStyle(`
      max-height: 200px
    `)
  })

  it('does not render with maximum height when a maximum height is not provided', () => {
    const { container } = render(Hero, mergeProps(heroBaseData))

    const block = container.querySelector('.rlc__block__hero')
    expect(getComputedStyle(block).maxHeight).to.eq('none')
  })
})
