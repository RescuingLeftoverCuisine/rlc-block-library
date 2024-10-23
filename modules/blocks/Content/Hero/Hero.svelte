<script>
  export let data
</script>

<div
  class='rlc__block rlc__block__hero rlc-relative rlc-flex rlc-flex-col rlc-justify-center rlc-p-4 tablet:rlc-p-10 desktop-medium:rlc-p-12 desktop-wide:rlc-p-14'
>
  <div
    title='RLC Hero Background'
    style='background-image: url({ data.image.filename })'
    class='rlc-absolute rlc-bg-cover rlc-bg-center rlc-bottom-0 rlc-left-0 rlc-right-0 rlc-top-0 rlc-z-0 rlc-grayscale'
  ></div>

  <div class='rlc__block__hero__scrim rlc-absolute rlc-bottom-0 rlc-left-0 rlc-right-0 rlc-top-0 rlc-z-0'></div>

  <h1 class='rlc__text__heading__one rlc-color-white rlc-max-w-[310px] tablet:rlc-max-w-[600px] desktop-medium:rlc-max-w-[820px] desktop-wide:rlc-max-w-[1060px] rlc-text-white rlc-z-10'>{ data.heading }</h1>
</div>
