import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store'
import * as slice from './slice'

const selectTimeRemaining = (state: RootState) =>
  [state.timer.remaining, state.timer.state] as const

export const useTimer = (): [
  number,
  { state: slice.TimerState; start(): void; stop(): void; pause(): void },
] => {
  const [remaining, state] = useSelector(selectTimeRemaining)
  const dispatch = useDispatch()
  const start = useCallback(() => dispatch(slice.start(dispatch)), [dispatch])
  const stop = useCallback(() => dispatch(slice.stop()), [dispatch])
  const pause = useCallback(() => dispatch(slice.pause()), [dispatch])

  return [remaining, { state, start, stop, pause }]
}
