import GridItemImageWithText from './GridItemImageWithText.svelte'
import { gridItemImageWithTextBaseData } from './GridItemImageWithText.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Grid Layout/Grid Item: Image With Text',
  component: GridItemImageWithText,
}

export const Base = {
  args: mergeDataForStory(gridItemImageWithTextBaseData)
}
