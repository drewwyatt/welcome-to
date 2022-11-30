import type { FC } from 'react'
import { useCityPlan } from '~/lib/state/hooks'
import { range } from '~/lib/utils'

import Card from './Card'
import Emoji from './images/Emoji'

import styles from '~/styles/CityPlan.module.css'

interface Props {
  category: 1 | 2 | 3
}

const toEstateClassName = (size: number) =>
  [styles.estate, styles[`estate${size}`]].join(' ')

const Estate: FC<{ size: number }> = ({ size }) => (
  <fieldset className={toEstateClassName(size)}>
    <legend>{size}</legend>
    {range(size).map(key => (
      <Emoji key={key} className={styles.estateIcon}>
        🏠
      </Emoji>
    ))}
  </fieldset>
)

const HousingEstatePlan: FC<Props> = ({ category }) => {
  const plan = useCityPlan(category)

  return (
    <Card className={styles.cityPlan}>
      <header className={styles.header}>
        <h2 className={styles.categoryNumber}>n*{category}</h2>
      </header>
      <div className={styles.estates}>
        {plan.estates.map((size, idx) => (
          <Estate key={idx} size={size} />
        ))}
      </div>
      <footer className={styles.footer}>
        <span className={styles.firstPoints}>{plan.firstPoints}</span>
        <span>{plan.otherPoints}</span>
      </footer>
    </Card>
  )
}

export default HousingEstatePlan
