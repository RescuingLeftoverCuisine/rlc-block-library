import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import Image from './Image.svelte'
import { imageBaseData } from './Image.data.js'

// --------------------------------------------

describe('Image Block', () => {
  it('renders with required data', () => {
    render(Image, {
      props: imageBaseData,
    })
  })

  it('renders the given image', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      image: {
        filename: 'test-image.jpg'
      }
    }))

    const imageElement = getByRole('img')

    // Include /m to convert to .webp.
    //
    // https://www.storyblok.com/docs/image-service#united-states
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg/m')
  })

  it('adds the alignment modifier class based on given alignment', () => {
    const { container } = render(Image, mergeProps(imageBaseData, {
      alignment: 'center',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block__image--alignment-center')
  })

  it('renders the given image with a focal point when a focal point is provided', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      image: {
        filename: 'test-image.jpg',
        focus: '4554x2261:4555x2262',
      }
    }))

    const imageElement = getByRole('img')

    // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg/m/filters:focal(4554x2261:4555x2262)')
  })

  it('renders the given image with an aspect ratio when an aspect ratio is provided', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      aspectRatio: '1/2',
    }))

    const imageElement = getByRole('img')
    expect(imageElement).toHaveStyle({ aspectRatio: '1/2' })
  })

  it('renders the given image with a maximum width when a maximum width is provided', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      maximumWidth: '200px',
    }))

    const imageElement = getByRole('img')
    expect(imageElement).toHaveStyle({ maxWidth: '200px' })
  })

  it('renders the given image with a maximum height when a maximum height is provided', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      maximumHeight: '400px',
    }))

    const imageElement = getByRole('img')
    expect(imageElement).toHaveStyle({ maxHeight: '400px' })
  })

  it('renders the given image with all options when all options are provided', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      aspectRatio: '1/2',
      maximumHeight: '400px',
      maximumWidth: '200px',
    }))

    const imageElement = getByRole('img')

    expect(imageElement).toHaveStyle({
      aspectRatio: '1/2',
      maxHeight: '400px',
      maxWidth: '200px',
    })
  })
})
