import Hero from './Hero.svelte'
import { heroBaseData } from './Hero.data.js'

// --------------------------------------------

export default {
  title: 'Blocks/Hero',
  component: Hero,
}

export const Base = {
  args: heroBaseData,
}
