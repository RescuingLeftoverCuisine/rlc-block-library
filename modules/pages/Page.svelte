<script>
  import TwoColumnLayoutExample from '@Layout/TwoColumnLayout/TwoColumnLayoutExample.svelte'
</script>

<!-- Development Only: Replicate existing header height. -->
<style>
  .rlc__page {
    position: relative;
  }

  .rlc__page__header {
    height: 98.5px;
  }

  .rlc__page__footer {
    height: 227px;
  }
</style>

<div class='rlc__page'>
  <div class='rlc__page__header rlc__text__base rlc-bg-gray-500 rlc-grid rlc-place-items-center rlc-sticky rlc-top-0 rlc-w-full'>Header</div>

  <div class='rlc__page__content'>
    <TwoColumnLayoutExample />
  </div>

  <div class='rlc__page__footer rlc__text__base rlc-bg-gray-500 rlc-grid rlc-place-items-center'>Footer</div>
</div>
