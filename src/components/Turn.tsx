import { FC, useMemo } from 'react'
import { Effect, HouseNumber } from '~/lib/models'
import { useDrawCityPlans, useTurn } from '~/lib/state/hooks'
import { EffectCard, HouseNumberCard, HousingEstatePlan } from './cards'
import Keyboard from './Keyboard'

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
  const listeners = useMemo(
    () => ({ ArrowRight: next, Space: next, ArrowLeft: prev }),
    [next, prev],
  )

  return (
    <Keyboard listeners={listeners}>
      <div className={styles.wrapper}>
        <section className={styles.left}>
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
        </section>
        <section className={styles.right}>
          <div className={styles.cityPlans}>
            <HousingEstatePlan category={1} />
            <HousingEstatePlan category={2} />
            <HousingEstatePlan category={3} />
          </div>
          <button className={styles.button} onClick={redrawPlans}>
            Draw New City Plans
          </button>
        </section>
      </div>
    </Keyboard>
  )
}

export default Turn
