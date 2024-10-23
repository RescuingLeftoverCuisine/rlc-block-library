import Copy from './Copy.svelte'
import { copyBaseData } from './Copy.data.js'

// --------------------------------------------

export default {
  title: 'Blocks/Copy',
  component: Copy,
}

export const Base = {
  args: copyBaseData,
}
