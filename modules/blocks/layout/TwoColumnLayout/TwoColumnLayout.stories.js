import TwoColumnLayoutExample from './TwoColumnLayoutExample.svelte'
import { twoColumnLayoutBaseData } from './TwoColumnLayout.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Layout/Two Column Layout',
  component: TwoColumnLayoutExample,
}

export const Base = {
  args: mergeDataForStory(twoColumnLayoutBaseData),
}

export const WithThemeBlue = {
  name: 'With: Theme (Blue)',

  args: mergeDataForStory(twoColumnLayoutBaseData, {
    theme: 'blue',
  })
}

export const WithColumnRatio1To2 = {
  name: 'With: Column Ratio (1/2)',

  args: mergeDataForStory(twoColumnLayoutBaseData, {
    columnRatio: '1/2',
  })
}
