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

const cityPlansSlice = createSlice({
  name: 'city-plans',
  initialState,
  reducers: {
    claim: (state, action: PayloadAction<0 | 1 | 2>) => {
      state.selected[action.payload].claimed = true
    },
  },
  extraReducers: r =>
    r.addCase(initialize, state => {
      state.selected = [shuffle(n1)[0], shuffle(n2)[0], shuffle(n3)[0]]
    }),
})

export const { claim } = cityPlansSlice.actions

export default cityPlansSlice.reducer
