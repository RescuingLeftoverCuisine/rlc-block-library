import GridItemImageWithQuote from './GridItemImageWithQuote.svelte'
import { gridItemImageWithQuoteBaseData } from './GridItemImageWithQuote.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Grid Layout/Grid Item: Image With Quote',
  component: GridItemImageWithQuote,
}

export const Base = {
  args: mergeDataForStory(gridItemImageWithQuoteBaseData)
}
