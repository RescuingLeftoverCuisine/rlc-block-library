import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render } from '@testing-library/svelte'

import Video from './Video.svelte'
import { videoBaseData } from './Video.data.js'

// --------------------------------------------

describe('Video Block', () => {
  it('renders with required data', () => {
    render(Video, {
      props: videoBaseData,
    })
  })

  it('renders only a YouTube video with YouTube channel', () => {
    const { container } = render(Video, mergeProps(videoBaseData, {
      channel: 'youtube',
      videoId: 'videoId',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement.getElementsByTagName('iframe').length).toEqual(1)
    expect(blockElement.querySelector('iframe')).toHaveAttribute('src', 'https://www.youtube.com/embed/videoId')
  })

  it('renders only a Vimeo video with Vimeo channel', () => {
    const { container } = render(Video, mergeProps(videoBaseData, {
      channel: 'vimeo',
      videoId: 'videoId',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement.getElementsByTagName('iframe').length).toEqual(1)
    expect(blockElement.querySelector('iframe')).toHaveAttribute('src', 'https://player.vimeo.com/video/videoId?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1/embed')
  })
})
