<script>
  export let data
</script>

{ #if data.attrs.level === 1 }
  <h1 class='rlc__text__heading__one'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h1>
{ /if }

{ #if data.attrs.level === 2 }
  <h2 class='rlc__text__heading__two rlc-mt-2'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h2>
{ /if }

{ #if data.attrs.level === 3 }
  <h3 class='rlc__text__heading__three rlc-mt-2'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h3>
{ /if }

{ #if data.attrs.level === 4 }
  <h4 class='rlc__text__heading__four rlc-mt-2'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h4>
{ /if }

{ #if data.attrs.level === 5 }
  <h5 class='rlc__text__heading__five rlc-mt-2'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h5>
{ /if }

{ #if data.attrs.level === 6 }
  <h6 class='rlc__text__heading__six rlc-mt-2'>
    { #each data.content as content }
      { #if content.type === 'text' }
        { content.text }
      { /if }
    { /each }
  </h6>
{ /if }
