<script>
  import Paragraph from './Paragraph.svelte'

  export let data
</script>

<li class='rlc__text__base rlc-list-disc'>
  { #if data.content }
    { #each data.content as content }
      { #if content.type === 'paragraph' }
        <Paragraph data={ content } />
      { /if }
    { /each }
  { /if }
</li>
