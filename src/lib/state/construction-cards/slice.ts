import { createSlice } from '@reduxjs/toolkit'

import cards from '~/lib/data/construction-cards'
import { shuffle, split3 } from '~/lib/utils'
import { initialize } from '../game/slice'

type Stack = typeof cards
const deal = () => split3(shuffle(cards))

export interface ConstructionCardsSlice {
  index: number
  stacks: [Stack, Stack, Stack]
}

const initialState: ConstructionCardsSlice = {
  index: -1,
  stacks: [[], [], []],
}

const stacksSlice = createSlice({
  name: 'construction-cards',
  initialState,
  reducers: {
    next: state => {
      state.index += 1
      if (state.index === state.stacks[0].length - 1) {
        const next = deal()
        state.stacks.forEach((stack, index) => {
          state.stacks[index] = stack.concat(next[index])
        })
      }
    },
    prev: state => {
      if (state.index > 0) {
        state.index -= 1
      }
    },
  },
  extraReducers: builder =>
    builder.addCase(initialize, state => {
      state.stacks = deal()
      state.index = 0
    }),
})

export const { next, prev } = stacksSlice.actions

export default stacksSlice.reducer
