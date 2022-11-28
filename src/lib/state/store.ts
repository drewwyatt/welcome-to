import { configureStore } from '@reduxjs/toolkit'

import game from './game/slice'
import stacks from './construction-cards/slice'

export const store = configureStore({
  reducer: {
    game,
    stacks,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
