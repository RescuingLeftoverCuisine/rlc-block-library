import GridLayoutExample from './GridLayoutExample.svelte'
import { gridLayoutBaseData } from './GridLayout.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Layout/Grid Layout',
  component: GridLayoutExample,
}

export const WithGridItemImageWithQuote = {
  name: 'With: Grid Item (Image With Quote)',
  args: mergeDataForStory(gridLayoutBaseData),
}
