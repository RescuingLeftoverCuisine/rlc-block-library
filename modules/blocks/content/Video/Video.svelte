<script>
  export let data
</script>

<div
  class='rlc__block rlc__block__video rlc-aspect-video'
>
  { #if data.channel === 'youtube' }
    <iframe
      class='rlc-w-full rlc-h-full'
      src='https://www.youtube.com/embed/{ data.videoId }'
      title='YouTube Video Player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerpolicy='strict-origin-when-cross-origin'
      allowfullscreen
    ></iframe>
  { /if }

  { #if data.channel === 'vimeo' }
    <iframe
      class='rlc-w-full rlc-h-full'
      src='https://player.vimeo.com/video/{ data.videoId }?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1/embed'
      allow='autoplay; fullscreen; picture-in-picture'
      allowfullscreen
      frameborder='0'
    ></iframe>
  { /if }
</div>
