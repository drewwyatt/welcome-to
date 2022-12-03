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
          <div className={styles.instructions}>
            <h2>Resources</h2>
            <p>
              App store links and the full game manual can be found at the bottom of the
              page.
            </p>
            <h2>Keyboard</h2>
            <p>You can change cards using the arrow keys and the spacebar.</p>
            <h2>City Plans</h2>
            <p>
              Once a city plan has been claimed, you can click it to mark it as claimed.
            </p>
            <h2>Effects</h2>
            <p>
              <strong>{Effect.Bis}</strong> Allows the player to duplicate a house number
              on any street. The new house must be directly adjacent, to the left or right
              of the house with the same number.
            </p>
            <p>
              <strong>{Effect.Landscaper}</strong> Allows the player to build a park. The
              player crosses off one of the trees at the end of the street. Parks must be
              crossed off on the same street that the house number is written
            </p>
            <p>
              <strong>{Effect.PoolManufacturer}</strong> Allows a player to score points
              when building houses that have a planned pool. If a player writes the house
              number associated with the Pool Manufacturer effect in a house with a
              planned pool, then the pool is built. Cross off the top-most,
              lowest-numbered space in their pools column.
            </p>
            <p>
              <strong>{Effect.RealEstateAgent}</strong> Promotes and increases the value
              of completed housing estates.
            </p>
            <p>
              <strong>{Effect.Surveyor}</strong> Allows the player to build a fence
              between two houses on the same street.
            </p>
            <p>
              <strong>{Effect.TempAgency}</strong> Allows the player to add or subtract 1
              or 2 to the house number they are building.
            </p>
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
