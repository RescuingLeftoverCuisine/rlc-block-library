import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import Button from './Button.svelte'
import { buttonBaseData } from './Button.data.js'

// --------------------------------------------

describe('Button Block', () => {
  it('renders with required data', () => {
    render(Button, {
      props: buttonBaseData,
    })
  })

  it('renders the given alignment', () => {
    const { container } = render(Button, mergeProps(buttonBaseData, {
      alignment: 'center',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block__button--alignment-center')
  })

  it('renders the given theme', () => {
    const { getByRole } = render(Button, mergeProps(buttonBaseData, {
      theme: 'sun',
    }))

    expect(getByRole('link')).toHaveClass('rlc__button--theme-sun')
  })

  it('renders the given text', () => {
    const { getByRole } = render(Button, mergeProps(buttonBaseData, {
      text: 'Lorem Ipsum',
    }))

    expect(getByRole('link').textContent).toEqual('Lorem Ipsum')
  })

  it('renders the given link', () => {
    const { getByRole } = render(Button, mergeProps(buttonBaseData, {
      link: {
        url: 'link.org',
        target: '_blank',
      }
    }))

    expect(getByRole('link')).toHaveAttribute('href', 'link.org')
    expect(getByRole('link')).toHaveAttribute('target', '_blank')
  })
})
