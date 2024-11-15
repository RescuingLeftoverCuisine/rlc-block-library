<script>
  export let data
</script>

<div class='rlc__block rlc__block--layout rlc__block__grid-layout rlc__block--layout--theme-{ data.theme } rlc-px-5 rlc-py-6'>
  <div class='rlc__block__grid-layout__content rlc-grid rlc-grid-cols-1 tablet:rlc-grid-cols-2 desktop-medium:rlc-grid-cols-3 rlc-gap-6 rlc-justify-items-center'>
    <slot />
  </div>
</div>
