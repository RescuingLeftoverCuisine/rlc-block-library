import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import LeadCaptureForm from './LeadCaptureForm.svelte'
import { leadCaptureFormBaseData } from './LeadCaptureForm.data.js'

// --------------------------------------------

describe('Lead Capture Form Block', () => {
  it('renders with required data', () => {
    render(LeadCaptureForm, {
      props: leadCaptureFormBaseData,
    })
  })
})
