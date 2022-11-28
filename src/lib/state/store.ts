import { configureStore } from '@reduxjs/toolkit'

import cityPlans from './city-plans/slice'
import constructionCards from './construction-cards/slice'
import game from './game/slice'

export const store = configureStore({
  reducer: {
    cityPlans,
    constructionCards,
    game,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
