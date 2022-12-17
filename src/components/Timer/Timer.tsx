import type { FC } from 'react'
import Config from './Config'
import { useTimer } from '~/lib/state/hooks'

const Timer: FC = () => {
  const [remaining, { stop }] = useTimer()
  return (
    <fieldset>
      <legend>Timer</legend>
      <Config />
      {remaining}
      <button onClick={stop}>stop</button>
    </fieldset>
  )
}

export default Timer
