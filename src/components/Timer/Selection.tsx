import type { FC } from 'react'
import { useState } from 'react'
import { range } from '~/lib/utils'

const minutesOptions = range(6)
const secondsOptions = [0, 30]

const Selection: FC = () => {
  const [minutes, setMinutes] = useState(1)
  const [seconds, setseconds] = useState(0)

  return (
    <div>
      <select title="minutes">
        {minutesOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      :
      <select title="seconds">
        {secondsOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selection
