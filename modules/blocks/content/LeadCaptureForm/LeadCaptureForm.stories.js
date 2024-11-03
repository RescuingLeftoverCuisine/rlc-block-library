import LeadCaptureForm from './LeadCaptureForm.svelte'
import { leadCaptureFormBaseData } from './LeadCaptureForm.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Lead Capture Form',
  component: LeadCaptureForm,
}

export const Base = {
  args: mergeDataForStory(leadCaptureFormBaseData)
}
