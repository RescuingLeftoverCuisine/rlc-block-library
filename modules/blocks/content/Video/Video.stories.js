import Video from './Video.svelte'
import { videoBaseData, videoVimeoData } from './Video.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Content/Video',
  component: Video,
}

export const Base = {
  args: mergeDataForStory(videoBaseData)
}

export const WithChannelVimeo = {
  name: 'With: Channel (Vimeo)',
  args: videoVimeoData,
}
