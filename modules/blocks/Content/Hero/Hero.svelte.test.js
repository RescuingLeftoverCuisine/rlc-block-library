import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'

import Hero from './Hero.svelte'
import { heroBaseData } from './Hero.data.js'
import { mergeProps } from '../../../../tests/support/mergeProps.helper.js'

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

    expect(backgroundElement).toHaveStyle(`
      background-image: url(test-image.jpg)
    `)
  })
})
