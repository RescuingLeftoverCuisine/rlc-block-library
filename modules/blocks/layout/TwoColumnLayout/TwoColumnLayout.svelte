<script>
  export let data

  const gridColumnRatioLeft = data.columnRatio.split('/')[0]
  const gridColumnRatioRight = data.columnRatio.split('/')[1]
</script>

<div class='rlc__block rlc__block--layout rlc__block--layout--theme-blue rlc__block__two-column-layout'>
  <div
    style='grid-template-columns: { gridColumnRatioLeft }fr { gridColumnRatioRight }fr;'
    class='rlc__block__two-column-layout__content tablet:rlc-grid'
  >
    <slot />
  </div>
</div>
