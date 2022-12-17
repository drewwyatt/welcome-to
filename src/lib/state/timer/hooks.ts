import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store'
import * as slice from './slice'

const selectTimeRemaining = (state: RootState) => state.timer.remaining
export const useTimeRemaining = () => useSelector(selectTimeRemaining)

const selectTimerState = (state: RootState) => state.timer.state
export const useTimerState = () => useSelector(selectTimerState)

export const useTimerControls = (): {
  stop(): void
  reset(): void
  toggle(): void
} => {
  const dispatch = useDispatch()
  const toggle = useCallback(() => dispatch(slice.toggle()), [dispatch])
  const stop = useCallback(() => dispatch(slice.stop()), [dispatch])
  const reset = useCallback(() => dispatch(slice.reset()), [dispatch])

  return { toggle, reset, stop }
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
