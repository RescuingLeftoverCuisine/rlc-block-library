import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'

import Copy from './Copy.svelte'

import {
  copyBaseData,
  copyWithAllSupportedElements,
  copyWithHeadings,
} from './Copy.data.js'

// --------------------------------------------

describe('Copy Block', () => {
  it('renders with required data', () => {
    render(Copy, {
      props: copyBaseData,
    })
  })

  it('renders headings', () => {
    const { getByRole } = render(Copy, {
      props: copyWithHeadings,
    })

    const headingOne = getByRole('heading', { name: 'Heading 1' })
    expect(headingOne.tagName).toBe('H1')

    const headingTwo = getByRole('heading', { name: 'Heading 2' })
    expect(headingTwo.tagName).toBe('H2')

    const headingThree = getByRole('heading', { name: 'Heading 3' })
    expect(headingThree.tagName).toBe('H3')

    const headingFour = getByRole('heading', { name: 'Heading 4' })
    expect(headingFour.tagName).toBe('H4')

    const headingFive = getByRole('heading', { name: 'Heading 5' })
    expect(headingFive.tagName).toBe('H5')

    const headingSix = getByRole('heading', { name: 'Heading 6' })
    expect(headingSix.tagName).toBe('H6')
  })

  it.skip('renders bold text within paragraphs')
  it.skip('renders italic text within paragraphs')
  it.skip('renders links within paragraphs')
  it.skip('renders bulleted lists')
})
