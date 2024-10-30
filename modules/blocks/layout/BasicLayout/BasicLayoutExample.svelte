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
</script>

<BasicLayout { ...basicLayoutData }>
  <Image { ...imageData } />
  <Copy { ...copyData } />
</BasicLayout>
