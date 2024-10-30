import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import BasicLayout from './BasicLayout.svelte'
import { basicLayoutBaseData } from './BasicLayout.data.js'

// --------------------------------------------

describe('Basic Layout Block', () => {
  it('renders with required data', () => {
    render(BasicLayout, {
      props: basicLayoutBaseData,
    })
  })

  it('renders the given theme', () => {
    const { container } = render(BasicLayout, mergeProps(basicLayoutBaseData, {
      theme: 'blue',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block--layout--theme-blue')
  })

  it('renders the given layout width', () => {
    const { container } = render(BasicLayout, mergeProps(basicLayoutBaseData, {
      layoutWidth: 'medium',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block__basic-layout--layout-width-medium')
  })
})
