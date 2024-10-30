<script>
  export let data

  const imageAlignment = data.alignment

  // Include /m to convert to .webp.
  //
  // https://www.storyblok.com/docs/image-service#united-states
  let imageUrl = `${ data.image.filename }/m`

  // Include a focal point when one is provided.
  //
  // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
  if (data.image.focus && data.image.focus !== '') {
    imageUrl += `/filters:focal(${ data.image.focus})`
  }

  let imageStyles = ''

  if (typeof(data.aspectRatio) !== 'undefined') {
    imageStyles += `aspect-ratio: ${ data.aspectRatio };`
  }

  if (typeof(data.maximumWidth) !== 'undefined') {
    imageStyles += `max-width: ${ data.maximumWidth };`
  }

  if (typeof(data.maximumHeight) !== 'undefined') {
    imageStyles += `max-height: ${ data.maximumHeight };`
  }

  // --------------------------------------------
  // Development Only (Do Not Port)
  // --------------------------------------------

  if (data.renderedInStorybook) {
    // Do not use the Storyblok image service since it cannot
    // be accessed externally.
    imageUrl = data.image.filename
  }
</script>

<div class='rlc__block rlc__block__image rlc__block__image--alignment-{ imageAlignment }'>
  <img
    class="rlc-block rlc-h-full rlc-w-full rlc-object-cover rlc-object-center"
    src='{ imageUrl }'
    style='{ imageStyles }'
  />
</div>
