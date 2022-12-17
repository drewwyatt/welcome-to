import { configureStore } from '@reduxjs/toolkit'

import cityPlans from './city-plans/slice'
import constructionCards from './construction-cards/slice'
import game from './game/slice'
import timer, { timerListener } from './timer/slice'

export const store = configureStore({
  reducer: {
    cityPlans,
    constructionCards,
    game,
    timer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(timerListener.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
