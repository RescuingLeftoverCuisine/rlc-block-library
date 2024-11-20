<script>
  export let data

  import { mergeDataForStory } from '@/tests/support/merge.helper.js'

  import GridLayout from './GridLayout.svelte'
  import { gridLayoutBaseData } from './GridLayout.data.js'
  const gridLayoutData = mergeDataForStory(gridLayoutBaseData, data)

  import GridItemImageWithQuote from './GridItemImageWithQuote/GridItemImageWithQuote.svelte'
  import { gridItemImageWithQuoteBaseData } from './GridItemImageWithQuote/GridItemImageWithQuote.data.js'

  const gridItemImageWithQuoteOneData = mergeDataForStory(gridItemImageWithQuoteBaseData, {
    quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies laoreet himenaeos adipiscing lobortis maximus quam. Parturient felis imperdiet est class ornare taciti lobortis. Eu eleifend elit fringilla maecenas nulla placerat pulvinar diam. Conubia tempor id nascetur ut torquent.',
  })

  const gridItemImageWithQuoteTwoData = mergeDataForStory(gridItemImageWithQuoteBaseData, {
    quote: 'Ipsum tempus consectetur purus egestas dolor; potenti ridiculus. Blandit vehicula ut fames pellentesque at mi senectus risus. Maecenas lectus pellentesque mi inceptos finibus odio ad.',
  })

  const gridItemImageWithQuoteThreeData = mergeDataForStory(gridItemImageWithQuoteBaseData, {
    quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies laoreet himenaeos adipiscing lobortis maximus quam. Parturient felis imperdiet est class ornare taciti lobortis. Eu eleifend elit fringilla maecenas nulla placerat pulvinar diam. ',
  })
</script>

<GridLayout { ...gridLayoutData }>
  <GridItemImageWithQuote { ...gridItemImageWithQuoteOneData } />
  <GridItemImageWithQuote { ...gridItemImageWithQuoteTwoData } />
  <GridItemImageWithQuote { ...gridItemImageWithQuoteThreeData } />
  <GridItemImageWithQuote { ...gridItemImageWithQuoteOneData } />
  <GridItemImageWithQuote { ...gridItemImageWithQuoteTwoData } />
  <GridItemImageWithQuote { ...gridItemImageWithQuoteThreeData } />
</GridLayout>
