import type { FC } from 'react'
import type { Effect } from '~/lib/models'

import Card from './Card'
import { emojify } from './effects'

const EffectCard: FC<{ type: Effect }> = ({ type }) => (
  <Card>
    {emojify(type)}
    <h1>{type}</h1>
  </Card>
)

export default EffectCard
