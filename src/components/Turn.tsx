import type { FC } from 'react'
import { Effect, HouseNumber } from '~/lib/models'
import { useTurn } from '~/lib/state/hooks'
import { EffectCard, HouseNumberCard, HousingEstatePlan } from './cards'

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

  return (
    <div className="turn">
      <div className="table">
        {pairs.map((cards, idx) => (
          <Pair key={idx} effect={cards.effect} houseNumber={cards.houseNumber} />
        ))}
      </div>
      <hr />
      <div className="city-plans">
        <HousingEstatePlan category={1} />
        <HousingEstatePlan category={2} />
        <HousingEstatePlan category={3} />
      </div>
      <hr />
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default Turn
