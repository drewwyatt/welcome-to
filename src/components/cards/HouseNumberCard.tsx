import type { FC } from 'react'
import type { HouseNumber } from '~/lib/models'
import Card from './Card'

const HouseNumberCard: FC<{ value: HouseNumber }> = ({ value }) => (
  <Card className="house-number-card">
    <h1>{value}</h1>
  </Card>
)

export default HouseNumberCard
