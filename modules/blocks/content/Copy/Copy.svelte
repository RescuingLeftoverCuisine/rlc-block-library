<script>
  export let data

  import BulletList from './support/BulletList.svelte'
  import Heading from './support/Heading.svelte'
  import Paragraph from './support/Paragraph.svelte'
</script>

<div class='rlc__block rlc__block__copy rlc__block__copy--copy-alignment-{ data.copyAlignment } rlc-p-4 tablet:rlc-py-8'>
  <div class='rlc-flex rlc-flex-col rlc-gap-2'>
    { #each data.copy.content as content }
      { #if content.type === 'heading' }
        <Heading data={ content } />
      { /if }

      { #if content.type === 'paragraph' }
        <Paragraph data={ content } />
      { /if }

      { #if content.type === 'bullet_list' }
        <BulletList data={ content } />
      { /if }
    { /each }
  </div>
</div>
