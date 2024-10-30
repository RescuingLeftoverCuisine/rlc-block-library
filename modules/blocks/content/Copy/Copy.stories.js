import Copy from './Copy.svelte'
import { copyWithAllSupportedElements } from './Copy.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Copy',
  component: Copy,
}

export const Base = {
  args: copyWithAllSupportedElements,
}

export const WithAlignmentCenter = {
  name: 'With: Alignment (Center)',

  args: mergeDataForStory(copyWithAllSupportedElements, {
    alignment: 'center',
  }),
}
