import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { n1, n2, n3 } from '~/lib/data/city-plans'
import { CityPlan } from '~/lib/models'
import { shuffle } from '~/lib/utils'
import { initialize } from '../game/slice'

export interface CityPlansState {
  selected: CityPlan[]
}

const initialState: CityPlansState = {
  selected: [],
}

type Category = 1 | 2 | 3

const toSelected = () => [shuffle(n1)[0], shuffle(n2)[0], shuffle(n3)[0]]

const cityPlansSlice = createSlice({
  name: 'city-plans',
  initialState,
  reducers: {
    toggleClaim: (state, action: PayloadAction<Category>) => {
      state.selected[action.payload - 1].claimed =
        !state.selected[action.payload - 1].claimed
    },
    draw: state => {
      state.selected = toSelected()
    },
    setPlan: (state, action: PayloadAction<{ category: Category; plan: CityPlan }>) => {
      state.selected[action.payload.category - 1] = action.payload.plan
    },
  },
  extraReducers: r =>
    r.addCase(initialize, state => {
      state.selected = toSelected()
    }),
})

export const { draw, setPlan, toggleClaim } = cityPlansSlice.actions

export default cityPlansSlice.reducer
