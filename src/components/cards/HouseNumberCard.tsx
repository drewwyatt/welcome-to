import type { FC } from 'react'
import type { HouseNumber } from '~/lib/models'

const HouseNumberCard: FC<{ value: HouseNumber }> = ({ value }) => (
  <article className="card house-number-card">
    <h1>{value}</h1>
  </article>
)

export default HouseNumberCard
