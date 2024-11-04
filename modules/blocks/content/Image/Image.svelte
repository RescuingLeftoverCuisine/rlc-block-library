<script>
  export let data

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

  if (data.image.focus && data.image.focus !== '') {
    const imageDimensions = data.image.filename.match(/(?<=\/\d+\/)(\d+x\d+)(?=\/)/)[0]
    const imageWidth = imageDimensions.split('x')[0]
    const imageHeight = imageDimensions.split('x')[1]

    const imageFocus = data.image.focus.split(':')[0]
    const imageFocusX = imageFocus.split('x')[0]
    const imageFocusY = imageFocus.split('x')[1]

    const objectPositionX = (imageFocusX / imageWidth).toFixed(2) * 100
    const objectPositionY = (imageFocusY / imageHeight).toFixed(2) * 100

    imageStyles += `object-position: ${ objectPositionX }% ${ objectPositionY }% !important;`
  }

  // Include /m to convert to .webp.
  // Constrain width to a maximum of 1600px wide.
  //
  // https://www.storyblok.com/docs/image-service#united-states
  let imageUrl = `${ data.image.filename }/m/1600x0/`

  // Include a focal point when one is provided.
  //
  // https://www.storyblok.com/faq/use-focal-point-set-in-storyblok
  if (data.image.focus && data.image.focus !== '') {
    imageUrl += `filters:focal(${ data.image.focus})`
  }

  const imageAlignment = data.alignment

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
  { #if data.link }
    <a href='{ data.link.url }' target='{ data.link.target }'>
      <img
        alt='{ data.image.alt }'
        title='{ data.image.title }'
        class="rlc-block rlc-h-full rlc-w-full rlc-object-cover rlc-object-center"
        src='{ imageUrl }'
        style='{ imageStyles }'
      />
    </a>
  { /if }

  { #if typeof(data.link) === 'undefined' }
    <img
      alt='{ data.image.alt }'
      title='{ data.image.title }'
      class="rlc-block rlc-h-full rlc-w-full rlc-object-cover rlc-object-center"
      src='{ imageUrl }'
      style='{ imageStyles }'
    />
  { /if }
</div>
