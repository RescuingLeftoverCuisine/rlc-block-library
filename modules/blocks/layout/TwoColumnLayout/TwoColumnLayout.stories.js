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

export const WithThemeDarkGray = {
  name: 'With: Theme (Dark Gray)',

  args: mergeDataForStory(twoColumnLayoutBaseData, {
    theme: 'dark-gray',
  })
}

export const WithThemeNearShore = {
  name: 'With: Theme (Near Shore)',

  args: mergeDataForStory(twoColumnLayoutBaseData, {
    theme: 'near-shore',
  })
}

export const WithColumnRatio1To2 = {
  name: 'With: Column Ratio (1/2)',

  args: mergeDataForStory(twoColumnLayoutBaseData, {
    columnRatio: '1/2',
  })
}
