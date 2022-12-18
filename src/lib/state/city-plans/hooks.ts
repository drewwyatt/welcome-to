import { createSelector } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CityPlan } from '~/lib/models'

import type { RootState } from '../store'
import * as slice from './slice'
import { n1, n2, n3 } from '~/lib/data/city-plans'

const selectPlans = (state: RootState) => state.cityPlans.selected
const selectPlan = createSelector(
  [selectPlans, (_: RootState, category: number) => category],
  (plans, category) => plans[category - 1],
)

export const useDrawCityPlans = () => {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(slice.draw()), [dispatch])
}

export const useCityPlan = (category: 1 | 2 | 3) => {
  const plan = useSelector((state: RootState) => selectPlan(state, category))
  const dispatch = useDispatch()
  const toggleClaim = useCallback(
    () => dispatch(slice.toggleClaim(category)),
    [dispatch, category],
  )

  return useMemo(() => [plan, toggleClaim] as const, [plan, toggleClaim])
}

export const useCityPlanSelection = () => {
  const selected = useSelector(selectPlans)
  const dispatch = useDispatch()
  const updatePlan = useCallback(
    (category: 1 | 2 | 3, plan: CityPlan) => dispatch(slice.setPlan({ category, plan })),
    [dispatch],
  )

  return useMemo(
    () =>
      [
        [
          [n1, selected[0]],
          [n2, selected[1]],
          [n3, selected[2]],
        ],
        updatePlan,
      ] as const,
    [selected, updatePlan],
  )
}
