import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import TwoColumnLayout from './TwoColumnLayout.svelte'
import { twoColumnLayoutBaseData } from './TwoColumnLayout.data.js'

// --------------------------------------------

describe('Two Column Layout Block', () => {
  it('renders with required data', () => {
    render(TwoColumnLayout, {
      props: twoColumnLayoutBaseData,
    })
  })

  it('renders the given theme', () => {
    const { container } = render(TwoColumnLayout, mergeProps(twoColumnLayoutBaseData, {
      theme: 'blue',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block--layout--theme-blue')
  })

  it('renders the given column layout', () => {
    const { container } = render(TwoColumnLayout, mergeProps(twoColumnLayoutBaseData, {
      columnRatio: '1/3',
    }))

    const contentElement = container.querySelector('.rlc__block__two-column-layout__content')

    expect(contentElement).toHaveStyle({
      'grid-template-columns': '1fr 3fr'
    })
  })
})
