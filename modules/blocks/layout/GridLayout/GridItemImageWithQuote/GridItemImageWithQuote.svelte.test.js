import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import GridItemImageWithQuote from './GridItemImageWithQuote.svelte'
import { gridItemImageWithQuoteBaseData } from './GridItemImageWithQuote.data.js'

// --------------------------------------------

describe('Grid Item: Image With Quote Block', () => {
  it('renders with required data', () => {
    render(GridItemImageWithQuote, {
      props: gridItemImageWithQuoteBaseData,
    })
  })

  it('renders the given image', () => {
    const { getByRole } = render(GridItemImageWithQuote, mergeProps(gridItemImageWithQuoteBaseData, {
      image: {
        filename: 'test-image.jpg'
      }
    }))

    const imageElement = getByRole('img')

    // Include /m to convert to .webp.
    //
    // https://www.storyblok.com/docs/image-service#united-states
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg/m/300x300/')
  })

  it('renders the given alt text and title', () => {
    const { getByRole } = render(GridItemImageWithQuote, mergeProps(gridItemImageWithQuoteBaseData, {
      image: {
        ...gridItemImageWithQuoteBaseData.data.image,
        alt: 'Test Alt',
        title: 'Test Title',
      }
    }))

    const imageElement = getByRole('img')

    expect(imageElement).toHaveAttribute('alt', 'Test Alt')
    expect(imageElement).toHaveAttribute('title', 'Test Title')
  })

  it('renders the given quote', () => {
    const { container } = render(GridItemImageWithQuote, mergeProps(gridItemImageWithQuoteBaseData, {
      quote: 'Test Quote'
    }))

    const quoteElement = container.querySelector('.rlc__block__grid-item-partner__quote')

    expect(quoteElement).toHaveTextContent('Test Quote')
  })

  it('renders the given attribution', () => {
    const { container } = render(GridItemImageWithQuote, mergeProps(gridItemImageWithQuoteBaseData, {
      attribution: 'Test Attribution'
    }))

    const attributionElement = container.querySelector('.rlc__block__grid-item-partner__attribution')

    expect(attributionElement).toHaveTextContent('Test Attribution')
  })
})
