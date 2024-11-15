import GridItemPartner from './GridItemPartner.svelte'
import { gridItemPartnerBaseData } from './GridItemPartner.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Grid Layout/Grid Item: Partner',
  component: GridItemPartner,
}

export const Base = {
  args: mergeDataForStory(gridItemPartnerBaseData)
}
