import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store'
import * as slice from './slice'

const selectedStarted = (state: RootState) => state.game.initialized
export const useGame = (): { started: boolean; start: () => void } => {
  const started = useSelector<RootState, boolean>(selectedStarted)
  const dispatch = useDispatch()
  const start = useCallback(() => dispatch(slice.initialize()), [dispatch])

  return {
    started,
    start,
  }
}
