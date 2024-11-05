<script>
  export let data
</script>

<div class='rlc__block rlc__block__button rlc__block__button--alignment-{ data.alignment } rlc-px-4'>
  <a href='{ data.link.url }' target='{ data.link.target }' class='rlc__button rlc__button--theme-{ data.theme }'>
    { data.text }
  </a>
</div>
