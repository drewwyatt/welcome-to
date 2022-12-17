import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store'
import * as slice from './slice'

const selectTimeRemaining = (state: RootState) =>
  [state.timer.remaining, state.timer.state] as const

// interface

export const useTimer = (): [
  number,
  { state: slice.TimerState; start(seconds: number): void; stop(): void },
] => {
  const [remaining, state] = useSelector(selectTimeRemaining)
  const dispatch = useDispatch()
  const start = useCallback(
    (seconds: number) => dispatch(slice.start(seconds) as any),
    [dispatch],
  )
  const stop = useCallback(() => dispatch(slice.stop()), [dispatch])

  return [remaining, { state, start, stop }]
}

const selectSeconds = (state: RootState) => state.timer.seconds
export const useTimerStarter = (): [
  prevSeconds: number,
  start: (seconds: number) => void,
] => {
  const seconds = useSelector(selectSeconds)

  const dispatch = useDispatch()
  const start = useCallback(
    (seconds: number) => dispatch(slice.start(seconds)),
    [dispatch],
  )

  return [seconds, start]
}
