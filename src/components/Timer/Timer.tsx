import type { FC } from 'react'
import Selection from './Selection'
import { useTimer } from '~/lib/state/hooks'

const Timer: FC = () => {
  const [remaining, { start, stop }] = useTimer()
  return (
    <fieldset>
      <legend>Timer</legend>
      <Selection />
      {remaining}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </fieldset>
  )
}

export default Timer
