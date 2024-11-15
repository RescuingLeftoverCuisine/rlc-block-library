import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import GridItemPartner from './GridItemPartner.svelte'
import { gridItemPartnerBaseData } from './GridItemPartner.data.js'

// --------------------------------------------

describe('GridItemPartner Block', () => {
  it('renders with required data', () => {
    render(GridItemPartner, {
      props: gridItemPartnerBaseData,
    })
  })

  it('renders the given image', () => {
    const { getByRole } = render(GridItemPartner, mergeProps(gridItemPartnerBaseData, {
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
    const { getByRole } = render(GridItemPartner, mergeProps(gridItemPartnerBaseData, {
      image: {
        ...gridItemPartnerBaseData.data.image,
        alt: 'Test Alt',
        title: 'Test Title',
      }
    }))

    const imageElement = getByRole('img')

    expect(imageElement).toHaveAttribute('alt', 'Test Alt')
    expect(imageElement).toHaveAttribute('title', 'Test Title')
  })

  it('renders the given quote', () => {
    const { container } = render(GridItemPartner, mergeProps(gridItemPartnerBaseData, {
      quote: 'Test Quote'
    }))

    const quoteElement = container.querySelector('.rlc__block__grid-item-partner__quote')

    expect(quoteElement).toHaveTextContent('Test Quote')
  })

  it('renders the given attribution', () => {
    const { container } = render(GridItemPartner, mergeProps(gridItemPartnerBaseData, {
      attribution: 'Test Attribution'
    }))

    const attributionElement = container.querySelector('.rlc__block__grid-item-partner__attribution')

    expect(attributionElement).toHaveTextContent('Test Attribution')
  })
})
