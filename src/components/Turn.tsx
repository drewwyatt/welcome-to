import type { FC } from 'react'
import { useTurn } from '~/lib/state/stacks/hooks'

const Turn: FC = () => {
  const [sets, { next, prev }] = useTurn()

  return (
    <>
      <div>
        {sets.map((cards, index) => (
          <article key={index}>
            <fieldset>
              <legend>Effect</legend>
              {cards.effect}
            </fieldset>
            <fieldset>
              <legend>HouseNumber</legend>
              {cards.houseNumber}
            </fieldset>
          </article>
        ))}
      </div>
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}

export default Turn
