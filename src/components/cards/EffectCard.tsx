import type { FC } from 'react'
import type { Effect } from '~/lib/models'
import { emojify } from './effects'

const EffectCard: FC<{ type: Effect }> = ({ type }) => (
  <article className="card">
    {emojify(type)}
    <h1>{type}</h1>
  </article>
)

export default EffectCard
