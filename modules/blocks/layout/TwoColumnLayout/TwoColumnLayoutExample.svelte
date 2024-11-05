<script>
  export let data

  import { mergeDataForStory } from '@/tests/support/merge.helper.js'

  import TwoColumnLayout from './TwoColumnLayout.svelte'
  import { twoColumnLayoutBaseData } from './TwoColumnLayout.data.js'
  const twoColumnLayoutData = mergeDataForStory(twoColumnLayoutBaseData, data)

  import Copy from '@Content/Copy/Copy.svelte'
  import { copyWithAllSupportedElements } from '@Content/Copy/Copy.data.js'
  const copyData = mergeDataForStory(copyWithAllSupportedElements, {})

  import Image from '@Content/Image/Image.svelte'
  import { imageBaseData } from '@Content/Image/Image.data.js'
  const imageData = mergeDataForStory(imageBaseData)

  import Button from '@Content/Button/Button.svelte'
  import { buttonBaseData } from '@Content/Button/Button.data.js'
  const buttonData = mergeDataForStory(buttonBaseData)

  import LeadCaptureForm from '@Content/LeadCaptureForm/LeadCaptureForm.svelte'
  import { leadCaptureFormBaseData } from '@Content/LeadCaptureForm/LeadCaptureForm.data.js'
  const leadCaptureFormData = mergeDataForStory(leadCaptureFormBaseData)

  import Video from '@Content/Video/Video.svelte'
  import { videoBaseData } from '@Content/Video/Video.data.js'
  const videoData = mergeDataForStory(videoBaseData)
</script>

<TwoColumnLayout { ...twoColumnLayoutData }>
  <Image slot='column-left' { ...imageData } />
  <Copy slot='column-right' { ...copyData } />
</TwoColumnLayout>
