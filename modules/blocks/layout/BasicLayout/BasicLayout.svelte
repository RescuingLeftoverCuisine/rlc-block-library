<script>
  export let data
</script>

<div class='rlc__block rlc__block--layout rlc__block--layout--theme-{ data.theme } rlc__block__basic-layout rlc__block__basic-layout--layout-width-{ data.layoutWidth }'>
  <div class='rlc__block__basic-layout__content'>
    <slot />
  </div>
</div>
