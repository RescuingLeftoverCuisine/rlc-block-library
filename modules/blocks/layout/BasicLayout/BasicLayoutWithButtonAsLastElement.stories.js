import BasicLayoutWithButtonAsLastElementExample from './BasicLayoutExampleWithButtonAsLastElement.svelte'
import { basicLayoutBaseData } from './BasicLayout.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Layout/Basic Layout/Integrations',
  component: BasicLayoutWithButtonAsLastElementExample,
}

// Test that button receives correct bottom padding when it is
// the last block in a Basic Layout.
export const WithButtonAsLastElement = {
  name: 'Integrations: Button as Last Element',
  args: mergeDataForStory(basicLayoutBaseData),
}
