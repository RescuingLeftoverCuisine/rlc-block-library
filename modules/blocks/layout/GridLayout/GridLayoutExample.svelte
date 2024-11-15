<script>
  export let data

  import { mergeDataForStory } from '@/tests/support/merge.helper.js'

  import GridLayout from './GridLayout.svelte'
  import { gridLayoutBaseData } from './GridLayout.data.js'
  const gridLayoutData = mergeDataForStory(gridLayoutBaseData, data)

  import GridItemPartner from './GridItemPartner/GridItemPartner.svelte'
  import { gridItemPartnerBaseData } from './GridItemPartner/GridItemPartner.data.js'

  const gridItemPartnerOneData = mergeDataForStory(gridItemPartnerBaseData, {
    quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies laoreet himenaeos adipiscing lobortis maximus quam. Parturient felis imperdiet est class ornare taciti lobortis. Eu eleifend elit fringilla maecenas nulla placerat pulvinar diam. Conubia tempor id nascetur ut torquent.',
  })

  const gridItemPartnerTwoData = mergeDataForStory(gridItemPartnerBaseData, {
    quote: 'Ipsum tempus consectetur purus egestas dolor; potenti ridiculus. Blandit vehicula ut fames pellentesque at mi senectus risus. Maecenas lectus pellentesque mi inceptos finibus odio ad.',
  })

  const gridItemPartnerThreeData = mergeDataForStory(gridItemPartnerBaseData, {
    quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies laoreet himenaeos adipiscing lobortis maximus quam. Parturient felis imperdiet est class ornare taciti lobortis. Eu eleifend elit fringilla maecenas nulla placerat pulvinar diam. ',
  })
</script>

<GridLayout { ...gridLayoutData }>
  <GridItemPartner { ...gridItemPartnerOneData } />
  <GridItemPartner { ...gridItemPartnerTwoData } />
  <GridItemPartner { ...gridItemPartnerThreeData } />
  <GridItemPartner { ...gridItemPartnerOneData } />
  <GridItemPartner { ...gridItemPartnerTwoData } />
  <GridItemPartner { ...gridItemPartnerThreeData } />
</GridLayout>
