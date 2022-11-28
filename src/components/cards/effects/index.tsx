import { Effect } from '~/lib/models'

import Emoji from './Emoji'
import Fence from './Fence'

export const emojify = (effect: Effect) => {
  switch (effect) {
    case Effect.Bis:
      return <Emoji>📪</Emoji>
    case Effect.Landscaper:
      return <Emoji>🌳</Emoji>
    case Effect.PoolManufacturer:
      return <Emoji>🏊‍♀️</Emoji>
    case Effect.RealEstateAgent:
      return <Emoji>🏠</Emoji>
    case Effect.Surveyor:
      return <Fence />
    case Effect.TempAgency:
      return <Emoji>⚠️</Emoji>
  }
}
