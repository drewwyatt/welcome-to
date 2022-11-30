import type { FC } from 'react'
import { Effect, HouseNumber } from '~/lib/models'
import { useDrawCityPlans, useTurn } from '~/lib/state/hooks'
import { EffectCard, HouseNumberCard, HousingEstatePlan } from './cards'

import styles from '~/styles/Turn.module.css'

const Pair: FC<{ effect: Effect; houseNumber: HouseNumber }> = ({
  effect,
  houseNumber,
}) => (
  <>
    <EffectCard type={effect} />
    <HouseNumberCard value={houseNumber} />
  </>
)

const Turn: FC = () => {
  const [pairs, { next, prev }] = useTurn()
  const redrawPlans = useDrawCityPlans()

  return (
    <div className={styles.wrapper}>
      <div className={styles.constructionCards}>
        {pairs.map((cards, idx) => (
          <Pair key={idx} effect={cards.effect} houseNumber={cards.houseNumber} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={prev}>
          Prev
        </button>
        <button className={styles.button} onClick={next}>
          Next
        </button>
      </div>
      <hr className={styles.divider} />
      <div className={styles.cityPlans}>
        <HousingEstatePlan category={1} />
        <HousingEstatePlan category={2} />
        <HousingEstatePlan category={3} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={redrawPlans}>
          Draw New City Plans
        </button>
      </div>
    </div>
  )
}

export default Turn
