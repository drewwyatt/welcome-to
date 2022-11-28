import { createSlice } from '@reduxjs/toolkit'

export interface ConstructionCardsSlice {
  initialized: boolean
}

const initialState: ConstructionCardsSlice = {
  initialized: false,
}

const stacksSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initialize: state => {
      state.initialized = true
    },
  },
})

export const { initialize } = stacksSlice.actions

export default stacksSlice.reducer
