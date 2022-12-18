import { createListenerMiddleware, createSlice } from '@reduxjs/toolkit'
import cards from '~/lib/data/construction-cards'
import { shuffle, split3 } from '~/lib/utils'

import { initialize } from '../game/slice'
import { complete } from '../timer/slice'
import { hasCardState } from './guards'

type Stack = typeof cards
const deal = () => split3(shuffle(cards))

export interface ConstructionCardsSlice {
  index: number
  stacks: [Stack, Stack, Stack]
  playSound: boolean
}

const initialState: ConstructionCardsSlice = {
  index: -1,
  stacks: [[], [], []],
  playSound: false,
}

const drawNext = (state: ConstructionCardsSlice) => {
  state.index += 1
  if (state.index === state.stacks[0].length - 1) {
    const next = deal()
    state.stacks.forEach((stack, index) => {
      state.stacks[index] = stack.concat(next[index])
    })
  }
}

const stacksSlice = createSlice({
  name: 'construction-cards',
  initialState,
  reducers: {
    next: drawNext,
    prev: state => {
      if (state.index > 0) {
        state.index -= 1
      }
    },
    toggleFlipSound: state => {
      state.playSound = !state.playSound
    },
  },
  extraReducers: builder => {
    builder.addCase(initialize, state => {
      state.stacks = deal()
      state.index = 0
    })
    builder.addCase(complete, drawNext)
  },
})

export const { next, prev, toggleFlipSound } = stacksSlice.actions

export const flipListener = createListenerMiddleware()

export const cardsDidAdvance = (
  _: unknown,
  state: unknown,
  prevState: unknown,
): state is { constructionCards: ConstructionCardsSlice } =>
  hasCardState(state) &&
  hasCardState(prevState) &&
  state.constructionCards.index > 0 &&
  state.constructionCards.index > prevState.constructionCards.index

const shouldPlaySound = (_: unknown, state: unknown, prevState: unknown) =>
  cardsDidAdvance(_, state, prevState) && state.constructionCards.playSound

flipListener.startListening({
  predicate: shouldPlaySound,
  effect: async () => {
    const sound = new Audio('/ding.mp3')
    sound.play()
  },
})

export default stacksSlice.reducer
