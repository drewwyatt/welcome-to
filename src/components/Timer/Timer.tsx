import type { FC } from 'react'
import Config from './Config'
import { useTimerControls, useTimeRemaining, useTimerState } from '~/lib/state/hooks'
import { TimerState } from '~/lib/state/timer/slice'

import styles from '~/styles/Timer.module.css'

const Countdown: FC = () => {
  const remaining = useTimeRemaining()
  return (
    <fieldset className={styles.countdown}>
      <legend>Seconds Until Next Flip</legend>
      <h3>{remaining}</h3>
    </fieldset>
  )
}

const Controls: FC = () => {
  const { toggle, reset, stop } = useTimerControls()
  return (
    <ul className={styles.controls}>
      <li>
        <button onClick={toggle}>⏯️ Start/Pause</button>
      </li>
      <li>
        <button onClick={reset}>🔃 Reset</button>
      </li>
      <li>
        <button onClick={stop}>⏹️ Stop</button>
      </li>
    </ul>
  )
}

const Timer: FC = () => {
  const state = useTimerState()
  return (
    <details className={styles.wrapper}>
      <summary className={styles.summary}>Flip Timer</summary>
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
