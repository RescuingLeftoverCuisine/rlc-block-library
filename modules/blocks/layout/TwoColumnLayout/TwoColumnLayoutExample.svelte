<script>
  export let data

  import { mergeDataForStory } from '@/tests/support/merge.helper.js'

  import TwoColumnLayout from './TwoColumnLayout.svelte'
  import { twoColumnLayoutBaseData } from './TwoColumnLayout.data.js'
  const twoColumnLayoutData = mergeDataForStory(twoColumnLayoutBaseData, data)

  import Image from '@Content/Image/Image.svelte'
  import { imageBaseData } from '@Content/Image/Image.data.js'
  const imageData = mergeDataForStory(imageBaseData)

  import LeadCaptureForm from '@Content/LeadCaptureForm/LeadCaptureForm.svelte'
  import { leadCaptureFormBaseData } from '@Content/LeadCaptureForm/LeadCaptureForm.data.js'
  const leadCaptureFormData = mergeDataForStory(leadCaptureFormBaseData)

  import Copy from '@Content/Copy/Copy.svelte'
  import { copyWithHeadingAndText } from '@Content/Copy/Copy.data.js'
  const copyData = mergeDataForStory(copyWithHeadingAndText, {})
</script>

<TwoColumnLayout { ...twoColumnLayoutData }>
  <Image slot='column-left' { ...imageData } />
  <LeadCaptureForm slot='column-right' { ...leadCaptureFormBaseData } />
</TwoColumnLayout>

<TwoColumnLayout { ...twoColumnLayoutData }>
  <Copy slot='column-left' { ...copyData } />
  <Image slot='column-right' { ...imageData } />
</TwoColumnLayout>
