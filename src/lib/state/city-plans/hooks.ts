import { createSelector } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store'
import * as slice from './slice'

const selectPlan = createSelector(
  [
    (state: RootState) => state.cityPlans.selected,
    (_: RootState, category: number) => category,
  ],
  (plans, category) => plans[category - 1],
)

export const useCityPlan = (category: 1 | 2 | 3) => {
  const plan = useSelector((state: RootState) => selectPlan(state, category))
  const dispatch = useDispatch()
  const toggleClaim = useCallback(
    () => dispatch(slice.toggleClaim(category)),
    [dispatch, category],
  )

  return useMemo(() => [plan, toggleClaim] as const, [plan, toggleClaim])
}
