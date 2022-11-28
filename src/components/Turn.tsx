import type { FC } from 'react'
import { Effect, HouseNumber } from '~/lib/models'
import { useTurn } from '~/lib/state/stacks/hooks'
import { EffectCard, HouseNumberCard } from './cards'

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
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default Turn
