<script>
  export let data
</script>

<p class='rlc__text__base'>
  { #if data.content }
    { #each data.content as content }
      { #if content.type === 'text' }
        { #if content.marks }
          { #if content.marks[0].type === 'bold' }
            <strong>{ content.text }</strong>
          { /if }

          { #if content.marks[0].type === 'italic' }
            <em>{ content.text }</em>
          { /if }

          { #if content.marks[0].type === 'link' }
            <a
              class='rlc__text__link'
              href='{ content.marks[0].attrs.href }'
              target='{ content.marks[0].attrs.target }'
            >{ content.text }</a>
          { /if }
        { /if }

        { #if !content.marks }
          { content.text }
        { /if }
      { /if }
    { /each }
  { /if }
</p>
