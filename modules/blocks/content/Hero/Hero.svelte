<script>
  export let data

  // Include /m to convert to .webp.
  // Include 1600x0 to resize to a maximum width of 1600px.
  //
  // https://www.storyblok.com/docs/image-service#united-states
  let imageUrl = `${ data.image.filename }/m/1600x0`

  const maximumHeight = data.maximumHeight ? `${ data.maximumHeight }px` : 'none'

  // Development Only (Do Not Port)
  // --------------------------------------------

  if (data.renderedInStorybook) {
    // Do not use the Storyblok image service since it cannot
    // be accessed externally.
    imageUrl = data.image.filename
  }
</script>

<div
  class='rlc__block rlc__block__hero rlc-relative rlc-flex rlc-flex-col rlc-justify-center rlc-p-4 tablet:rlc-p-10 desktop-medium:rlc-p-12 desktop-wide:rlc-p-14'
  style='max-height: { maximumHeight }'
>
  <div
    style='background-image: url("{ imageUrl }")'
    class='rlc__block__hero__image rlc-absolute rlc-bg-cover rlc-bg-center rlc-bottom-0 rlc-left-0 rlc-right-0 rlc-top-0 rlc-z-0 rlc-grayscale'
  ></div>

  <div class='rlc__block__hero__scrim rlc-absolute rlc-bottom-0 rlc-left-0 rlc-right-0 rlc-top-0 rlc-z-0'></div>

  <h1 class='rlc__text__heading__one rlc-color-white rlc-max-w-[310px] tablet:rlc-max-w-[600px] desktop-medium:rlc-max-w-[820px] desktop-wide:rlc-max-w-[1060px] rlc-text-white rlc-z-10'>{ data.heading }</h1>
</div>
