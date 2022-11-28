import { createSlice } from '@reduxjs/toolkit'

import cards from '~/lib/data/construction-cards'
import { shuffle, split3 } from '~/lib/utils'

type Stack = typeof cards
const deal = () => split3(shuffle(cards))

export interface StackSlice {
  index: number
  initialized: boolean
  stacks: [Stack, Stack, Stack]
}

const initialState: StackSlice = {
  index: -1,
  initialized: false,
  stacks: [[], [], []],
}

const stacksSlice = createSlice({
  name: 'stacks',
  initialState,
  reducers: {
    initialize: state => {
      state.stacks = deal()
      state.index = 0
      state.initialized = true
    },
    next: state => {
      if (!state.initialized) {
        return
      }
      state.index += 1
      if (state.index === state.stacks[0].length - 1) {
        const next = deal()
        state.stacks.forEach((stack, index) => {
          state.stacks[index] = stack.concat(next[index])
        })
      }
    },
    prev: state => {
      if (state.initialized && state.index > 0) {
        state.index -= 1
      }
    },
  },
})

export const { initialize, next, prev } = stacksSlice.actions

export default stacksSlice.reducer
