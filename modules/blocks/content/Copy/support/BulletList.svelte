<script>
  import ListItem from './ListItem.svelte'

  export let data
</script>

<ul class='rlc-block rlc-w-fit rlc-pl-4'>
  { #if data.content }
    { #each data.content as content }
      { #if content.type === 'list_item' }
        <ListItem data={ content } />
      { /if }
    { /each }
  { /if }
</ul>
