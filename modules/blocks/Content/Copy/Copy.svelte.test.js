import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'

import Copy from './Copy.svelte'

// --------------------------------------------

describe('Copy Block', () => {
  it('contains copy', () => {
    const { getByText } = render(Copy)
    expect(getByText('Bold Text')).toBeInTheDocument()
  })
})
