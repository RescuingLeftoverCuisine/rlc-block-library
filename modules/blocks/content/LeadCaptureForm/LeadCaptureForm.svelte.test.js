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

  it('includes the current URL in a hidden field', () => {
    const { container } = render(LeadCaptureForm, {
      props: leadCaptureFormBaseData,
    })

    expect(container.querySelector('input#Landing_Page_URL__c')).toHaveValue('http://localhost:3000/')
  })

  it('does not display the Company field by default', () => {
    const { container } = render(LeadCaptureForm, {
      props: leadCaptureFormBaseData,
    })

    expect(container.querySelector('input#company')).not.toBeInTheDocument()
  })

  it('displays the Company field when the Company field is enabled', () => {
    const { container } = render(LeadCaptureForm, mergeProps(leadCaptureFormBaseData, {
      showCompanyField: true,
    }))

    expect(container.querySelector('input#company')).toBeInTheDocument()
  })

  it('displays the heading when provided', () => {
    const { container } = render(LeadCaptureForm, mergeProps(leadCaptureFormBaseData, {
      heading: 'Test Heading',
    }))

    expect(container.querySelector('h2')).toHaveTextContent('Test Heading')
  })

  it('does not display heading when not provided', () => {
    const { container } = render(LeadCaptureForm, mergeProps(leadCaptureFormBaseData))

    expect(container.querySelector('h2')).not.toBeInTheDocument()
  })

  it('displays subtext when provided', () => {
    const { container } = render(LeadCaptureForm, mergeProps(leadCaptureFormBaseData, {
      subtext: 'Test Subtext',
    }))

    expect(container.querySelector('p')).toHaveTextContent('Test Subtext')
  })

  it('does not display subtext when not provided', () => {
    const { container } = render(LeadCaptureForm, mergeProps(leadCaptureFormBaseData))

    expect(container.querySelector('p')).not.toBeInTheDocument()
  })
})
