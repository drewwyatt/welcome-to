import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'

export enum TimerState {
  Stopped = 'stopped',
  Running = 'running',
  Paused = 'paused',
}

export interface TimerSlice {
  seconds: number
  state: TimerState
  remaining: number
  lastTick: number
}

const initialState: TimerSlice = {
  seconds: 10,
  state: TimerState.Stopped,
  remaining: 0,
  lastTick: -1,
}

const tick = createAsyncThunk(
  'timer/tick',
  async (_, { dispatch }) =>
    new Promise<ThunkDispatch<unknown, unknown, AnyAction>>(resolved => {
      setTimeout(() => resolved(dispatch), 1000)
    }),
)

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<ThunkDispatch<unknown, unknown, any>>) => {
      if (state.state === TimerState.Stopped) {
        state.remaining = state.seconds
      }
      state.state = TimerState.Running
      action.payload(tick())
    },
    pause: state => {
      state.state = TimerState.Paused
    },
    stop: state => {
      state.state = TimerState.Stopped
    },
  },
  extraReducers: builder => {
    builder.addCase(tick.fulfilled, (state, action) => {
      if (state.remaining <= 0) {
        state.remaining = state.seconds
      } else {
        state.remaining--
      }

      if (state.state === TimerState.Running) {
        action.payload(tick())
      }
    })
  },
})

export const { start, stop, pause } = timerSlice.actions

export default timerSlice.reducer
