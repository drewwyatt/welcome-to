import type { FC } from 'react'
import Config from './Config'
import { useTimerControls, useTimeRemaining, useTimerState } from '~/lib/state/hooks'
import { TimerState } from '~/lib/state/timer/slice'

const Countdown: FC = () => {
  const remaining = useTimeRemaining()
  return (
    <fieldset>
      <legend>Seconds Until Next Flip</legend>
      {remaining}
    </fieldset>
  )
}

const Controls: FC = () => {
  const { toggle, reset, stop } = useTimerControls()
  return (
    <div>
      <button onClick={toggle}>⏯️</button>
      <button onClick={reset}>🔃</button>
      <button onClick={stop}>⏹️</button>
    </div>
  )
}

const Timer: FC = () => {
  const state = useTimerState()
  return (
    <details>
      <summary>Timer</summary>
      {state === TimerState.Stopped ? (
        <Config />
      ) : (
        <>
          <Countdown />
          <Controls />
        </>
      )}
    </details>
  )
}

export default Timer
