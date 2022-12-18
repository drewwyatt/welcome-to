import { ChangeEvent, FC, useMemo } from 'react'
import { CityPlan } from '~/lib/models'
import { useCityPlanSelection } from '~/lib/state/hooks'

const toCategory = (index: number): 1 | 2 | 3 => {
  if (index < 0 || index > 2) {
    throw new RangeError(`City Plan Category index out of range (received: ${index})`)
  }

  return (index + 1) as 1 | 2 | 3
}

const toLabel = ({ estates, firstPoints, otherPoints }: CityPlan) =>
  `${estates.join(', ')} (${firstPoints}, ${otherPoints})`

const SelectCityPlans: FC = () => {
  const [plans, setPlan] = useCityPlanSelection()
  const toOnChange = (index: number) => (event: ChangeEvent<HTMLSelectElement>) => {
    setPlan(toCategory(index), plans[index][0][Number(event.target.value)])
  }

  const onChange = useMemo(
    () => [toOnChange(0), toOnChange(1), toOnChange(2)] as const,
    [plans, setPlan],
  )

  return (
    <details>
      <summary>Select City Plan</summary>
      <ul>
        {plans.map(([options, selected], index) => (
          <li key={index}>
            <select
              title={`City Plan n*{${toCategory(index)}}`}
              onChange={onChange[index]}
            >
              {options.map((plan, pIndex) => (
                <option defaultChecked={plan.id === selected.id} value={pIndex}>
                  {toLabel(plan)}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default SelectCityPlans
