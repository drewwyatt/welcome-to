import { createSlice } from '@reduxjs/toolkit'

import cards from '~/lib/data/construction-cards'
import { shuffle, split3 } from '~/lib/utils'

type Stack = typeof cards
const deal = () => split3(shuffle(cards))

export interface StackSlice {
  index: number
  stacks: [Stack, Stack, Stack]
}

const initialState: StackSlice = {
  index: 0,
  stacks: deal(),
}

const stacksSlice = createSlice({
  name: 'stacks',
  initialState,
  reducers: {
    next: state => {
      state.index += 1
      if (state.index === state.stacks.length - 1) {
        const next = deal()
        state.stacks.forEach((stack, index) => {
          state.stacks[index] = stack.concat(next[index])
        })
      }
    },
    prev: state => {
      if (state.index > 0) {
        state.index += 1
      }
    },
  },
})

export const { next, prev } = stacksSlice.actions

export default stacksSlice.reducer
