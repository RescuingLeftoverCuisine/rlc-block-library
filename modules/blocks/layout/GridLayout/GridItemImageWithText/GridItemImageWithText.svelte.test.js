import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import GridItemImageWithText from './GridItemImageWithText.svelte'
import { gridItemImageWithTextBaseData } from './GridItemImageWithText.data.js'

// --------------------------------------------

describe('Grid Item: Image With Text Block', () => {
  it('renders with required data', () => {
    render(GridItemImageWithText, {
      props: gridItemImageWithTextBaseData,
    })
  })

  it('renders the given image', () => {
    const { getByRole } = render(GridItemImageWithText, mergeProps(gridItemImageWithTextBaseData, {
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
    const { getByRole } = render(GridItemImageWithText, mergeProps(gridItemImageWithTextBaseData, {
      image: {
        ...gridItemImageWithTextBaseData.data.image,
        alt: 'Test Alt',
        title: 'Test Title',
      }
    }))

    const imageElement = getByRole('img')

    expect(imageElement).toHaveAttribute('alt', 'Test Alt')
    expect(imageElement).toHaveAttribute('title', 'Test Title')
  })

  it('renders the given text', () => {
    const { container } = render(GridItemImageWithText, mergeProps(gridItemImageWithTextBaseData, {
      text: 'Test Text'
    }))
  })
})
