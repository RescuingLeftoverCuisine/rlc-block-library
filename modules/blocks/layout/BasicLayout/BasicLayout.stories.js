import BasicLayoutExample from './BasicLayoutExample.svelte'
import { basicLayoutBaseData } from './BasicLayout.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Layout/Basic Layout',
  component: BasicLayoutExample,
}

export const Base = {
  args: mergeDataForStory(basicLayoutBaseData),
}

export const WithThemeBlue = {
  name: 'With: Theme (Blue)',

  args: mergeDataForStory(basicLayoutBaseData, {
    theme: 'blue',
  })
}

export const WithLayoutWidthMedium = {
  name: 'With: Layout Width (Medium) & Theme (Blue)',

  args: mergeDataForStory(basicLayoutBaseData, {
    layoutWidth: 'medium',
    theme: 'blue',
  })
}
