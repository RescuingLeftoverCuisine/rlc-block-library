<script>
  export let data
</script>

<div class='rlc__block rlc__block__copy rlc-p-4 tablet:rlc-py-8'>
  <div class='rlc-max-w-[550px] rlc-mx-auto'>
    { #each data.copy.content as content }
      { #if content.type === 'heading' }
        { #if content.attrs.level === 1 }
          <h1>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h1>
        { /if }

        { #if content.attrs.level === 2 }
          <h2>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h2>
        { /if }

        { #if content.attrs.level === 3 }
          <h3>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h3>
        { /if }

        { #if content.attrs.level === 4 }
          <h4>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h4>
        { /if }

        { #if content.attrs.level === 5 }
          <h5>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h5>
        { /if }

        { #if content.attrs.level === 6 }
          <h6>
            { #each content.content as subcontent }
              { subcontent.text }
            { /each }
          </h6>
        { /if }
      { /if }
    { /each }
  </div>
</div>
