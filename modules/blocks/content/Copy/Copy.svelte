<script>
  export let data
</script>

<div class='rlc__block rlc__block__copy rlc__block__copy--copy-alignment-{ data.copyAlignment } rlc-p-4 tablet:rlc-py-8'>
  <div class='rlc-flex rlc-flex-col rlc-gap-2'>
    { #each data.copy.content as content }
      <!-- -------------------------------------------- -->
      <!-- Headings -->

      { #if content.type === 'heading' }
        { #if content.attrs.level === 1 }
          <h1 class='rlc__text__heading__one'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h1>
        { /if }

        { #if content.attrs.level === 2 }
          <h2 class='rlc__text__heading__two rlc-mt-2'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h2>
        { /if }

        { #if content.attrs.level === 3 }
          <h3 class='rlc__text__heading__three rlc-mt-2'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h3>
        { /if }

        { #if content.attrs.level === 4 }
          <h4 class='rlc__text__heading__four rlc-mt-2'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h4>
        { /if }

        { #if content.attrs.level === 5 }
          <h5 class='rlc__text__heading__five rlc-mt-2'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h5>
        { /if }

        { #if content.attrs.level === 6 }
          <h6 class='rlc__text__heading__six rlc-mt-2'>
            { #each content.content as subcontent }
              { #if subcontent.type === 'text' }
                { subcontent.text }
              { /if }
            { /each }
          </h6>
        { /if }
      { /if }

      <!-- -------------------------------------------- -->
      <!-- Basic Text (Paragraphs) -->

      { #if content.type === 'paragraph' }
        <p class='rlc__text__base'>
          { #if content.content }
            { #each content.content as paragraphSubcontent }
              { #if paragraphSubcontent.type === 'text' }
                { #if typeof(paragraphSubcontent.marks) !== 'undefined' }
                  { #if paragraphSubcontent.marks[0].type === 'bold' }
                    <strong>{ paragraphSubcontent.text }</strong>
                  { /if }

                  { #if paragraphSubcontent.marks[0].type === 'italic' }
                    <em>{ paragraphSubcontent.text }</em>
                  { /if }

                  { #if paragraphSubcontent.marks[0].type === 'link' }
                    <a
                      class='rlc__text__link'
                      href='{ paragraphSubcontent.marks[0].attrs.href }'
                      target='{ paragraphSubcontent.marks[0].attrs.target }'
                    >{ paragraphSubcontent.text }</a>
                  { /if }
                { /if }

                { #if typeof(paragraphSubcontent.marks) === 'undefined' }
                  { paragraphSubcontent.text }
                { /if }
              { /if }
            { /each }
          { /if }
        </p>
      { /if }

      <!-- -------------------------------------------- -->
      <!-- Bulleted Lists -->

      { #if content.type === 'bullet_list' }
        <ul class='rlc-block rlc-w-fit rlc-pl-4'>
          { #if content.content }
            { #each content.content as bulletListContent }
              { #if bulletListContent.type === 'list_item' }
                <li class='rlc__text__base rlc-list-disc'>
                  { #if bulletListContent.content }
                    { #each bulletListContent.content as listItemContent }
                      { #if listItemContent.content }
                        { #if listItemContent.type === 'paragraph' }
                          { #each listItemContent.content as listItemParagraphContent }
                            { #if listItemParagraphContent.type === 'text' }
                              { #if typeof(listItemParagraphContent.marks) !== 'undefined' }
                                { #if listItemParagraphContent.marks[0].type === 'bold' }
                                  <strong>{ listItemParagraphContent.text }</strong>
                                { /if }

                                { #if listItemParagraphContent.marks[0].type === 'italic' }
                                  <em>{ listItemParagraphContent.text }</em>
                                { /if }

                                { #if listItemParagraphContent.marks[0].type === 'link' }
                                  <a
                                    class='rlc__text__link'
                                    href='{ listItemParagraphContent.marks[0].attrs.href }'
                                    target='{ listItemParagraphContent.marks[0].attrs.target }'
                                  >{ listItemParagraphContent.text }</a>
                                { /if }
                              { /if }

                              { #if typeof(listItemParagraphContent.marks) === 'undefined' }
                                { listItemParagraphContent.text }
                              { /if }
                            { /if }
                          { /each }
                        { /if }
                      { /if }
                    { /each }
                  { /if }
                </li>
              { /if }
            { /each }
          { /if }
        </ul>
      { /if }
    { /each }
  </div>
</div>
