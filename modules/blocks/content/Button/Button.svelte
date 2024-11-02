<script>
  export let data
</script>

<div class='rlc__block rlc__block__button rlc__block__button--alignment-{ data.alignment } rlc__block__button--theme-{ data.theme }'>
  <a href='{ data.link.url }' target='{ data.link.target }' class='rlc__text__base rlc-rounded-[1.5rem] rlc-px-10 rlc-py-3 tablet:rlc-px-11 desktop-medium:rlc-px-12 rlc-text-white rlc-font-bold rlc-inline-block rlc-transition-colors'>
    { data.text }
  </a>
</div>
