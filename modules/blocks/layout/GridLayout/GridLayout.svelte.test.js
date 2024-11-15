import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import GridLayout from './GridLayout.svelte'
import { gridLayoutBaseData } from './GridLayout.data.js'

// --------------------------------------------

describe('Grid Layout Block', () => {
  it('renders with required data', () => {
    render(GridLayout, {
      props: gridLayoutBaseData,
    })
  })

  it('renders the given theme', () => {
    const { container } = render(GridLayout, mergeProps(gridLayoutBaseData, {
      theme: 'blue',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block--layout--theme-blue')
  })
})
