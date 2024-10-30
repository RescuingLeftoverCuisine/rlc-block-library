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
</script>

<TwoColumnLayout { ...twoColumnLayoutData }>
  <Image { ...imageData } />
  <Copy { ...copyData } />
</TwoColumnLayout>
