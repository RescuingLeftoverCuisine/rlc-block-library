<script>
  export let data

  // Include /m to convert to .webp.
  // Constrain width to a maximum of 300x300.
  //
  // https://www.storyblok.com/docs/image-service#united-states
  let imageUrl = `${ data.image.filename }/m/300x300/`

  // Development Only (Do Not Port)
  // --------------------------------------------

  if (data.renderedInStorybook) {
    // Do not use the Storyblok image service since it cannot
    // be accessed externally.
    imageUrl = data.image.filename
  }
</script>

<div class='rlc__block rlc__block__grid-item-partner rlc-flex rlc-flex-col rlc-items-center rlc-gap-4 rlc-max-w-[320px]'>
  <div class='rlc-w-[150px] rlc-h-[150px]'>
    <img
      alt='{ data.image.alt }'
      src='{ imageUrl }'
      style='rlc-block rlc-h-full rlc-w-full rlc-object-cover rlc-object-center'
      title='{ data.image.title }'
    />
  </div>

  <div class='rlc-bg-deep rlc-text-white rlc-text-center rlc-px-6 rlc-py-12 rlc-flex rlc-flex-col rlc-gap-2 rlc-rounded-2xl rlc-flex-1 rlc-justify-center'>
    <p class='rlc__block__grid-item-partner__quote rlc__text__base'>
      "{ data.quote }"
    </p>

    <p class='rlc__block__grid-item-partner__attribution rlc__text__base rlc-font-bold'>
      – { data.attribution }
    </p>
  </div>
</div>
