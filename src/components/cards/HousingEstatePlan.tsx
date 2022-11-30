import type { FC } from 'react'
import { useCityPlan } from '~/lib/state/hooks'
import { range } from '~/lib/utils'

import Card from './Card'
import Emoji from './images/Emoji'

interface Props {
  category: 1 | 2 | 3
}

const Estate: FC<{ size: number }> = ({ size }) => (
  <fieldset className={`estate estate-${size}`}>
    <legend>{size}</legend>
    {range(size).map(key => (
      <Emoji key={key} className="estate-icon">
        🏠
      </Emoji>
    ))}
  </fieldset>
)

const HousingEstatePlan: FC<Props> = ({ category }) => {
  const plan = useCityPlan(category)

  return (
    <Card className="city-plan">
      <h2 className="plan-category">n*{category}</h2>
      <div className="estates">
        {plan.estates.map((size, idx) => (
          <Estate key={idx} size={size} />
        ))}
      </div>
      <footer>
        <span className="first-player-points">{plan.firstPoints}</span>
        <span className="other-points">{plan.otherPoints}</span>
      </footer>
    </Card>
  )
}

export default HousingEstatePlan