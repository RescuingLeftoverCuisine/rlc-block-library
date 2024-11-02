import Button from './Button.svelte'
import { buttonBaseData } from './Button.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Button',
  component: Button,
}

export const Base = {
  args: mergeDataForStory(buttonBaseData)
}

export const WithAlignmentCenter = {
  name: 'With: Alignment (Center)',

  args: mergeDataForStory(buttonBaseData, {
    alignment: 'center',
  })
}

export const WithThemeDeep = {
  name: 'With: Theme (Deep)',

  args: mergeDataForStory(buttonBaseData, {
    theme: 'deep',
  })
}

export const WithThemeSun = {
  name: 'With: Theme (Sun)',

  args: mergeDataForStory(buttonBaseData, {
    theme: 'sun',
  })
}
