import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

const selectPlan = createSelector(
  [
    (state: RootState) => state.cityPlans.selected,
    (_: RootState, category: number) => category,
  ],
  (plans, category) => plans[category - 1],
)

export const useCityPlan = (category: 1 | 2 | 3) =>
  useSelector((state: RootState) => selectPlan(state, category))
