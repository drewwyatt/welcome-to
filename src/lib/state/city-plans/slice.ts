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

const toSelected = () => [shuffle(n1)[0], shuffle(n2)[0], shuffle(n3)[0]]

const cityPlansSlice = createSlice({
  name: 'city-plans',
  initialState,
  reducers: {
    toggleClaim: (state, action: PayloadAction<1 | 2 | 3>) => {
      state.selected[action.payload - 1].claimed =
        !state.selected[action.payload - 1].claimed
    },
    draw: state => {
      state.selected = toSelected()
    },
  },
  extraReducers: r =>
    r.addCase(initialize, state => {
      state.selected = toSelected()
    }),
})

export const { draw, toggleClaim } = cityPlansSlice.actions

export default cityPlansSlice.reducer
