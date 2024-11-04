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
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg/m/1600x0/')
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
        filename: 'https://a-us.storyblok.com/f/1021986/5330x3543/9ac72b7177/rlc-hero-example.jpg',
        focus: '4554x2261:4555x2262',
      }
    }))

    const imageElement = getByRole('img')

    // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
    expect(imageElement).toHaveAttribute('src', 'https://a-us.storyblok.com/f/1021986/5330x3543/9ac72b7177/rlc-hero-example.jpg/m/1600x0/filters:focal(4554x2261:4555x2262)')

    expect(imageElement).toHaveStyle({
      'object-position': '85% 64%'
    })

    expect(imageElement.style._importants['object-position']).toEqual('important')
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

  it('renders the given image with all display options when all display options are provided', () => {
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

  it('renders the given alt text and title', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      image: {
        ...imageBaseData.data.image,
        alt: 'Test Alt',
        title: 'Test Title',
      }
    }))

    const imageElement = getByRole('img')

    expect(imageElement).toHaveAttribute('alt', 'Test Alt')
    expect(imageElement).toHaveAttribute('title', 'Test Title')
  })

  it('renders the given link with all attributes', () => {
    const { getByRole } = render(Image, mergeProps(imageBaseData, {
      aspectRatio: '1/2',
      maximumHeight: '400px',
      maximumWidth: '200px',

      image: {
        ...imageBaseData.data.image,
        alt: 'Test Alt',
        title: 'Test Title',
        filename: 'test-image.png',
      },

      link: {
        url: 'test-url.com',
        target: '_self',
      }
    }))

    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'test-url.com')

    const imageElement = linkElement.querySelector('img')
    expect(imageElement).toHaveAttribute('src', 'test-image.png/m/1600x0/')
    expect(imageElement).toHaveAttribute('alt', 'Test Alt')
    expect(imageElement).toHaveAttribute('title', 'Test Title')

    expect(imageElement).toHaveStyle({
      aspectRatio: '1/2',
      maxHeight: '400px',
      maxWidth: '200px',
    })
  })
})
