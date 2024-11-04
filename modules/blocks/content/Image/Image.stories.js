import Image from './Image.svelte'
import { imageBaseData } from './Image.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Image',
  component: Image,
}

export const Base = {
  args: mergeDataForStory(imageBaseData)
}

export const WithAlignmentCenter = {
  name: 'With: Alignment (Center)',

  args: mergeDataForStory(imageBaseData, {
    alignment: 'center',
    maximumWidth: '200px',
  })
}

export const WithAlignmentLeft = {
  name: 'With: Alignment (Left)',

  args: mergeDataForStory(imageBaseData, {
    alignment: 'left',
    maximumWidth: '200px',
  })
}

export const WithAspectRatio = {
  name: 'With: Aspect Ratio',

  args: mergeDataForStory(imageBaseData, {
    aspectRatio: '6/1',
  })
}

export const WithLink = {
  name: 'With: Link',

  args: mergeDataForStory(imageBaseData, {
    link: {
      url: 'https://google.com',
      target: '_blank'
    }
  })
}

export const WithMaximumWidth = {
  name: 'With: Maximum Width',

  args: mergeDataForStory(imageBaseData, {
    maximumWidth: '200px',
  })
}

export const WithMaximumHeight = {
  name: 'With: Maximum Height',

  args: mergeDataForStory(imageBaseData, {
    maximumHeight: '400px',
  })
}
