<script>
  export let data

  import { mergeDataForStory } from '@/tests/support/merge.helper.js'

  import BasicLayout from './BasicLayout.svelte'
  import { basicLayoutBaseData } from './BasicLayout.data.js'
  const basicLayoutData = mergeDataForStory(basicLayoutBaseData, data)

  import Copy from '@Content/Copy/Copy.svelte'
  import { copyWithAllSupportedElements } from '@Content/Copy/Copy.data.js'
  const copyData = mergeDataForStory(copyWithAllSupportedElements, {})

  import Image from '@Content/Image/Image.svelte'
  import { imageBaseData } from '@Content/Image/Image.data.js'

  const imageData = mergeDataForStory(imageBaseData, {
    maximumHeight: '400px'
  });

  import Button from '@Content/Button/Button.svelte'
  import { buttonBaseData } from '@Content/Button/Button.data.js'
  const buttonData = mergeDataForStory(buttonBaseData)

  import LeadCaptureForm from '@Content/LeadCaptureForm/LeadCaptureForm.svelte'
  import { leadCaptureFormBaseData } from '@Content/LeadCaptureForm/LeadCaptureForm.data.js'
  const leadCaptureFormData = mergeDataForStory(leadCaptureFormBaseData, {
    heading: 'Lorem Ipsum',
    subtext: 'Lorem ipsum dolor sit amet.',
  })

  import Video from '@Content/Video/Video.svelte'
  import { videoBaseData } from '@Content/Video/Video.data.js'
  const videoData = mergeDataForStory(videoBaseData)
</script>

<BasicLayout { ...basicLayoutData }>
  <Image { ...imageData } />
  <Copy { ...copyData } />
  <Image { ...imageData } />
  <Copy { ...copyData } />
  <Button { ...buttonData } />
  <LeadCaptureForm { ...leadCaptureFormData } />
  <Video { ...videoBaseData } />
</BasicLayout>
