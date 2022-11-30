import type { FC } from 'react'
import type { HouseNumber } from '~/lib/models'
import Card from './Card'

import styles from '~/styles/HouseNumberCard.module.css'

const HouseNumberCard: FC<{ value: HouseNumber }> = ({ value }) => (
  <Card>
    <h1 className={styles.number}>{value}</h1>
  </Card>
)

export default HouseNumberCard
