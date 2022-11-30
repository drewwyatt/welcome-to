import type { FC } from 'react'
import { useCityPlan } from '~/lib/state/hooks'
import Card from './Card'

interface Props {
  category: 1 | 2 | 3
}

const HousingEstatePlan: FC<Props> = ({ category }) => {
  const plan = useCityPlan(category)

  return (
    <Card>
      <h2>n*{category}</h2>
      <p>{JSON.stringify(plan.estates)}</p>
      <footer>
        <span className="first-player-points">{plan.firstPoints}</span>
        <span className="other-points">{plan.otherPoints}</span>
      </footer>
    </Card>
  )
}

export default HousingEstatePlan
